import * as Dialog from "@radix-ui/react-dialog";
import { Label } from "@radix-ui/react-label";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { GameController, XCircle } from "phosphor-react";
import { FormEvent, useEffect, useRef, useState } from "react";
import { api } from "../services/api";
import { validateDiscord } from "../utils/validateDiscord";
import { validateTime } from "../utils/validateTime";
import { CheckboxInput } from "./Checkbox";
import { IGame } from "./Game";
import { Input } from "./Input";
import { ToastNotification } from "./ToastNotification";
import * as Toast from "@radix-ui/react-toast";

interface Props {
  setIsCreateAdModalOpen: (state: boolean) => void;
  setIsSuccessToastOpen: (state: boolean) => void;
}

export function CreateAdModal({
  setIsCreateAdModalOpen,
  setIsSuccessToastOpen,
}: Props) {
  const [games, setGames] = useState<IGame[] | null>(null);
  const [game, setGame] = useState("");
  const [name, setName] = useState("");
  const [discord, setDiscord] = useState("");
  const [yearsPlaying, setYearsPlaying] = useState("");
  const [hourStart, setHourStart] = useState("");
  const [hourEnd, setHourEnd] = useState("");
  const [weekDays, setWeekDays] = useState<string[]>([]);
  const [useVoiceChannel, setUseVoiceChannel] = useState(false);

  const [toastTitle, setToastTitle] = useState("");
  const [toastDescription, setToastDescription] = useState("");
  const [isToastOpen, setIsToastOpen] = useState(false);

  useEffect(() => {
    async function getGames() {
      const res = await api.get("/games");

      setGames(res.data);
    }

    getGames();
  }, []);

  function validateForm() {
    let isGameValid = false;

    games?.forEach((gameObj) => {
      if (game === gameObj.id) {
        isGameValid = true;
      }
    });

    if (!game || game.length == 0 || !isGameValid) {
      return {
        success: false,
        errors: {
          title: "Erro ao enviar o formulário",
          description: "Você precisa selecionar um jogo.",
        },
      };
    }

    if (!name || name.length == 0) {
      return {
        success: false,
        errors: {
          title: "Erro ao enviar o formulário",
          description: "Você precisa nos dizer qual seu nome dentro do jogo.",
        },
      };
    }

    if (!yearsPlaying || yearsPlaying.length == 0 || Number(yearsPlaying) < 0) {
      return {
        success: false,
        errors: {
          title: "Erro ao enviar o formulário",
          description: "Você precisa nos dizer há quanto tempo você joga.",
        },
      };
    }

    let isDiscordValid = validateDiscord(discord);

    if (!discord || discord.length == 0 || !isDiscordValid) {
      return {
        success: false,
        errors: {
          title: "Erro ao enviar o formulário",
          description: "Você precisa de um discord válido.",
        },
      };
    }

    if (!discord || discord.length == 0 || !isDiscordValid) {
      return {
        success: false,
        errors: {
          title: "Erro ao enviar o formulário",
          description: "Você precisa de um discord válido.",
        },
      };
    }

    if (!weekDays || weekDays.length == 0) {
      return {
        success: false,
        errors: {
          title: "Erro ao enviar o formulário",
          description: "Você precisa selecionar pelo menos um dia da semana!",
        },
      };
    }

    if (!hourStart || hourStart.length == 0 || !validateTime(hourStart)) {
      return {
        success: false,
        errors: {
          title: "Erro ao enviar o formulário",
          description: "Você precisa selecionar um horário inicial.",
        },
      };
    }

    if (!hourEnd || hourEnd.length == 0 || !validateTime(hourEnd)) {
      return {
        success: false,
        errors: {
          title: "Erro ao enviar o formulário",
          description: "Você precisa selecionar um horário final.",
        },
      };
    }

    return {
      success: true,
      errors: null,
    };
  }

  async function handleCreateAd(e: FormEvent) {
    e.preventDefault();

    const isFormValid = validateForm();

    if (!isFormValid.success && isFormValid.errors) {
      setIsToastOpen(true);
      setToastTitle(isFormValid.errors.title);
      setToastDescription(isFormValid.errors.description);

      return;
    }

    try {
      const res = await api.post(`/games/${game}/ads`, {
        name,
        discord,
        yearsPlaying: Number(yearsPlaying),
        hourStart,
        hourEnd,
        weekDays: weekDays.map(Number),
        useVoiceChannel,
      });

      setIsCreateAdModalOpen(false);
      setIsSuccessToastOpen(true);

      setGame("");
      setName("");
      setYearsPlaying("");
      setDiscord("");
      setWeekDays([]);
      setHourStart("");
      setHourEnd("");
      setUseVoiceChannel(false);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="z-20 bg-black/60 inset-0 fixed" />

      <Dialog.Content className="max-h-[90vh] scrollbar-thin scrollbar-thumb-zinc-500 overflow-y-scroll z-30 bg-[#2A2634] rounded-lg w-[29.75rem] mobile_xl:w-[80vw] mobile_xl:px-6 px-10 py-8 text-white top-1/2 left-1/2 fixed translate-x-[-50%] translate-y-[-50%] shadow-black/25">
        <Dialog.Title className="font-inter font-black text-[2rem] mb-8 mobile_xl:mb-3 mobile_xl:text-[1.5rem] tracking-wide">
          Publique um anúncio
        </Dialog.Title>

        <form onSubmit={handleCreateAd} className="flex flex-col">
          <div className="flex flex-col gap-2 mb-4">
            <label
              className="mb-2 mobile_xl:mb-1 font-inter font-semibold text-base"
              htmlFor="game"
            >
              Qual o game?
            </label>

            <select
              id="game"
              name="game"
              value={game}
              onChange={(e) => setGame(e.target.value)}
              className="cursor-pointer w-full h-[3.125rem] bg-zinc-900 py-3 px-4 font-roboto text-sm text-zinc-500 rounded-[.25rem]"
            >
              <option disabled value="">
                Selecione o game que deseja jogar
              </option>

              {games?.map((game) => (
                <option key={game.id} value={game.id}>
                  {game.title}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-2 mb-4">
            <label
              className="mb-2 mobile_xl:mb-1 font-inter font-semibold text-base text-white"
              htmlFor="name"
            >
              Seu nome (ou nickname)
            </label>
            <Input
              placeholder="Como te chamam dentro do game?"
              type="text"
              id="name"
              autoComplete="off"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex justify-between w-full items-center mb-4 mobile_xl:flex-col mobile_xl:gap-3">
            <div className="flex flex-col mobile_xl:w-full">
              <label
                className="mb-2 mobile_xl:mb-1 font-inter font-semibold text-base text-white"
                htmlFor="yearsPlaying"
              >
                Joga há quantos anos?
              </label>
              <Input
                type="number"
                id="yearsPlaying"
                name="yearsPlaying"
                value={yearsPlaying}
                onChange={(e) => setYearsPlaying(e.target.value)}
                placeholder="Tudo bem ser ZERO"
                className="w-[12rem] mobile_xl:w-full h-[3.125rem] bg-zinc-900 py-3 px-4 font-roboto text-sm text-zinc-500 rounded-[.25rem]"
              />
            </div>
            <div className="flex flex-col mobile_xl:w-full">
              <label
                className="mb-2 mobile_xl:mb-1 font-inter font-semibold text-base text-white"
                htmlFor="discord"
              >
                Qual seu Discord?
              </label>
              <Input
                type="text"
                id="discord"
                autoComplete="off"
                name="discord"
                value={discord}
                onChange={(e) => setDiscord(e.target.value)}
                placeholder="Usuario#0000"
                className="w-[12rem] mobile_xl:w-full h-[3.125rem] bg-zinc-900 py-3 px-4 font-roboto text-sm text-zinc-500 rounded-[.25rem]"
              />
            </div>
          </div>
          <div className="flex justify-between mb-6 mobile_xl:flex-col mobile_xl:gap-3">
            <div className="flex flex-col">
              <label className="mb-2 mobile_xl:mb-3 font-inter font-semibold text-base text-white">
                Quando costuma jogar?
              </label>

              <ToggleGroup.Root
                type="multiple"
                value={weekDays}
                onValueChange={setWeekDays}
                className="flex gap-1 max-w-[11rem] mobile_xl:max-w-full flex-wrap"
              >
                <ToggleGroup.Item
                  value="0"
                  className={`w-10 h-10 rounded-md text-white font-inter font-bold text-base flex items-center justify-center transition-all duration-100 ${
                    weekDays.includes("0") ? "bg-violet-500" : "bg-zinc-900"
                  }`}
                  title="Domingo"
                >
                  D
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value="1"
                  className={`w-10 rounded-md h-10 text-white font-inter font-bold text-base flex items-center justify-center transition-all duration-100 ${
                    weekDays.includes("1") ? "bg-violet-500" : "bg-zinc-900"
                  }`}
                  title="Segunda"
                >
                  S
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value="2"
                  className={`w-10 rounded-md h-10 text-white font-inter font-bold text-base flex items-center justify-center transition-all duration-100 ${
                    weekDays.includes("2") ? "bg-violet-500" : "bg-zinc-900"
                  }`}
                  title="Terça"
                >
                  T
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value="3"
                  className={`w-10 rounded-md h-10 text-white font-inter font-bold text-base flex items-center justify-center transition-all duration-100 ${
                    weekDays.includes("3") ? "bg-violet-500" : "bg-zinc-900"
                  }`}
                  title="Quarta"
                >
                  Q
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value="4"
                  className={`w-10 rounded-md h-10 text-white font-inter font-bold text-base flex items-center justify-center transition-all duration-100 ${
                    weekDays.includes("4") ? "bg-violet-500" : "bg-zinc-900"
                  }`}
                  title="Quinta"
                >
                  Q
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value="5"
                  className={`w-10 rounded-md h-10 text-white font-inter font-bold text-base flex items-center justify-center transition-all duration-100 ${
                    weekDays.includes("5") ? "bg-violet-500" : "bg-zinc-900"
                  }`}
                  title="Sexta"
                >
                  S
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value="6"
                  className={`w-10 rounded-md h-10 text-white font-inter font-bold text-base flex items-center justify-center transition-all duration-100 ${
                    weekDays.includes("6") ? "bg-violet-500" : "bg-zinc-900"
                  }`}
                  title="Sábado"
                >
                  S
                </ToggleGroup.Item>
              </ToggleGroup.Root>
            </div>
            <div className="flex flex-col">
              <label
                className="mb-2 mobile_xl:mb-1 font-inter font-semibold text-base text-white"
                htmlFor="hourStart"
              >
                Qual horário do dia?
              </label>
              <div className="flex items-center gap-2">
                <Input
                  className="w-20 h-[3.125rem] bg-zinc-900 py-3 px-4 font-roboto text-sm text-zinc-500 rounded-[.25rem] hide-clock"
                  type="time"
                  id="hourStart"
                  name="hourStart"
                  placeholder="De"
                  value={hourStart}
                  onChange={(e) => setHourStart(e.target.value)}
                />
                <Input
                  className="w-20 h-[3.125rem] bg-zinc-900 py-3 px-4 font-roboto text-sm text-zinc-500 rounded-[.25rem] hide-clock"
                  type="time"
                  id="hourEnd"
                  name="hourEnd"
                  placeholder="Até"
                  value={hourEnd}
                  onChange={(e) => setHourEnd(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="flex items-center mb-8">
            <CheckboxInput
              id="useVoiceChat"
              name="useVoiceChat"
              checked={useVoiceChannel}
              onCheckedChange={(checked) => {
                if (checked) {
                  setUseVoiceChannel(true);
                } else {
                  setUseVoiceChannel(false);
                }
              }}
            />
            <label
              className="ml-2 font-inter text-sm text-white cursor-pointer"
              htmlFor="useVoiceChat"
            >
              Costumo me conectar ao chat de voz
            </label>
          </div>

          <footer className="flex justify-end items-center gap-4 mobile_xl:flex-col">
            <Dialog.Close className="mobile_xl:w-full transition-all duration-150 hover:bg-zinc-600 cursor-pointer text-white bg-zinc-500 font-inter font-semibold px-5 rounded-md py-[0.90625rem] text-base">
              Cancelar
            </Dialog.Close>
            <button
              type="submit"
              className="mobile_xl:w-full transition-all duration-150 hover:bg-purple-600 cursor-pointer text-white bg-violet-500 font-inter font-semibold rounded-md flex items-center mobile_xl:justify-center px-5 py-[0.90625rem] gap-3 mobile_xl:text-sm text-base"
            >
              <GameController size={24} color="#fff" />
              <span>Encontrar duo</span>
            </button>
          </footer>
        </form>

        <div className="relative">
          <Toast.ToastProvider swipeDirection="right">
            <ToastNotification
              type="error"
              title={toastTitle}
              description={toastDescription}
              icon={<XCircle size={32} className="text-red-600" />}
              open={isToastOpen}
              setOpen={setIsToastOpen}
            />

            <Toast.Viewport />
          </Toast.ToastProvider>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  );
}

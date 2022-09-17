import * as Dialog from "@radix-ui/react-dialog";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { GameController } from "phosphor-react";
import { FormEvent, useEffect, useRef, useState } from "react";
import { api } from "../services/api";
import { CheckboxInput } from "./Checkbox";
import { IGame } from "./Game";
import { Input } from "./Input";

interface Props {
  setIsCreateAdModalOpen: (state: boolean) => void;
}

export function CreateAdModal({ setIsCreateAdModalOpen }: Props) {
  const [games, setGames] = useState<IGame[] | null>(null);
  const [game, setGame] = useState("");
  const [name, setName] = useState("");
  const [discord, setDiscord] = useState("");
  const [yearsPlaying, setYearsPlaying] = useState("");
  const [hourStart, setHourStart] = useState("");
  const [hourEnd, setHourEnd] = useState("");
  const [weekDays, setWeekDays] = useState<string[]>([]);
  const [useVoiceChannel, setUseVoiceChannel] = useState(false);

  useEffect(() => {
    async function getGames() {
      const res = await api.get("/games");

      setGames(res.data);
    }

    getGames();
  }, []);

  async function handleCreateAd(e: FormEvent) {
    e.preventDefault();

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
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="z-20 bg-black/60 inset-0 fixed" />
      <Dialog.Content className="z-30 bg-[#2A2634] rounded-lg w-[29.75rem] px-10 py-8 text-white top-1/2 left-1/2 fixed translate-x-[-50%] translate-y-[-50%] shadow-black/25">
        <Dialog.Title className="font-inter font-black text-[2rem] mb-8">
          Publique um anúncio
        </Dialog.Title>

        <form onSubmit={handleCreateAd} className="flex flex-col">
          <div className="flex flex-col gap-2 mb-4">
            <label
              className="mb-2 font-inter font-semibold text-base"
              htmlFor="game"
            >
              Qual o game?
            </label>
            <select
              id="game"
              name="game"
              value={game}
              onChange={(e) => setGame(e.target.value)}
              className="w-full h-[3.125rem] bg-zinc-900 py-3 px-4 font-roboto text-sm text-zinc-500 rounded-[.25rem]"
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
              className="mb-2 font-inter font-semibold text-base text-white"
              htmlFor="name"
            >
              Seu nome (ou nickname)
            </label>
            <Input
              placeholder="Como te chamam dentro do game?"
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex justify-between w-full items-center mb-4">
            <div className="flex flex-col">
              <label
                className="mb-2 font-inter font-semibold text-base text-white"
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
                className="w-[12rem] h-[3.125rem] bg-zinc-900 py-3 px-4 font-roboto text-sm text-zinc-500 rounded-[.25rem]"
              />
            </div>
            <div className="flex flex-col">
              <label
                className="mb-2 font-inter font-semibold text-base text-white"
                htmlFor="discord"
              >
                Qual seu Discord?
              </label>
              <Input
                type="text"
                id="discord"
                name="discord"
                value={discord}
                onChange={(e) => setDiscord(e.target.value)}
                placeholder="Usuario#0000"
                className="w-[12rem] h-[3.125rem] bg-zinc-900 py-3 px-4 font-roboto text-sm text-zinc-500 rounded-[.25rem]"
              />
            </div>
          </div>
          <div className="flex justify-between mb-6">
            <div className="flex flex-col">
              <label className="mb-2 font-inter font-semibold text-base text-white">
                Quando costuma jogar?
              </label>

              <ToggleGroup.Root
                type="multiple"
                value={weekDays}
                onValueChange={setWeekDays}
                className="flex gap-1 max-w-[11rem] flex-wrap"
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
                className="mb-2 font-inter font-semibold text-base text-white"
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

          <footer className="flex justify-end items-center gap-4">
            <Dialog.Close className="transition-all duration-150 hover:bg-zinc-600 cursor-pointer text-white bg-zinc-500 font-inter font-semibold px-5 rounded-md py-[0.90625rem] text-base">
              Cancelar
            </Dialog.Close>
            <button
              type="submit"
              className="transition-all duration-150 hover:bg-purple-600 cursor-pointer text-white bg-violet-500 font-inter font-semibold rounded-md flex items-center px-5 py-[0.90625rem] gap-3 text-base"
            >
              <GameController size={24} color="#fff" />
              <span>Encontrar duo</span>
            </button>
          </footer>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  );
}

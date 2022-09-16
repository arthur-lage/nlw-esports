import React, { FormEvent, useEffect, useState } from "react";

import * as Dialog from "@radix-ui/react-dialog";

import Logo from "/logo.svg";

import { IGame } from "../../components/Game";
import { CreateAdBanner } from "../../components/CreateAdBanner";
import { GameList } from "../../components/GameList";

import { api } from "../../services/api";
import { GameController } from "phosphor-react";
import { Input } from "../../components/Input";

export function Games() {
  const [games, setGames] = useState<IGame[] | null>(null);

  useEffect(() => {
    async function getGames() {
      const res = await api.get("/games");

      setGames(res.data);
    }

    getGames();
  }, []);

  async function handleCreateAd(e: FormEvent) {
    e.preventDefault();
  }

  return (
    <div className="min-h-[100vh] flex flex-col justify-center items-center">
      <img className="mb-20 mt-20" src={Logo} alt="NLW e-sports Logo" />

      <h1 className="font-inter mb-16 text-center text-white text-[4rem] font-black inline-block">
        Seu{" "}
        <span className="bg-clip-text bg-purple-green-yellow-gradient text-transparent">
          duo
        </span>{" "}
        está aqui.
      </h1>

      <GameList games={games} />

      <Dialog.Root>
        <CreateAdBanner />

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
                  htmlFor="game-select"
                >
                  Qual o game?
                </label>
                <Input
                  placeholder="Selecione o game que deseja jogar"
                  type="text"
                  id="game-select"
                  className="w-full h-[3.125rem] bg-zinc-900 py-3 px-4 font-roboto text-sm text-zinc-500 rounded-[.25rem] appearance-none clock-input"

                />
              </div>
              <div className="flex flex-col gap-2 mb-4">
                <label
                  className="mb-2 font-inter font-semibold text-base text-white"
                  htmlFor="game-nickname"
                >
                  Seu nome (ou nickname)
                </label>
                <Input
                  placeholder="Como te chamam dentro do game?"
                  type="text"
                  id="game-nickname"
                />
              </div>
              <div className="flex justify-between w-full items-center mb-4">
                <div className="flex flex-col">
                  <label
                    className="mb-2 font-inter font-semibold text-base text-white"
                    htmlFor="years-playing"
                  >
                    Joga há quantos anos?
                  </label>
                  <Input
                    type="number"
                    id="years-playing"
                    placeholder="Tudo bem ser ZERO"
                    className="w-[12rem] h-[3.125rem] bg-zinc-900 py-3 px-4 font-roboto text-sm text-zinc-500 rounded-[.25rem] appearance-none clock-input"
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
                    placeholder="Usuario#0000"
                    className="w-[12rem] h-[3.125rem] bg-zinc-900 py-3 px-4 font-roboto text-sm text-zinc-500 rounded-[.25rem] appearance-none clock-input"
                  />
                </div>
              </div>
              <div className="flex justify-between mb-6">
                <div className="flex flex-col">
                  <label
                    className="mb-2 font-inter font-semibold text-base text-white"
                    htmlFor="discord"
                  >
                    Quando costuma jogar?
                  </label>

                  <div className="flex gap-1 max-w-[11rem] flex-wrap">
                    <button className="w-10 h-10 bg-zinc-900 text-white font-inter font-bold text-base flex items-center justify-center" title="Domingo">D</button>
                    <button className="w-10 h-10 bg-zinc-900 text-white font-inter font-bold text-base flex items-center justify-center" title="Segunda">S</button>
                    <button className="w-10 h-10 bg-zinc-900 text-white font-inter font-bold text-base flex items-center justify-center" title="Terça">T</button>
                    <button className="w-10 h-10 bg-zinc-900 text-white font-inter font-bold text-base flex items-center justify-center" title="Quarta">Q</button>
                    <button className="w-10 h-10 bg-zinc-900 text-white font-inter font-bold text-base flex items-center justify-center" title="Quinta">Q</button>
                    <button className="w-10 h-10 bg-zinc-900 text-white font-inter font-bold text-base flex items-center justify-center" title="Sexta">S</button>
                    <button className="w-10 h-10 bg-zinc-900 text-white font-inter font-bold text-base flex items-center justify-center" title="Sábado">S</button>
                  </div>
                </div>
                <div className="flex flex-col">
                  <label
                    className="mb-2 font-inter font-semibold text-base text-white"
                    htmlFor="from"
                  >
                    Qual horário do dia?
                  </label>
                  <div className="flex items-center gap-2">
                    <Input
                      className="w-20 h-[3.125rem] bg-zinc-900 py-3 px-4 font-roboto text-sm text-zinc-500 rounded-[.25rem] appearance-none clock-input"
                      type="time"
                      id="from"
                      placeholder="De"
                    />
                    <Input
                      className="w-20 h-[3.125rem] bg-zinc-900 py-3 px-4 font-roboto text-sm text-zinc-500 rounded-[.25rem] appearance-none clock-input"
                      type="time"
                      id="to"
                      placeholder="Até"
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center mb-8">
                <input type="checkbox" name="voice-chat" id="voice-chat" />
                <label
                  className="ml-2 font-inter text-sm text-white cursor-pointer"
                  htmlFor="voice-chat"
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
      </Dialog.Root>
    </div>
  );
}

import React from "react";

import Logo from "/logo.svg";
import { MagnifyingGlassPlus } from "phosphor-react";

import Game from "/image 1.png";

export function Games() {
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

      <section className="mb-8 grid grid-cols-6 gap-6">
        <a
          className="rounded-lg relative hover:brightness-110 hover:scale-105 transition-all duration-150"
          href="#"
        >
          <img src={Game} alt="" />
          <div className="h-[7.5rem] justify-end bg-fade-black rounded-lg z-10 flex flex-col absolute bottom-0 left-0 px-4 pb-4 w-full">
            <p className="font-bold font-inter text-base text-white">
              League of Legends
            </p>
            <p className="font-inter mt-1 text-sm text-zinc-300">4 anúncios</p>
          </div>
        </a>
        <a
          className="rounded-lg relative hover:brightness-110 hover:scale-105 transition-all duration-150"
          href="#"
        >
          <img src={Game} alt="" />
          <div className="h-[7.5rem] justify-end bg-fade-black rounded-lg z-10 flex flex-col absolute bottom-0 left-0 px-4 pb-4 w-full">
            <p className="font-bold font-inter text-base text-white">
              League of Legends
            </p>
            <p className="font-inter mt-1 text-sm text-zinc-300">4 anúncios</p>
          </div>
        </a>
        <a
          className="rounded-lg relative hover:brightness-110 hover:scale-105 transition-all duration-150"
          href="#"
        >
          <img src={Game} alt="" />
          <div className="h-[7.5rem] justify-end bg-fade-black rounded-lg z-10 flex flex-col absolute bottom-0 left-0 px-4 pb-4 w-full">
            <p className="font-bold font-inter text-base text-white">
              League of Legends
            </p>
            <p className="font-inter mt-1 text-sm text-zinc-300">4 anúncios</p>
          </div>
        </a>
        <a
          className="rounded-lg relative hover:brightness-110 hover:scale-105 transition-all duration-150"
          href="#"
        >
          <img src={Game} alt="" />
          <div className="h-[7.5rem] justify-end bg-fade-black rounded-lg z-10 flex flex-col absolute bottom-0 left-0 px-4 pb-4 w-full">
            <p className="font-bold font-inter text-base text-white">
              League of Legends
            </p>
            <p className="font-inter mt-1 text-sm text-zinc-300">4 anúncios</p>
          </div>
        </a>
        <a
          className="rounded-lg relative hover:brightness-110 hover:scale-105 transition-all duration-150"
          href="#"
        >
          <img src={Game} alt="" />
          <div className="h-[7.5rem] justify-end bg-fade-black rounded-lg z-10 flex flex-col absolute bottom-0 left-0 px-4 pb-4 w-full">
            <p className="font-bold font-inter text-base text-white">
              League of Legends
            </p>
            <p className="font-inter mt-1 text-sm text-zinc-300">4 anúncios</p>
          </div>
        </a>
        <a
          className="rounded-lg relative hover:brightness-110 hover:scale-105 transition-all duration-150"
          href="#"
        >
          <img src={Game} alt="" />
          <div className="h-[7.5rem] justify-end bg-fade-black rounded-lg z-10 flex flex-col absolute bottom-0 left-0 px-4 pb-4 w-full">
            <p className="font-bold font-inter text-base text-white">
              League of Legends
            </p>
            <p className="font-inter mt-1 text-sm text-zinc-300">4 anúncios</p>
          </div>
        </a>
      </section>

      <div className="pt-[4px] mb-[8.25rem] rounded-lg bg-purple-green-yellow-gradient overflow-hidden">
        <div className="bg-[#2A2634] rounded-lg py-6 px-8 flex items-center justify-between w-[75rem]">
          <div className="flex flex-col">
            <h2 className="text-white font-black text-2xl">
              Não encontrou seu duo?
            </h2>
            <p className="font-inter text-zinc-400 text-base">
              Publique um anúncio para encontrar novos players!
            </p>
          </div>
          <button className="gap-3  flex items-center px-4 py-3 rounded-md bg-violet-500 transition-all duration-150 hover:bg-violet-600">
            <MagnifyingGlassPlus size={24} color="#fff"/>

            <span className="font-inter text-white font-medium text-base">
              Publicar anúncio
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

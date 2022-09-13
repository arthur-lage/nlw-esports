import React from "react";

import Logo from "../../assets/logo.svg";
import MagnifierPlus from "../../assets/magnifier-plus.svg";

export function Games() {
  return (
    <div className="min-h-[100vh] flex flex-col justify-center items-center">
      <img className="mb-20" src={Logo} alt="NLW e-sports Logo" />

      <h1 className="mb-16 text-center text-white text-[4rem] font-black inline-block">
        Seu{" "}
        <span className="bg-clip-text bg-duo-text text-fill-transparent">
          duo
        </span>{" "}
        está aqui.
      </h1>

      <section></section>

      <div className="bg-[#2A2634] border-t-4 border-inherit rounded-lg py-6 px-8 flex items-center justify-between w-[1200px]">
        <div className="flex flex-col">
          <h2 className="text-white font-black text-2xl">
            Não encontrou seu duo?
          </h2>
          <p className="text-zinc-400 text-base">
            Publique um anúncio para encontrar novos players!
          </p>
        </div>
        <button className="gap-3  flex items-center px-4 py-3 rounded-md bg-violet-500">
          <img src={MagnifierPlus} alt="New adnouncement" />
          <span className="text-white font-medium text-base">
            Publicar anúncio
          </span>
        </button>
      </div>
    </div>
  );
}

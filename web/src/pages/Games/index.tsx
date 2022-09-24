import React, { useEffect, useState } from "react";

import * as Dialog from "@radix-ui/react-dialog";

import Logo from "/logo.svg";

import { IGame } from "../../components/Game";
import { CreateAdBanner } from "../../components/CreateAdBanner";
import { GameList } from "../../components/GameList";

import { api } from "../../services/api";
import { CreateAdModal } from "../../components/CreateAdModal";
import { CheckCircle } from "phosphor-react";
import * as Toast from "@radix-ui/react-toast";
import { ToastNotification } from "../../components/ToastNotification";

export function Games() {
  const [games, setGames] = useState<IGame[] | null>(null);
  const [isSuccessToastOpen, setIsSuccessToastOpen] = useState(false);

  const [isCreateAdModalOpen, setIsCreateAdModalOpen] = useState(false);

  useEffect(() => {
    async function getGames() {
      const res = await api.get("/games");

      setGames(res.data);
    }

    getGames();
  }, []);

  return (
    <div className="pb-8 min-h-[100vh] flex flex-col justify-center items-center">
      <img
        className="mb-20 mt-20 mobile_l:w-[15rem]"
        src={Logo}
        alt="NLW e-sports Logo"
      />

      <h1 className="font-inter mb-16 text-center text-white text-[4rem] font-black inline-block mobile_xl:text-[2.5rem] mobile_m:text-[1.95rem] mobile_s:text-[1.6rem]">
        Seu{" "}
        <span className="bg-clip-text bg-purple-green-yellow-gradient text-transparent">
          duo
        </span>{" "}
        está aqui.
      </h1>

      <GameList games={games} />

      <Dialog.Root
        onOpenChange={setIsCreateAdModalOpen}
        open={isCreateAdModalOpen}
      >
        <CreateAdBanner />

        <CreateAdModal setIsSuccessToastOpen={setIsSuccessToastOpen} setIsCreateAdModalOpen={setIsCreateAdModalOpen} />
      </Dialog.Root>

      <div className="relative">
        <Toast.ToastProvider swipeDirection="right">
          <ToastNotification
            title="Sucesso"
            description="Ad criado com sucesso."
            type="success"
            icon={<CheckCircle size={32} className="text-green-600" />}
            open={isSuccessToastOpen}
            setOpen={setIsSuccessToastOpen}
          />

          <Toast.Viewport />
        </Toast.ToastProvider>
      </div>
    </div>
  );
}

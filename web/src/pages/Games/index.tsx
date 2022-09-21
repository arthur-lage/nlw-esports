import React, { useEffect, useState } from "react";

import * as Dialog from "@radix-ui/react-dialog";

import Logo from "/logo.svg";

import { IGame } from "../../components/Game";
import { CreateAdBanner } from "../../components/CreateAdBanner";
import { GameList } from "../../components/GameList";

import { api } from "../../services/api";
import { CreateAdModal } from "../../components/CreateAdModal";
import { LoginWithDiscord } from "../../components/LoginWIthDiscord";
import { useAuth } from "../../hooks/useAuth";
import { Profile } from "../../components/Profile";

export function Games() {
  const [games, setGames] = useState<IGame[] | null>(null);

  const { currentUser } = useAuth();

  const [isCreateAdModalOpen, setIsCreateAdModalOpen] = useState(false);

  useEffect(() => {
    async function getGames() {
      const res = await api.get("/games");

      setGames(res.data);
    }

    getGames();
  }, []);

  return (
    <div className="min-h-[100vh] flex flex-col justify-center items-center">
      {currentUser ? <Profile /> : <LoginWithDiscord />}

      <img className="mb-20 mt-20" src={Logo} alt="NLW e-sports Logo" />

      <h1 className="font-inter mb-16 text-center text-white text-[4rem] font-black inline-block">
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

        <CreateAdModal setIsCreateAdModalOpen={setIsCreateAdModalOpen} />
      </Dialog.Root>
    </div>
  );
}

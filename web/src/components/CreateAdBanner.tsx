import { MagnifyingGlassPlus } from "phosphor-react";
import * as Dialog from '@radix-ui/react-dialog';

export function CreateAdBanner() {
  return (
    <div className="pt-[4px] mb-[8.25rem] rounded-lg bg-purple-green-yellow-gradient overflow-hidden">
      <div className="bg-[#2A2634] tablet:flex-col tablet:gap-5 rounded-lg py-6 px-8 flex items-center justify-between w-[75rem] desktop:w-[85vw]">
        <div className="flex tablet:items-center tablet:text-center flex-col mobile_m:gap-4">
          <h2 className="text-white font-black text-2xl">
            Não encontrou seu duo?
          </h2>
          <p className="font-inter text-zinc-400 text-base">
            Publique um anúncio para encontrar novos players!
          </p>
        </div>
        <Dialog.Trigger className="gap-3 tablet:w-full tablet:justify-center tablet:text-center flex items-center px-4 py-3 rounded-md bg-violet-500 transition-all duration-150 hover:bg-violet-600">
          <MagnifyingGlassPlus size={24} color="#fff" />

          <span className="font-inter text-white font-medium text-base">
            Publicar anúncio
          </span>
        </Dialog.Trigger>
      </div>
    </div>
  );
}

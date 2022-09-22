import { CaretLeft, CaretRight } from "phosphor-react";
import { useRef } from "react";
import { Game, IGame } from "./Game";

type Props = {
  games: IGame[] | null;
};

export function GameList({ games }: Props) {
  const carousel = useRef(null);

  function leftClick(e: any) {
    e.preventDefault();

    //@ts-ignore
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  }

  function rightClick(e: any) {
    e.preventDefault();

    //@ts-ignore
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  }

  return (
    <div className="flex items-center gap-6 mobile_xl:gap-2 ">
      <button onClick={leftClick} type="button" className="mobile_xl:hidden bg-transparent cursor-pointer">
        <CaretLeft size={48} className="text-zinc-400" />
      </button>
      <section
        ref={carousel}
        className="scroll-smooth no-scrollbar max-w-[75rem] mobile_xl:max-w-[80vw] pl-3 flex items-center overflow-y-hidden py-4 overflow-x-auto w-full mb-8 gap-6"
      >
        {games && games.map((game) => <Game key={game.id} data={game} />)}
      </section>
      <button onClick={rightClick} type="button" className="mobile_xl:hidden bg-transparent cursor-pointer">
        <CaretRight size={48} className="text-zinc-400" />
      </button>
    </div>
  );
}

import { Game, IGame } from "./Game";
import { useKeenSlider } from "keen-slider/react";

type Props = {
  games: IGame[] | null;
};

export function GameList({ games }: Props) {
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      slideChanged() {
        console.log("slide changed");
      },
      slides: {
        perView: 6,
      }
    },
    [
      // add plugins here
    ]
  );

  return (
    <section className="mb-8 grid grid-cols-6 gap-6">
      {games && games.map((game) => <Game key={game.id} data={game} />)}
    </section>
  );
}

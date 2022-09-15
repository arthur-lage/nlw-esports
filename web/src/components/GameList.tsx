import { Game, IGame } from "./Game";

type Props = {
  games: IGame[] | null;
};

export function GameList({ games }: Props) {
  return (
    <section className="mb-8 grid grid-cols-6 gap-6">
      {games && games.map((game) => <Game key={game.id} data={game} />)}
    </section>
  );
}

export interface IGame {
  id: string;
  bannerUrl: string;
  title: string;
  _count: {
    ads: number;
  };
}

interface Props {
  data: IGame;
}

export function Game({ data }: Props) {
  return (
    <a
      className="rounded-lg flex-none relative hover:brightness-110 hover:scale-105 transition-all duration-150"
      href="#"
    >
      <img
        className="w-[11.25rem] h-[15rem] rounded-lg"
        src={data.bannerUrl}
        alt={data.title}
      />
      <div className="h-[7.5rem] justify-end bg-fade-black rounded-lg z-10 flex flex-col absolute bottom-0 left-0 px-4 pb-4 w-full">
        <p className="font-bold font-inter text-base text-white">
          {data.title}
        </p>
        <p className="font-inter mt-1 text-sm text-zinc-300">
          {data._count.ads} anúncios
        </p>
      </div>
    </a>
  );
}

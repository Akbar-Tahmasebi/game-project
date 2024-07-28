import { IGameQuery } from "../App";
import useGames from "../hooks/useGames";
import Loading from "./loading/Loading";
import GameCart from "./gameCart/GameCart";

interface props {
  gameQuery: IGameQuery;
}

export default function GamesItem({ gameQuery }: props) {
  const { data, isLoading } = useGames(gameQuery);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-12 gap-5 p-5">
          {data.map((item) => (
            <GameCart key={item.id} game={item} />
          ))}
        </div>
      )}
    </>
  );
}

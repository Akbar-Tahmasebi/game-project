import { IGame } from "../../hooks/useGames";
import { getImgUrl } from "../../services/imgUrl";
import PlatformIcon from "./PlatformIcon";

interface props {
  game: IGame;
}

export default function ({ game }: props) {
  return (
    <div className="col-span-12 sm:col-span-6 lg:col-span-4 rounded bg-neutral-400 dark:bg-neutral-600 hover:[box-shadow:_0_0_5px_rgb(23_23_23)] dark:hover:[box-shadow:_0_0_5px_rgb(245_245_245)]">
      <img
        src={getImgUrl(game.background_image)}
        alt="game image"
        className="rounded-t w-full"
      />
      <div className="flex justify-between pt-3 px-3 items-center">
        <PlatformIcon
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
        {game.metacritic ? (
          <span className=" px-1 text-right text-sm bg-neutral-300 text-neutral-700 rounded dark:bg-neutral-700 dark:text-neutral-300">
            {game.metacritic}
          </span>
        ) : (
          ""
        )}
      </div>
      <h3 className="text-neutral-900 dark:text-neutral-100 font-bold text-lg p-3">
        {game.name}
      </h3>
    </div>
  );
}

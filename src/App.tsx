import GenresItem from "./components/GenresItem";
import GamesItem from "./components/GamesItem";
import Navbar from "./components/Navbar";
import { useState } from "react";
import { IGenre } from "./hooks/useGenres";
import Platforms from "./components/Platforms";
import { IPlatform } from "./hooks/usePlatforms";
import SortSelector from "./components/SortSelector";

export interface IGameQuery {
  genre: IGenre | null;
  platform: IPlatform | null;
  sortOrder: string;
  searchItem: string;
}

export default function App() {
  const [gameQuery, setGameQuery] = useState<IGameQuery>({} as IGameQuery);

  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;

  return (
    <>
      <Navbar
        onSearch={(searchItem) => setGameQuery({ ...gameQuery, searchItem })}
      />

      <div className="grid grid-cols-12">
        <div className="hidden lg:inline-block lg:col-span-3 2xl:col-span-2 p-3 bg-neutral-400 dark:bg-neutral-600">
          <h2 className="text-neutral-900 dark:text-neutral-100 font-bold px-2 py-3 text-2xl">
            Genres
          </h2>

          <GenresItem
            selectedGenre={gameQuery.genre}
            onSelectedGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </div>

        <div className="col-span-12 lg:col-span-9 2xl:col-span-10 bg-neutral-200 dark:bg-neutral-800 min-h-svh">
          <div className="flex  flex-col px-5 pt-5">
            <h2 className=" text-neutral-900 dark:text-neutral-100 font-bold mb-5 text-3xl">
              {heading}
            </h2>

            <div className="hidden md:inline-block">
              <div className="flex gap-5">
                <Platforms
                  selectedPlatform={gameQuery.platform}
                  onSelectedPlatform={(platform) =>
                    setGameQuery({ ...gameQuery, platform })
                  }
                />

                <SortSelector
                  onSelectedsortOrder={(sortOrder) =>
                    setGameQuery({ ...gameQuery, sortOrder })
                  }
                  sortOrder={gameQuery.sortOrder}
                />
              </div>
            </div>
          </div>

          <GamesItem gameQuery={gameQuery} />
        </div>
      </div>
    </>
  );
}

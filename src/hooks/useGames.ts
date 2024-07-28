import { IGameQuery } from "../App";
import useData from "./useData";

export interface platform {
  id: number;
  name: string;
  slug: string;
}

export interface IGame {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: platform }[];
  metacritic: number;
}

export default function useGames(gameQuery: IGameQuery) {
  return useData<IGame>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchItem,
      },
    },
    [gameQuery]
  );
}

import Genres from "../data/Genres";

export interface IGenre {
  id: number;
  name: string;
  image_background: string;
}

export default function useGenres() {
  return { data: Genres };
}
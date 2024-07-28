import Platforms from "../data/Platforms";

export interface IPlatform {
  id: number;
  name: string;
  slug: string;
}

export default function usePlatforms() {
  return { data: Platforms };
}
import useGenres, { IGenre } from "../hooks/useGenres";
import { getImgUrl } from "../services/imgUrl";

interface props {
  onSelectedGenre: (ganre: IGenre) => void;
  selectedGenre: IGenre | null;
}

export default function GenresItem({ onSelectedGenre, selectedGenre }: props) {
  const { data } = useGenres();
  return (
      <ul>
        {data.map((item) => (
          <li
            key={item.id}
            className="m-2 bg-neutral-200 dark:bg-neutral-800 rounded hover:[box-shadow:_0_0_5px_rgb(23_23_23)] dark:hover:[box-shadow:_0_0_5px_rgb(245_245_245)]"
          >
            <button
              onClick={() => onSelectedGenre(item)}
              className={`flex items-center rounded w-full text-neutral-900  dark:text-neutral-100 ${
                selectedGenre?.id === item.id
                  ? "bg-neutral-800 !text-neutral-100 dark:bg-neutral-200 dark:!text-neutral-800"
                  : ""
              }`}
            >
              <img
                src={getImgUrl(item.image_background)}
                className="w-14 rounded-l "
                alt="img"
              />
              <span className="pl-2 py-2  font-bold text-sm">
                {item.name}
              </span>
            </button>
          </li>
        ))}
      </ul>
  );
}

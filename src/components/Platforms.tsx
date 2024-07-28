import { TiArrowSortedDown } from "react-icons/ti";
import usePlatforms, { IPlatform } from "../hooks/usePlatforms";

interface props {
  onSelectedPlatform: (platform: IPlatform) => void;
  selectedPlatform: IPlatform | null;
}

export default function Platforms({
  onSelectedPlatform,
  selectedPlatform,
}: props) {
  const { data } = usePlatforms();

  return (
    <div className="group w-60">
      <button className="w-full bg-neutral-400 dark:bg-neutral-600 rounded flex items-center justify-between px-3 py-1">
        <span className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
          {selectedPlatform?.name || "Platforms"}
        </span>
        <TiArrowSortedDown className="text-neutral-700 dark:text-neutral-400" />
      </button>
      
      <ul className="w-60 scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top border-2 border-neutral-400 dark:border-neutral-600 bg-neutral-300 dark:bg-neutral-700 rounded px-1 pt-1 mt-1">
        {data.map((item) => (
          <li
            onClick={() => onSelectedPlatform(item)}
            key={item.id}
            className="text-xl px-2 py-1 mb-1 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-800 hover:text-neutral-100 rounded cursor-pointer dark:hover:bg-neutral-200 dark:hover:text-neutral-900"
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

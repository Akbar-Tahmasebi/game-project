import { TiArrowSortedDown } from "react-icons/ti";

interface props {
  onSelectedsortOrder: (sortOrder: string) => void;
  sortOrder: string;
}

export default function SortSelector({
  onSelectedsortOrder,
  sortOrder,
}: props) {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "added", label: "Data added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release data" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );
  
  return (
    <div className="group w-72">
      <button className="w-full bg-neutral-400 dark:bg-neutral-600 rounded flex items-center justify-between px-3 py-1">
        <span className="text-xl text-neutral-900 dark:text-neutral-100">
          Order by:{" "}
          <span className="font-bold">
            {currentSortOrder?.label || "Relevance"}
          </span>
        </span>
        <TiArrowSortedDown className="text-neutral-700 dark:text-neutral-400" />
      </button>

      <ul className="w-72 scale-0 border-2 border-neutral-400 dark:border-neutral-600 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top bg-neutral-300 dark:bg-neutral-700 rounded px-1 pt-1 mt-1">
        {sortOrders.map((order) => (
          <li
            onClick={() => onSelectedsortOrder(order.value)}
            key={order.value}
            value={order.value}
            className="text-xl px-2 py-1 mb-1 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-800 hover:text-neutral-100 rounded cursor-pointer dark:hover:bg-neutral-200 dark:hover:text-neutral-900"
          >
            {order.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

import logo from "../assets/logo.png";
import { IoMdSunny, IoMdMoon, IoMdSearch } from "react-icons/io";
import { useRef, useState } from "react";

interface props {
  onSearch: (searchItem: string) => void;
}

export default function Navbar({ onSearch }: props) {
  const [theme, setTheme] = useState(false);
  const ref = useRef<HTMLInputElement>(null);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setTheme((prevTheme) => !prevTheme);
  };
  
  return (
    <div className="flex items-center justify-between p-5 bg-neutral-100 dark:bg-neutral-900">
      <div className="flex items-center">
        <img src={logo} alt="logo" className="w-16 mr-8" />
        <h1 className="font-bold text-3xl [text-shadow:_1px_2px_3px_rgb(23_23_23_/_40%)] dark:[text-shadow:_1px_2px_3px_rgb(245_245_245_/_40%)] dark:text-neutral-100">
          Game Club
        </h1>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (ref.current?.value) onSearch(ref.current.value);
        }}
        className="relative w-80 lg:w-96 hidden md:inline-block"
      >
        <IoMdSearch className="absolute text-4xl h-10  bg-neutral-400 dark:bg-neutral-600 text-neutral-900 dark:text-neutral-100 rounded-l" />
        <input
          ref={ref}
          type="text"
          placeholder="Search"
          className="pl-10 pr-3 py-1 text-xl rounded w-full border-2 bg-neutral-200 text-neutral-900 border-neutral-400 focus:outline-none dark:text-neutral-100 dark:border-neutral-600 dark:bg-neutral-800 "
        />
      </form>

      <div>
        <button
          onClick={toggleTheme}
          className="rounded-full text-2xl bg-neutral-900 text-neutral-100 p-2 dark:bg-neutral-100 dark:text-neutral-900"
        >
          {theme ? <IoMdSunny /> : <IoMdMoon />}
        </button>
      </div>
    </div>
  );
}

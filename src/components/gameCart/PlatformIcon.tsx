import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { platform } from "../../hooks/useGames";

interface props {
  platforms: platform[];
}

export default function ({ platforms }: props) {
  const iconList = platforms.map(({ slug }) => {
    if (slug == "pc") {
      return <FaWindows />;
    } else if (slug == "playstation") {
      return <FaPlaystation />;
    } else if (slug == "xbox") {
      return <FaXbox />;
    } else if (slug == "nintendo") {
      return <SiNintendo />;
    } else if (slug == "mac") {
      return <FaApple />;
    } else if (slug == "linux") {
      return <FaLinux />;
    } else if (slug == "android") {
      return <FaAndroid />;
    } else if (slug == "ios") {
      return <MdPhoneIphone />;
    } else if (slug == "web") {
      return <BsGlobe />;
    }
  });

  return (
    <ul className="flex ">
      {iconList.map((e) => {
        return (
          <li
            className="mr-1 text-neutral-700 dark:text-neutral-400"
            key={Math.random()}
          >
            {e}
          </li>
        );
      })}
    </ul>
  );
}

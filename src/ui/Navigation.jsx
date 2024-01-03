import { NavLink } from "react-router-dom";
import Svg from "./Svg";

const navData = [
  { name: "language", text: "Studio", to: "/" },
  { name: "tools", text: "Projects", to: "/projects" },
  { name: "person", text: "About me", to: "/about" },
  { name: "music", text: "Music", to: "/music" },
  { name: "extension", text: "Blog", to: "/blog" },
  { name: "library", text: "Library", to: "/library" },
];

const Navigation = () => {
  return (
    <nav className="pt-4 ">
      <ul className="flex flex-col text-base font-medium uppercase text-gray-800 dark:text-white">
        {navData.map((nav) => {
          return (
            <li key={nav.name} className=" mb-4 ">
              <NavLink
                to={nav.to}
                className={({ isActive }) =>
                  [
                    isActive
                      ? "bg-lightpink text-pink hover:bg-lightpink hover:shadow-activedenum dark:bg-lightpink-dark hover:dark:bg-lightpink-dark hover:dark:shadow-deneum-dark "
                      : undefined,
                    "hover:bg-currentcolor flex items-center justify-center gap-2 rounded-lg bg-ash px-4 py-3 shadow-neum transition-all duration-150 hover:bg-darkash hover:shadow-deneum dark:bg-black dark:shadow-neum-dark dark:hover:bg-neum-bg-dark dark:hover:shadow-deneum-dark",
                  ]
                    .filter(Boolean)
                    .join(" ")
                }
              >
                <Svg name={nav.name} color="currentcolor" />
                {nav.text}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;

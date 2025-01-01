import { useContext } from "react";
import ThemeContext from "../../store/theme-context";
import Svg from "./Svg";

const Header = () => {
  const ctx = useContext(ThemeContext);

  const icons = [
    {
      name: "x",
      link: "https://x.com/techymuideen",
      color: `${ctx.darkTheme ? "#fff" : "#000"}`,
    },
    { name: "facebook", link: "https://www.facebook.com/PopWealth" },
    { name: "whatsapp", link: "https://wa.link/y6ticx" },
    {
      name: "github1",
      link: "https://github.com/techymuideen",
      color: `${ctx.darkTheme ? "#fff" : "#000"}`,
    },
    {
      name: "linkedin",
      link: "https://www.linkedin.com/in/muideenpopoola",
      color: `${ctx.darkTheme ? "#fff" : "#000"}`,
    },

    { name: "telegram", link: "https://t.me/MuideenPopoola" },
  ];

  return (
    <header className="sticky top-0 z-10 flex items-center bg-ash px-6 py-3 shadow-header dark:bg-black">
      <div
        onClick={ctx.onToggle}
        className="cursor-pointer rounded-full bg-ash px-3 py-3 shadow-neum hover:shadow-deneum dark:bg-black dark:shadow-neum-dark dark:hover:bg-neum-bg-dark dark:hover:shadow-round-deneum-dark"
      >
        <Svg name="menu" color={ctx.darkTheme ? "#fff" : undefined} />
      </div>
      <h2 className="ml-5 text-xl font-normal text-black dark:font-black dark:text-white">
        Pop.<span className="font-black text-pink">Studio</span>
      </h2>

      <ul className="ml-auto hidden items-center gap-4 lg:flex ">
        {icons.map((icon) => {
          return (
            <li key={icon.name}>
              <a
                target="_blank"
                rel="noreferrer"
                className="flex items-center rounded-full bg-ash p-[10px] shadow-neum hover:shadow-deneum dark:bg-black dark:shadow-rounded-neum-dark dark:hover:bg-neum-bg-dark dark:hover:shadow-round-deneum-dark"
                href={icon.link}
              >
                <Svg name={icon.name} color={icon.color} />
              </a>
            </li>
          );
        })}
      </ul>

      <div
        className="ml-auto cursor-pointer lg:ml-5"
        onClick={ctx.onChangeTheme}
      >
        <Svg
          name={`${ctx.darkTheme ? "toggle_on" : "toggle_off"}`}
          color={ctx.darkTheme ? "#E91E63" : "#BDBDBD"}
        />
        <Svg
          name={`${ctx.darkTheme ? "moonandstar" : "wb_sunny"}`}
          color={ctx.darkTheme ? "#fff" : "#707070"}
        />
      </div>
    </header>
  );
};

export default Header;

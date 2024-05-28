import { useContext } from "react";
import ThemeContext from "../../store/theme-context";
import Svg from "./Svg";

const Header = () => {
  const ctx = useContext(ThemeContext);

  const icons = [
    { name: "twitter1", link: "", color: "#2196F3" },
    { name: "facebook", link: "" },
    { name: "whatsapp", link: "" },
    { name: "github1", link: "", color: `${ctx.darkTheme ? "#fff" : "#000"}` },
    { name: "twitch1", link: "", color: "#E91E63" },
    { name: "discord", link: "" },
    { name: "youtube", link: "", color: "#FF0000" },
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
        Muideen.<span className="font-black text-pink">Popoola</span>
      </h2>

      <ul className="ml-auto hidden items-center gap-4 lg:flex ">
        {icons.map((icon) => {
          return (
            <li key={icon.name}>
              <a
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

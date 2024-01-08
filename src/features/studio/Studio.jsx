import { useContext } from "react";
import Rainbow from "../../ui/Rainbow";
import Svg from "../../ui/Svg";
import Time from "./Time";
import ThemeContext from "../../../store/theme-context";
import Contact from "./Contact";
import StudioCard from "./StudioCard";

const Studio = () => {
  const ctx = useContext(ThemeContext);
  const date = new Date("January 1, 2022 08:11:00");
  const now = new Date();

  let years = (now.getTime() - date.getTime()) / 1000;
  years /= 60 * 60 * 24;
  const experience = Math.abs(Math.round(years / 365.25));

  return (
    <div className="h-[100%] w-[100%] bg-studio-light bg-cover px-14 dark:bg-studio-dark">
      <div className="mx-auto  max-w-[1100px] py-10">
        <div className="flex gap-10">
          <div className="box w-20  flex-[45%] bg-transparent p-8 backdrop-blur-[1px] transition-all duration-300 hover:backdrop-blur-sm dark:text-white ">
            <p className="mb-3 text-[34px] font-light">
              Welcome to{" "}
              <span className="font-black text-pink">the Studio</span>
            </p>
            <div className="h-[6px]">
              <Rainbow />
            </div>
            <p className="mt-4 text-xl font-light leading-8">
              👋 Hi, I'm{" "}
              <a className="font-medium underline" href="">
                {ctx.darkTheme ? "TechyMuideen" : "Muideen Popoola"}
              </a>
              . A Frontend Developer with over {experience} years coding
              experience.
            </p>
            <p className="mt-3 text-xs">
              Also part time debater + gamer 🎤👾🎮
            </p>
            <div className="flex items-center justify-end">
              <button className="smallbox ml-auto mt-4 rounded-full bg-bgash px-6 py-2 text-sm font-medium capitalize text-white shadow-button transition-all duration-200 hover:bg-[#B4B4A8] dark:bg-transparent dark:shadow-darkbutton hover:dark:bg-[#1C1F32]">
                <Svg name="help" color="currentcolor" /> What is this place?
              </button>
            </div>
          </div>
          <div className="flex flex-[45%] flex-col items-end justify-between text-xl font-light">
            <div className="box text-lightblack px-4 py-3 backdrop-blur-[1px] transition-all duration-300 hover:backdrop-blur-sm dark:text-white">
              <Time />
            </div>
            <div className="box w-[100%] text-white backdrop-blur-[1px] transition-all duration-300 hover:backdrop-blur-sm">
              <Contact />
            </div>
          </div>
        </div>
        <div>
          <StudioCard />
        </div>
      </div>
    </div>
  );
};

export default Studio;

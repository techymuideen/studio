import { useContext } from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import ProfilePicture from "../assets/pop.png";
import Svg from "./Svg";
import ThemeContext from "../../store/theme-context";

const SideBar = () => {
  const ctx = useContext(ThemeContext);

  return (
    ctx.toggleState && (
      <div
        data-aos="fade-right"
        data-aos-duration="200"
        data-aos-delay="0"
        className={`transition-hover fixed left-0 top-0  z-30  flex h-[100vh]  w-[70%] flex-col bg-[#EFEFEF] px-3 pb-2 pt-4 duration-200 sm:w-[55%]  md:w-[40%] lg:sticky lg:w-auto dark:bg-black `}
      >
        <div className="flex-1 overflow-auto pr-2">
          <div className="flex gap-3 border-b border-slate-300 pb-4 dark:border-gray-700">
            <div className="h-12 w-12">
              <img src={ProfilePicture} alt="profile picture" />
            </div>
            <div>
              <h2 className="text-xl font-medium text-gray-900 dark:text-pink">
                {ctx.darkTheme ? "@TechyMuideen" : "Muideen Popoola"}
              </h2>
              <h3 className="text-sm font-medium text-gray-400">
                Frontend Developer
              </h3>
            </div>
          </div>
          <Navigation />
        </div>
        <Link
          to="/library"
          className="hover:bg-currentcolor flex items-center justify-center  gap-2 rounded-sm   bg-ash px-4 py-2 text-base font-medium uppercase text-gray-800 shadow-neum transition-all  duration-150 hover:bg-darkash  hover:shadow-deneum dark:bg-black dark:text-white dark:shadow-neum-dark-2 dark:hover:bg-neum-bg-dark  dark:hover:shadow-neum-dark-3"
        >
          <Svg name="event_available" color="currentcolor" />
          Book a meeting
        </Link>
      </div>
    )
  );
};

export default SideBar;

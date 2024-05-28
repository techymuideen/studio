import { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Card from "../../ui/Card";

import ThemeContext from "../../../store/theme-context";

const Projects = () => {
  const ctx = useContext(ThemeContext);

  return (
    <div className="  bg-[#EFEFEF] dark:bg-black">
      <div className="  relative mb-10  ml-4 mt-20 flex overflow-hidden rounded-l-3xl  lg:flex-row">
        <div className="z-20 lg:flex-[50%] ">
          <Card />
        </div>
        <div className="z-20 hidden lg:inline lg:flex-[50%] "></div>
      </div>

      <div className="h-[10px] bg-gradient-to-r from-pink to-[#9C27B0]" />
      <div className="bg-[#F5F5F5] px-4 py-8 dark:bg-black">
        <div className="flex ">
          <NavLink
            className={(navData) =>
              navData.isActive
                ? " flex-1 border-b-4 border-pink bg-[#fff] py-3 text-center font-medium uppercase text-pink hover:bg-lightpink dark:bg-neum-bg-dark hover:dark:bg-lightpink-dark "
                : " flex-1 bg-[#fff] py-3 text-center font-medium uppercase hover:bg-ash dark:bg-neum-bg-dark dark:text-ash dark:hover:bg-[rgb(45,45,45)]"
            }
            to="/projects"
            end
          >
            Web Projects
          </NavLink>
          <NavLink
            className={(navData) =>
              navData.isActive
                ? " flex-1 border-b-4 border-pink bg-[#fff] py-3 text-center font-medium uppercase text-pink hover:bg-lightpink dark:bg-neum-bg-dark hover:dark:bg-lightpink-dark"
                : " flex-1 bg-[#fff] py-3 text-center font-medium uppercase hover:bg-ash dark:bg-neum-bg-dark dark:text-ash dark:hover:bg-[rgb(45,45,45)]"
            }
            to="/projects/technologies"
          >
            Technologies
          </NavLink>
          <NavLink
            className={(navData) =>
              navData.isActive
                ? "u  h flex-1 border-b-4 border-pink bg-[#fff] py-3 text-center font-medium uppercase text-pink hover:bg-lightpink dark:bg-neum-bg-dark hover:dark:bg-lightpink-dark"
                : "flex-1 bg-[#fff] py-3 text-center font-medium uppercase hover:bg-[#f1f1f1] dark:bg-neum-bg-dark dark:text-ash dark:hover:bg-[rgb(45,45,45)]"
            }
            to="/projects/myprocess"
          >
            My Process
          </NavLink>
        </div>
        <div className="pt-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Projects;

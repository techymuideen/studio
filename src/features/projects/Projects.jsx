import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Card from "../../ui/Card";

const Projects = () => {
  return (
    <div className="">
      <div className="flex py-20 pl-4 dark:bg-black">
        <div className="flex-[50%]">
          <Card />
        </div>
        <div className="flex-[50%] bg-red-500">hgdjafghj</div>
      </div>
      <div>
        <NavLink to="/projects">Web Projects</NavLink>
        <NavLink to="/projects/technologies">Technologies</NavLink>
        <NavLink to="/projects/myprocess">My Process</NavLink>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Projects;

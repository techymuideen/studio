import { useState, useCallback } from "react";

import Rainbow from "../../../ui/Rainbow";
import ProjectItem from "./ProjectItem";
import trillo from "../../../assets/trillo.png";
import nexter from "../../../assets/nexter.png";
import natours from "../../../assets/natours.png";
import ProjectsFilter from "./ProjectsFilter";

const webprojects = [
  {
    title: "Natours",
    description:
      "Simple Website for the company I currently work for (Nov 2021)",
    status: "completed",
    img: natours,
    stack: [
      { name: "html5" },
      { name: "css3" },
      { name: "javascript" },
      { name: "firebase" },
    ],
    disable: true,
  },

  {
    title: "Trillo",
    description:
      "A simple nodejs app built to practice JSON web tokens (JWT) and user authentication",
    status: "uncompleted",
    img: trillo,
    stack: [{ name: "html5" }, { name: "sass" }, { name: "javascript" }],
  },

  {
    title: "Netflix Landing Page UI",
    description: "Simple UI Netflix landing page UI clone.",
    status: "completed",
    img: nexter,
    stack: [{ name: "html5" }, { name: "css3" }, { name: "javascript" }],
  },
];

const WebProjects = () => {
  const [realFilteredProjects, setRealFilteredProjects] = useState(webprojects);

  const filteredProjectsHandler = useCallback((selectedStack) => {
    const filteredProjects = webprojects.filter((project) =>
      selectedStack.every((selectedTech) =>
        project.stack.some((tech) => tech.name === selectedTech),
      ),
    );

    setRealFilteredProjects(filteredProjects);
  }, []);

  return (
    <div>
      <h2 className="mb-10 ml-10 text-3xl font-light text-light-black lg:text-5xl dark:text-[#fff]">
        Web Projects{" "}
        <span className="hidden text-2xl lg:inline">
          (Some things I've built)
        </span>
      </h2>
      <div className="h-[6px] shadow-md">
        <Rainbow />
      </div>

      <div className="flex gap-5 pt-10">
        <div className="flex-[100%] lg:flex-[70%]">
          <ProjectItem projects={realFilteredProjects} />
        </div>
        <div className="flex[0%] relative lg:flex-[30%]">
          <ProjectsFilter onSelect={filteredProjectsHandler} />
        </div>
      </div>
    </div>
  );
};

export default WebProjects;

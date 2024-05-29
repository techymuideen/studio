import { useState, useCallback } from "react";

import Rainbow from "../../../ui/Rainbow";
import ProjectItem from "./ProjectItem";
import cissa from "../../../assets/Cissa.png";
import advicerr from "../../../assets/advicerr.png";
import DevLeague from "../../../assets/DevLeague.png";
import shortly from "../../../assets/shortly.png";
import studio from "../../../assets/studio.png";
import ProjectsFilter from "./ProjectsFilter";

const webprojects = [
  {
    title: "DevLeague",
    description: "A simple website for the DevLeague Community",
    status: "uncompleted",
    img: DevLeague,
    github: "https://github.com/techymuideen/dev-league-m",
    stack: [
      { name: "html5" },
      { name: "css3" },
      { name: "javascript" },
      { name: "react" },
      { name: "tailwindcss" },
    ],
    isNotLive: true,
  },
  {
    title: "Anon Chat",
    description: "A simple anonymous chat application.",
    status: "uncompleted",
    img: cissa,
    stack: [
      { name: "html5" },
      { name: "css3" },
      { name: "javascript" },
      { name: "react" },
      { name: "tailwindcss" },
      { name: "nodejs" },
    ],
    disable: true,
    isNotLive: true,
  },

  {
    title: "Pop Studio",
    description: "My current portfolio site!😍😎",
    status: "uncompleted",
    img: studio,
    live: "https://techymuideen.github.io/studio",
    stack: [
      { name: "html5" },
      { name: "css3" },
      { name: "javascript" },
      { name: "react" },
      { name: "tailwindcss" },
    ],
    disable: true,
  },

  {
    title: "Advicerr",
    description: "A simple app that generate random advice.",
    status: "completed",
    img: advicerr,
    github: "https://github.com/techymuideen/AdviceGenerator",
    live: "https://advicerr.netlify.app/",
    stack: [
      { name: "html5" },
      { name: "css3" },
      { name: "javascript" },
      { name: "sass" },
    ],
  },

  {
    title: "Shortly",
    description: "A simple URL Shortner",
    status: "completed",
    img: shortly,
    github: "https://github.com/techymuideen/Shortly",
    live: "https://linkshorter.netlify.app/",
    stack: [
      { name: "html5" },
      { name: "css3" },
      { name: "javascript" },
      { name: "sass" },
    ],
  },

  {
    title: "Pop Studio",
    description: "My old portfolio site built with vanilla js",
    status: "completed",
    img: studio,
    live: "https://techymuideen.github.io/studio",
    stack: [
      { name: "html5" },
      { name: "css3" },
      { name: "sass" },
      { name: "javascript" },
    ],
  },
];

const WebProjects = () => {
  const [realFilteredProjects, setRealFilteredProjects] = useState(webprojects);

  const filteredProjectsHandler = useCallback((selectedStack) => {
    const filteredProjects =
      selectedStack.length === 0
        ? webprojects
        : webprojects.filter((project) =>
            selectedStack.some((selectedTech) =>
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

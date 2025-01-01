import { useState, useCallback } from "react";

import Rainbow from "../../../ui/Rainbow";
import ProjectItem from "./ProjectItem";
import cissa from "../../../assets/Cissa.png";
import advicerr from "../../../assets/advicerr.png";
import DevLeague from "../../../assets/DevLeague.png";
import shortly from "../../../assets/Shortly.png";
import studio from "../../../assets/Studio.png";
import kasua from "../../../assets/kasua.png";
import ireporter from "../../../assets/ireporter.png";
import ProjectsFilter from "./ProjectsFilter";

const webprojects = [
  {
    title: "Kasua",
    description: "An ecommerce platform that connect sellers with buyers",
    status: "uncompleted",
    img: kasua,
    github: "https://github.com/techymuideen/kasua",
    live: "https://kasua.vercel.app/",
    stack: [
      { name: "react" },
      { name: "tailwindcss" },
      { name: "node-dot-js" },
      { name: "expressjs" },
      { name: "mongodb" },
    ],
  },
  {
    title: "iReporter",
    description: "A fullstack application that allow users to make reports",
    status: "completed",
    img: ireporter,
    github: "https://github.com/techymuideen/iReporter",
    live: "https://ireporterr.vercel.app/",
    stack: [
      { name: "react" },
      { name: "tailwindcss" },
      { name: "node-dot-js" },
      { name: "expressjs" },
      { name: "mongodb" },
    ],
  },

  {
    title: "DevLeague",
    description: "A simple website for the DevLeague Community",
    status: "completed",
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
      { name: "node-dot-js" },
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

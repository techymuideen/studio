import Rainbow from "../../ui/Rainbow";
import ProjectItem from "./ProjectItem";
import trillo from "../../assets/trillo.png";
import nexter from "../../assets/nexter.png";
import natours from "../../assets/natours.png";
import ProjectsFilter from "./ProjectsFilter";

const WebProjects = () => {
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

  return (
    <div>
      <h2 className="mb-10 ml-10 text-5xl font-light text-light-black dark:text-[#fff]">
        Web Projects <span className="text-2xl">(Some things I've built)</span>
      </h2>
      <div className="h-[6px] shadow-md">
        <Rainbow />
      </div>

      <div className="flex pt-10 gap-5">
        <div className="flex-[70%]">
          <ProjectItem projects={webprojects} />
        </div>
        <div className="flex-[30%] relative">
          <ProjectsFilter />
        </div>
      </div>
    </div>
  );
};

export default WebProjects;

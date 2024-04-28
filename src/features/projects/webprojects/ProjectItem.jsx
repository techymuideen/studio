import { Link } from "react-router-dom";
import Svg from "../../../ui/Svg";
import Popup from "../../../ui/Popup";

const ProjectItem = (props) => {
  return (
    <div className=" flex flex-col gap-5 ">
      {props.projects.map((project, id) => {
        const completed = project.status === "completed";
        const uncompleted = project.status === "uncompleted";

        return (
          <div
            data-aos="fade-right"
            key={id}
            className="box flex h-[250px] rounded-md bg-[#fff] p-0 dark:bg-[#1E1E1E]"
          >
            <img className="w-[40%]" src={project.img} />
            <div className="flex w-[60%] flex-col p-5">
              <h3 className="mb-1 text-2xl font-normal text-light-black dark:text-[#fff]">
                {project.title}
              </h3>
              <p className="mb-1 text-sm font-normal text-[rgba(0,0,0,0.6)] dark:text-[rgba(255,255,255,0.7)]">
                {project.description}
              </p>
              <h4 className="text-sm font-bold text-[rgba(0,0,0,0.6)] dark:text-[rgba(255,255,255,0.7)]">
                Status:{" "}
                <span
                  className={`font-normal ${
                    completed ? "text-[#4CAF50]" : "text-[#9C27B0]"
                  }`}
                >
                  {completed && "Finished - Deployed"}
                  {uncompleted && "In Development"}
                </span>
              </h4>
              <div className="mb-2 mt-auto flex gap-4">
                {project.stack.map((stack, id) => {
                  return (
                    <Popup key={id} text={stack.name}>
                      <Svg name={stack.name} />
                    </Popup>
                  );
                })}
              </div>
              <div className="mt-2 flex gap-3">
                <Link
                  target="_blank"
                  to="https://github.com/muideenpopoola"
                  className={`${
                    project.disable ? "pointer-events-none opacity-30" : ""
                  } marker:hover:bg-currentcolor flex items-center justify-center  gap-2 rounded-sm   bg-ash px-4 py-2 text-base font-medium uppercase text-gray-800 shadow-neum transition-all  duration-150 hover:bg-darkash  hover:shadow-deneum dark:bg-black dark:text-white dark:shadow-neum-dark-2 dark:hover:bg-neum-bg-dark  dark:hover:shadow-neum-dark-3`}
                >
                  <Svg name="event_available" color="currentcolor" />
                  Github
                </Link>

                <Link
                  target="_blank"
                  to="https://github.com/muideenpopoola"
                  className="hover:bg-currentcolor flex items-center justify-center  gap-2 rounded-sm   bg-ash px-4 py-2 text-base font-medium uppercase text-gray-800 shadow-neum transition-all  duration-150 hover:bg-darkash  hover:shadow-deneum dark:bg-black dark:text-white dark:shadow-neum-dark-2 dark:hover:bg-neum-bg-dark  dark:hover:shadow-neum-dark-3"
                >
                  <Svg name="event_available" color="currentcolor" />
                  Project
                </Link>

                <Link
                  target="_blank"
                  to="https://github.com/muideenpopoola"
                  className="hover:bg-currentcolor flex items-center justify-center  gap-2 rounded-sm   bg-ash px-4 py-2 text-base font-medium uppercase text-gray-800 shadow-neum transition-all  duration-150 hover:bg-darkash  hover:shadow-deneum dark:bg-black dark:text-white dark:shadow-neum-dark-2 dark:hover:bg-neum-bg-dark  dark:hover:shadow-neum-dark-3"
                >
                  <Svg name="event_available" color="currentcolor" />
                  Notes
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectItem;

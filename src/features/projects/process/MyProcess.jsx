import Rainbow from "../../../ui/Rainbow";
import Process from "./process";

const MyProcess = () => {
  return (
    <div>
      <h2 className="mb-10 ml-10 text-3xl font-light text-light-black lg:text-5xl dark:text-[#fff]">
        My Process{" "}
        <span className="hidden text-2xl lg:inline">
          (How I approach projects)
        </span>
      </h2>
      <div className="h-2">
        <Rainbow />
      </div>
      <div className=" ml-2 border-l-2 pt-5 lg:ml-10 dark:border-[#b5b2b218]">
        <Process />
      </div>
    </div>
  );
};

export default MyProcess;

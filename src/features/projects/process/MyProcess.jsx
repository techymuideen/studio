import Rainbow from "../../../ui/Rainbow";
import Process from "./process";

const MyProcess = () => {
  return (
    <div>
      <h2 className="mb-10 ml-10 text-5xl font-light text-light-black dark:text-[#fff]">
        My Process <span className="text-2xl">(How I approach projects)</span>
      </h2>
      <div className="h-2">
        <Rainbow />
      </div>
      <div
        className="ml-10 border-l-2 pt-5 dark:border-[#b5b2b218]"
        
      >
        <Process />
      </div>
    </div>
  );
};

export default MyProcess;

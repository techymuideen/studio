import Rainbow from "../../../ui/Rainbow";
import TechDirectory from "./TechDirectory";

const Technologies = () => {
  return (
    <div>
      <h2 className="mb-10 ml-10 text-3xl lg:text-5xl font-light text-light-black dark:text-[#fff]">
        Technologies{" "}
        <span className="text-2xl hidden lg:inline">(Stuff I work with and use)</span>
      </h2>
      <div className="h-2">
        <Rainbow />
      </div>
      <div data-aos="fade-right">
        <TechDirectory />
      </div>
    </div>
  );
};

export default Technologies;

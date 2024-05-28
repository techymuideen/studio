import Svg from "../../ui/Svg";
import Rainbow from "../../ui/Rainbow";
import AboutLink from "./AboutLink";

const AboutModal = (props) => {
  return (
    <div
      data-aos="zoom-out-down"
      data-aos-duration="100"
      className="absolute right-4 top-4 z-10 rounded-2xl  bg-[#fff] md:w-[30vw] lg:w-[20vw] dark:bg-[#121212]"
    >
      <div className="flex items-center gap-4 p-4 text-2xl font-medium text-[#E91E63] dark:text-[#fff]">
        <h3>About me</h3>
        <div
          onClick={props.onClose}
          className="ml-auto flex cursor-pointer items-center rounded-full bg-ash p-[12px] text-[#000] shadow-neum hover:shadow-deneum dark:bg-black dark:text-[#fff] dark:shadow-rounded-neum-dark dark:hover:bg-neum-bg-dark dark:hover:shadow-round-deneum-dark"
        >
          <Svg size="15" name="close" color="currentcolor" />
        </div>
      </div>
      <div className="h-[3px]">
        <Rainbow />
      </div>
      <div className="flex flex-col px-4 py-4 text-base font-medium uppercase text-gray-800 dark:text-white">
        <AboutLink />
      </div>
    </div>
  );
};

export default AboutModal;

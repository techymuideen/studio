import { useState } from "react";
import Svg from "./Svg";
import Rainbow from "./Rainbow";
import { NavLink } from "react-router-dom";

const Clicker = (props) => {
  const [showContent, setShowContent] = useState(false);

  const showContentHandler = () => {
    setShowContent((prevState) => !prevState);
  };

  return (
    <div className=" border-b p-4 last:border-b-0 dark:border-[#fff2] ">
      <div className="flex cursor-pointer " onClick={showContentHandler}>
        <div className="flex w-[100%] items-center gap-1 dark:text-[#fff]">
          <Svg
            name={props.icon}
            color={showContent ? "#E91E63" : "currentcolor"}
          />
          <p className="ml-2 text-xl text-[#0007] dark:text-[#fff]">
            {props.text}
          </p>

          <Svg
            className="ml-auto"
            color="currentcolor"
            name={`${showContent ? "arrow_drop_up" : "arrow_drop_down"}`}
          />
        </div>
      </div>

      {showContent && (
        <div>
          <div className="mt-2 h-[2px] cursor-pointer">
            <Rainbow onClick={showContentHandler} />
          </div>
          <div className="my-2 flex flex-col gap-2 text-sm font-normal text-[#0008] dark:text-[#fff]">
            {props.content}
          </div>
          <NavLink
            to={`/${props.link}`}
            className="hover:bg-currentcolor flex items-center justify-center  gap-2 rounded-sm   bg-ash px-4 py-2 text-base font-medium uppercase text-gray-800 shadow-neum transition-all  duration-150 hover:bg-darkash  hover:shadow-deneum dark:bg-black dark:text-white dark:shadow-neum-dark-2 dark:hover:bg-neum-bg-dark  dark:hover:shadow-neum-dark-3"
          >
            GO
            <Svg name="send" color="currentcolor" />
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Clicker;

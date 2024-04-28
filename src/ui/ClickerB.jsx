import { useState } from "react";
import Svg from "./Svg";

const ClickerB = (props) => {
  const [showContent, setShowContent] = useState(false);

  const showContentHandler = () => {
    setShowContent((prevState) => !prevState);
  };

  return (
    <div className=" ml-6 border-l px-4 py-3   dark:border-[#fff2] ">
      <div className="-ml-9 flex cursor-pointer " onClick={showContentHandler}>
        <div className="flex w-[100%] items-center gap-1 dark:text-[#fff]">
          <div className="rounded-full bg-[#E91E63] p-2">
            <Svg name={props.icon} color="#fff" />
          </div>
          <p className="ml-2 text-xl text-[#E91E63]  dark:text-[#fff]">
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
          <div className=" ml-5 flex flex-col gap-2 pt-1 text-xl font-normal text-[#0008] dark:text-[#fff]">
            {props.content}
          </div>
        </div>
      )}
    </div>
  );
};

export default ClickerB;

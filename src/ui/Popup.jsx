import { useState } from "react";

const Popup = (props) => {
  const [showHover, setShowHover] = useState(false);

  const showHoverHandler = () => {
    setShowHover(true);
  };

  const hideHoverHandler = () => {
    setShowHover(false);
  };

  return (
    <div className={`relative flex flex-col items-center ${props.className} `}>
      <div
        className={`absolute bottom-12 z-[1000!important]  scale-0 text-nowrap rounded-md bg-[#0006] px-5 py-1 text-[16px] text-white opacity-0 transition duration-200 dark:bg-[#75717199] ${
          showHover ? "scale-[1] opacity-100" : ""
        }`}
      >
        {props.text}
      </div>
      <div
        className=""
        onMouseLeave={hideHoverHandler}
        onMouseOver={showHoverHandler}
      >
        {props.children}
      </div>
    </div>
  );
};

export default Popup;

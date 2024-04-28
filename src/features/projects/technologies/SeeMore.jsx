import { useState } from "react";
import Svg from "../../../ui/Svg";

const SeeMore = (props) => {
  const [showContent, setShowContent] = useState(false);

  const showContentHandler = () => {
    setShowContent((prevState) => !prevState);
  };

  return (
    <div>
      <div
        className={`handler flex cursor-pointer ${props.sub ? "pl-6" : ""}`}
        onClick={showContentHandler}
      >
        <div className={`flex ${props.sub ? "gap-[7px]" : ""}`}>
          <Svg name={`${showContent ? "arrow_drop_down" : "arrow_right"}`} />
          <Svg name={props.icon} />
          <p className="ml-2">{props.text}</p>
        </div>
      </div>
      {showContent && (
        <div className="flex flex-col gap-2">{props.content}</div>
      )}
    </div>
  );
};

export default SeeMore;

import { useState } from "react";
import Svg from "../../../ui/Svg";

const SeeMore = () => {
  const [showContent, setShowContent] = useState(false);

  const showContentHandler = (props) => {
    setShowContent((prevState) => !prevState);
  };

  return (
    <div>
      <div className="mb-4 flex cursor-pointer" onClick={showContentHandler}>
        <Svg name="arrow_drop_up" />
        <Svg name="home" />
        <p className="ml-2">My Home Setup</p>
      </div>
      {showContent && (
        <div className="ml-14 flex flex-col gap-4">
          <p className="cursor-pointer">
            <Svg name="personal_video " /> My Laptop
          </p>
          <p className="cursor-pointer">
            <Svg name="notebook " /> My Software
          </p>
        </div>
      )}
    </div>
  );
};

export default SeeMore;

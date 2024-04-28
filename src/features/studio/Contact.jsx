import { Fragment, useContext, useState } from "react";
import ThemeContext from "../../../store/theme-context";
import ModalB from "./ModalB";
import Svg from "../../ui/Svg";
import Popup from "../../ui/Popup";

const Contact = () => {
  const ctx = useContext(ThemeContext);
  const [showModalA, setShowModalA] = useState(false);

  const Clicks = [
    {
      icon: "tools",
      text: "Currently working on",
      content: "1. VerseMilla-An online market place ",
    },
    {
      icon: "work",
      text: "Currently Learning",
      content: (
        <ol className=" flex flex-col gap-2">
          <l1>1. TypeScript</l1>
          <l1>2. NodeJs</l1>
          <l1>3. Docker</l1>
        </ol>
      ),
    },
    {
      icon: "notebook",
      text: "Currently Reading",
      content: "1. The Chips",
    },
    {
      icon: "insert_invitation",
      text: "Currently Watching",
      content: (
        <p className="text-sm">
          I'm not watching anything right now. No time for TV
        </p>
      ),
    },
    {
      icon: "computer",
      text: "Currently Playing",
      content: (
        <ul>
          <li>
            1. Dream League
            <img src="" />
          </li>
        </ul>
      ),
    },
  ];

  const icons = [
    { name: "phone", color: "#FFB300", text: "Call me" },
    { name: "email", color: "#2196F3", text: "Send me an Email" },
    {
      name: "insert_invitation",
      color: "#9C27B0",
      text: "Book a meeting with me",
    },
    {
      name: "question",
      color: `${ctx.darkTheme ? "#fff" : "#707070"}`,
      text: "What's up with me lately?",
    },
  ];

  const showModalAHandler = () => {
    setShowModalA(true);
  };

  const hideModalAHander = () => {
    setShowModalA(false);
  };

  return (
    <div>
      {showModalA && <ModalB Clicks={Clicks} onClose={hideModalAHander} />}

      <div>
        <div className="flex items-center">
          <Svg name="search" color="currentcolor" className="mr-[-60px]" />
          <input
            placeholder="Search ('/' to focus, ';' to toggle menu)"
            className="ml-6 w-[100%] flex-1 rounded-full bg-[#ffffff30] py-3 pl-10 pr-3 outline-none  placeholder:text-base placeholder:text-inherit"
          />
          <Svg
            name="arrow_drop_down"
            color="currentcolor"
            className="ml-[-35px]"
          />
        </div>
        <div className="mt-5 flex items-center gap-4">
          {icons.map((icon, id) => {
            return (
              <Popup text={icon.text} key={id}>
                <div
                  key={id}
                  onClick={showModalAHandler}
                  className="smallbox flex cursor-pointer items-center rounded-full bg-[#25252510] p-[8px] shadow-smallbutton transition-shadow duration-200 hover:shadow-hoversmallbutton"
                >
                  <Svg name={icon.name} color={icon.color} />
                </div>
              </Popup>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Contact;

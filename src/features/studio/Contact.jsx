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
      content: (
        <ol>
          <li className="text-sm">1. VerseMilla-An online market place</li>
        </ol>
      ),
    },
    {
      icon: "system_update_tv",
      text: "Currently Learning",
      content: (
        <ol className=" flex flex-col gap-2 text-sm">
          <l1>1. TypeScript</l1>
          <l1>2. NodeJs</l1>
          <l1>3. Docker</l1>
        </ol>
      ),
    },
    {
      icon: "book",
      text: "Currently Reading",
      content: (
        <ol>
          <li className="text-sm">1. Zero to One</li>
        </ol>
      ),
    },
    {
      icon: "live_tv",
      text: "Currently Watching",
      content: (
        <ol>
          <li className="text-sm">1. Inventing Anna</li>
        </ol>
      ),
    },
    {
      icon: "gamepad",
      text: "Currently Playing",
      content: (
        <ul>
          <li className="text-sm">
            I'm not playing any game right now. No time to play game😥
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

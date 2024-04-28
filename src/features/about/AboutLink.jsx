import { Link } from "react-router-dom";

import Svg from "../../ui/Svg";
import { useState } from "react";
import ClickerB from "../../ui/Clicker";
import Modal from "../../ui/Modal";
import Rainbow from "../../ui/Rainbow";
import ModalB from "../studio/ModalB";

const main = (
  <div className="m-4 flex items-start gap-4 rounded-md bg-[#E4F2FE] p-4 font-normal text-[#2196f3] dark:bg-[#1E2C38]">
    <Svg name="error_outline" size="30" color="#2196f3" />
    <div>
      <span className="font-bold">Coming Soon.</span> Working on adding them
      here. You can still{" "}
      <Link className="text-black underline dark:text-[#fff] ">
        view on LinkedIn
      </Link>{" "}
      if you wish.
    </div>
  </div>
);

const Clickss = [
  {
    icon: "tools",
    text: "Programming Languages",
    content: (
      <ol className=" flex flex-col gap-2">
        <l1>Javascript - ES6</l1>
        <l1>Typescript</l1>
        <l1>Python</l1>
      </ol>
    ),
  },
  {
    icon: "work",
    text: "Front End",
    content: (
      <ol className=" flex flex-col gap-2">
        <l1>HTML 5</l1>
        <l1>CSS 3</l1>
        <l1>Javascript - ES6</l1>
        <l1>React</l1>
        <l1>BootStrap</l1>
        <l1>Materialize CSS</l1>
        <l1>Sass</l1>
        <l1>Tailwind</l1>
        <l1>Material UI</l1>
      </ol>
    ),
  },
  {
    icon: "work",
    text: "Back End",
    content: (
      <ol className=" flex flex-col gap-2">
        <l1>Node + Express</l1>
        <l1>Firebase</l1>
      </ol>
    ),
  },
  {
    icon: "insert_invitation",
    text: "Databases",
    content: (
      <ol className=" flex flex-col gap-2">
        <l1>MySQL</l1>
        <l1>MongoDB</l1>
      </ol>
    ),
  },
  {
    icon: "computer",
    text: "Hosting Platforms",
    content: (
      <ol className=" flex flex-col gap-2">
        <l1>Vercel</l1>
        <l1>Netlify</l1>
        <l1>Firebase</l1>
        <l1>C Panel</l1>
      </ol>
    ),
  },

  {
    icon: "computer",
    text: "Version Control",
    content: (
      <ol className=" flex flex-col gap-2">
        <l1>Git</l1>
        <l1>Github</l1>
        <l1>Gitlab</l1>
      </ol>
    ),
  },

  {
    icon: "computer",
    text: "Content Management",
    content: (
      <ol className=" flex flex-col gap-2">
        <l1>Wordpress</l1>
      </ol>
    ),
  },
];

const contents = [
  { name: "Experience", icon: "work1", title: "My Experience", main: main },
  {
    name: "Skills",
    icon: "person",
    title: "My Skills",
  },
  { name: "Cert", icon: "email", title: "My Certificates", main: main },
  {
    name: "Shenanigans",
    icon: "email",
    title: "Shenanigans",
    main: (
      <div className="m-4 flex items-start gap-4 rounded-md bg-[#E4F2FE] p-4 font-normal text-[#2196f3] dark:bg-[#1E2C38]">
        <Svg name="error_outline" size="30" color="#2196f3" />
        <div>
          <span className="font-bold">Coming Soon.</span> This section will just
          be about fun stuff that I do outside of work.
        </div>
      </div>
    ),
  },
];

const AboutLink = () => {
  const [showAboutModal1, setShowAboutModal1] = useState(false);
  const [showAboutModal2, setShowAboutModal2] = useState(false);
  const [showAboutModal3, setShowAboutModal3] = useState(false);
  const [showAboutModal4, setShowAboutModal4] = useState(false);

  const showModalAHander1 = () => {
    setShowAboutModal1(true);
  };

  const hideModalAHander1 = () => {
    setShowAboutModal1(false);
  };

  const showModalAHander2 = () => {
    setShowAboutModal2(true);
  };

  const hideModalAHander2 = () => {
    setShowAboutModal2(false);
  };

  const showModalAHander3 = () => {
    setShowAboutModal3(true);
  };

  const hideModalAHander3 = () => {
    setShowAboutModal3(false);
  };

  const showModalAHander4 = () => {
    setShowAboutModal4(true);
  };

  const hideModalAHander4 = () => {
    setShowAboutModal4(false);
  };

  return (
    <div className="flex flex-col gap-4 ">
      <div key={contents[0].name}>
        <Link
          onClick={showModalAHander1}
          className="hover:bg-currentcolor flex items-center justify-center gap-2 rounded-lg bg-ash px-4 py-3 uppercase shadow-neum transition-all duration-150 hover:bg-darkash hover:shadow-deneum dark:bg-black dark:shadow-neum-dark dark:hover:bg-neum-bg-dark dark:hover:shadow-deneum-dark"
        >
          <Svg name={contents[0].icon} color="currentcolor" />
          {contents[0].name}
        </Link>

        {showAboutModal1 && (
          <div>
            <Modal onClose={hideModalAHander1}>
              <div className="pb-4">
                <div className="flex items-center gap-4 p-5 text-2xl font-medium text-[#000] dark:text-[#fff]">
                  <Svg name={contents[0].icon} color="#E91E63" />
                  <p>{contents[0].title}</p>
                  <div
                    onClick={hideModalAHander1}
                    className="ml-auto flex cursor-pointer items-center rounded-full bg-ash p-[12px] shadow-neum hover:shadow-deneum dark:bg-black dark:shadow-rounded-neum-dark dark:hover:bg-neum-bg-dark dark:hover:shadow-round-deneum-dark"
                  >
                    <Svg size="15" name="tools" color="currentcolor" />
                  </div>
                </div>
                <div className="h-[3px]">
                  <Rainbow />
                </div>

                <div>{contents[0].main}</div>

                <div className="flex px-4">
                  <Link
                    onClick={hideModalAHander1}
                    to=""
                    className="hover:bg-currentcolor ml-auto mt-2 flex items-center justify-center gap-2 rounded-lg  bg-ash px-4   py-2 text-base font-medium  text-[#4CAF50] shadow-neum transition-all  duration-150 hover:bg-darkash  hover:shadow-deneum dark:bg-black  dark:shadow-neum-dark-2 dark:hover:bg-neum-bg-dark  dark:hover:shadow-neum-dark-3"
                  >
                    <Svg name="send" color="currentcolor" />
                    ok, got it
                  </Link>
                </div>
              </div>
            </Modal>
          </div>
        )}
      </div>

      <div>
        <Link
          onClick={showModalAHander2}
          className="hover:bg-currentcolor flex items-center justify-center gap-2 rounded-lg bg-ash px-4 py-3 uppercase shadow-neum transition-all duration-150 hover:bg-darkash hover:shadow-deneum dark:bg-black dark:shadow-neum-dark dark:hover:bg-neum-bg-dark dark:hover:shadow-deneum-dark"
        >
          <Svg name={contents[1].icon} color="currentcolor" />
          Skills
        </Link>

        {showAboutModal2 && (
          <div>
            <ModalB Clicks={Clickss} onClose={hideModalAHander2}></ModalB>
          </div>
        )}
      </div>

      <div>
        <Link
          onClick={showModalAHander3}
          className="hover:bg-currentcolor flex items-center justify-center gap-2 rounded-lg bg-ash px-4 py-3 uppercase shadow-neum transition-all duration-150 hover:bg-darkash hover:shadow-deneum dark:bg-black dark:shadow-neum-dark dark:hover:bg-neum-bg-dark dark:hover:shadow-deneum-dark"
        >
          <Svg name={contents[2].icon} color="currentcolor" />
          {contents[2].name}
        </Link>

        {showAboutModal3 && (
          <div>
            <Modal onClose={hideModalAHander3}>
              <div className="pb-4">
                <div className="flex items-center gap-4 p-5 text-2xl font-medium text-[#000] dark:text-[#fff]">
                  <Svg name={contents[2].icon} color="#E91E63" />
                  <p>{contents[2].title}</p>
                  <div
                    onClick={hideModalAHander3}
                    className="ml-auto flex cursor-pointer items-center rounded-full bg-ash p-[12px] shadow-neum hover:shadow-deneum dark:bg-black dark:shadow-rounded-neum-dark dark:hover:bg-neum-bg-dark dark:hover:shadow-round-deneum-dark"
                  >
                    <Svg size="15" name="tools" color="currentcolor" />
                  </div>
                </div>
                <div className="h-[3px]">
                  <Rainbow />
                </div>

                <div>{contents[2].main}</div>

                <div className="flex px-4">
                  <Link
                    onClick={hideModalAHander3}
                    to=""
                    className="hover:bg-currentcolor ml-auto mt-2 flex items-center justify-center gap-2 rounded-lg  bg-ash px-4   py-2 text-base font-medium  text-[#4CAF50] shadow-neum transition-all  duration-150 hover:bg-darkash  hover:shadow-deneum dark:bg-black  dark:shadow-neum-dark-2 dark:hover:bg-neum-bg-dark  dark:hover:shadow-neum-dark-3"
                  >
                    <Svg name="send" color="currentcolor" />
                    ok, got it
                  </Link>
                </div>
              </div>
            </Modal>
          </div>
        )}
      </div>

      <div>
        <Link
          onClick={showModalAHander4}
          className="hover:bg-currentcolor flex items-center justify-center gap-2 rounded-lg bg-ash px-4 py-3 uppercase shadow-neum transition-all duration-150 hover:bg-darkash hover:shadow-deneum dark:bg-black dark:shadow-neum-dark dark:hover:bg-neum-bg-dark dark:hover:shadow-deneum-dark"
        >
          <Svg name={contents[3].icon} color="currentcolor" />
          {contents[3].name}
        </Link>

        {showAboutModal4 && (
          <div>
            <Modal onClose={hideModalAHander4}>
              <div className="pb-4">
                <div className="flex items-center gap-4 p-5 text-2xl font-medium text-[#000] dark:text-[#fff]">
                  <Svg name={contents[3].icon} color="#E91E63" />
                  <p>{contents[3].title}</p>
                  <div
                    onClick={hideModalAHander4}
                    className="ml-auto flex cursor-pointer items-center rounded-full bg-ash p-[12px] shadow-neum hover:shadow-deneum dark:bg-black dark:shadow-rounded-neum-dark dark:hover:bg-neum-bg-dark dark:hover:shadow-round-deneum-dark"
                  >
                    <Svg size="15" name="tools" color="currentcolor" />
                  </div>
                </div>
                <div className="h-[3px]">
                  <Rainbow />
                </div>

                <div>{contents[3].main}</div>

                <div className="flex px-4">
                  <Link
                    onClick={hideModalAHander4}
                    to=""
                    className="hover:bg-currentcolor ml-auto mt-2 flex items-center justify-center gap-2 rounded-lg  bg-ash px-4   py-2 text-base font-medium  text-[#4CAF50] shadow-neum transition-all  duration-150 hover:bg-darkash  hover:shadow-deneum dark:bg-black  dark:shadow-neum-dark-2 dark:hover:bg-neum-bg-dark  dark:hover:shadow-neum-dark-3"
                  >
                    <Svg name="send" color="currentcolor" />
                    ok, got it
                  </Link>
                </div>
              </div>
            </Modal>
          </div>
        )}
      </div>

      <Link
        onClick=""
        className="hover:bg-currentcolor flex items-center justify-center gap-2 rounded-lg bg-ash px-4 py-3 uppercase shadow-neum transition-all duration-150 hover:bg-darkash hover:shadow-deneum dark:bg-black dark:shadow-neum-dark dark:hover:bg-neum-bg-dark dark:hover:shadow-deneum-dark"
      >
        <Svg name="email" color="currentcolor" />
        Resume
      </Link>
    </div>
  );
};

export default AboutLink;

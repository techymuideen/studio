import { Link } from "react-router-dom";

import Svg from "../../ui/Svg";
import { useState } from "react";
import ClickerB from "../../ui/Clicker";
import Modal from "../../ui/Modal";
import Rainbow from "../../ui/Rainbow";
import ModalB from "../studio/ModalB";

const main = (
  <div className="m-4 flex items-start gap-4 rounded-md bg-[#E4F2FE] p-4 font-normal text-[#2196f3] dark:bg-[#1E2C38]">
    <Svg name="error_outline" size="20" color="#2196f3" />
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
    icon: "book",
    text: "Programming Languages",
    content: (
      <ol className=" flex flex-col gap-2">
        <l1 className="flex items-center gap-3">
          <Svg name="node-dot-js" size="20" />
          <span>Javascript - ES6</span>
        </l1>
        <l1 className="flex items-center gap-3">
          <Svg name="typescript" size="20" />
          <span>Typescript</span>
        </l1>
      </ol>
    ),
  },
  {
    icon: "monitor",
    text: "Front End",
    content: (
      <ol className=" flex flex-col gap-2">
        <l1 className="flex items-center gap-3">
          <Svg name="html51" size="20" />
          <span>HTML 5</span>
        </l1>
        <l1 className="flex items-center gap-3">
          <Svg name="css31" size="20" />
          <span>CSS 3</span>
        </l1>
        <l1 className="flex items-center gap-3">
          <Svg name="javascript" size="20" />
          <span>Javascript - ES6</span>
        </l1>
        <l1 className="flex items-center gap-3">
          <Svg name="typescript" size="20" />
          <span>Typescript</span>
        </l1>
        <l1 className="flex items-center gap-3">
          <Svg name="bootstrap" size="20" />
          <span>BootStrap</span>
        </l1>

        <l1 className="flex items-center gap-3">
          <Svg name="sass" size="20" />
          <span>Sass</span>
        </l1>

        <l1 className="flex items-center gap-3">
          <Svg name="tailwindcss" size="20" />
          <span>Tailwind</span>
        </l1>
        <l1 className="flex items-center gap-3">
          <Svg name="react" size="20" />
          <span>React</span>
        </l1>
        <l1 className="flex items-center gap-3">
          <Svg name="next-dot-js" size="20" />
          <span>Nextjs</span>
        </l1>
      </ol>
    ),
  },
  {
    icon: "terminal",
    text: "Back End",
    content: (
      <ol className=" flex flex-col gap-2">
        <l1 className="flex items-center gap-3">
          <Svg name="node-dot-js" size="20" />
          <span>Node</span>
        </l1>
        <l1 className="flex items-center gap-3">
          <Svg name="nestjs" size="20" />
          <span>NestJs</span>
        </l1>
        <l1 className="flex items-center gap-3">
          <Svg name="expressjs" size="20" />
          <span>ExpressJs</span>
        </l1>
        <l1 className="flex items-center gap-3">
          <Svg name="firebase" size="20" />
          <span>Firebase</span>
        </l1>
      </ol>
    ),
  },
  {
    icon: "database",
    text: "Databases",
    content: (
      <ol className=" flex flex-col gap-2">
        <l1 className="flex items-center gap-3">
          <Svg name="mysql" size="20" />
          <span>MySQL</span>
        </l1>

        <l1 className="flex items-center gap-3">
          <Svg name="mongodb" size="20" />
          <span>MongoDB</span>
        </l1>
      </ol>
    ),
  },
  {
    icon: "servers",
    text: "Hosting Platforms",
    content: (
      <ol className=" flex flex-col gap-2">
        <l1 className="flex items-center gap-3">
          <Svg name="exclamation-triangle" size="20" />
          <span>Vercel</span>
        </l1>

        <l1 className="flex items-center gap-3">
          <Svg name="account_tree" size="20" />
          <span>Netlify</span>
        </l1>

        <l1 className="flex items-center gap-3">
          <Svg name="firebase" size="20" />
          <span>Firebase</span>
        </l1>

        <l1 className="flex items-center gap-3">
          <Svg name="cpanel" size="20" />
          <span>C Panel</span>
        </l1>
      </ol>
    ),
  },

  {
    icon: "system_update_tv",
    text: "Version Control",
    content: (
      <ol className=" flex flex-col gap-2">
        <l1 className="flex items-center gap-3">
          <Svg name="git1" size="20" />
          <span>Git</span>
        </l1>

        <l1 className="flex items-center gap-3">
          <Svg name="github11" size="20" />
          <span>Github</span>
        </l1>

        <l1 className="flex items-center gap-3">
          <Svg name="gitlab1" size="20" />
          <span>Gitlab</span>
        </l1>
      </ol>
    ),
  },

  {
    icon: "miscellaneous_services",
    text: "Content Management",
    content: (
      <ol className=" flex flex-col gap-2">
        <l1 className="flex items-center gap-3">
          <Svg name="wordpress1" size="20" />
          <span>Wordpress</span>
        </l1>
      </ol>
    ),
  },
];

const contents = [
  { name: "Cert", icon: "award", title: "My Certificates", main: main },
  {
    name: "Skills",
    icon: "person",
    title: "My Skills",
  },
  { name: "Experience", icon: "work", title: "My Experience", main: main },
  {
    name: "Shenanigans",
    icon: "ice-cream1",
    title: "Shenanigans",
    main: (
      <div className="m-4 flex items-start gap-4 rounded-md bg-[#E4F2FE] p-4 font-normal text-[#2196f3] dark:bg-[#1E2C38]">
        <Svg name="error_outline" size="20" color="#2196f3" />
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
                    <Svg size="15" name="close" color="currentcolor" />
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
                    <Svg name="check" color="currentcolor" />
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
            <ModalB
              Clicks={Clickss}
              icon="person"
              title="My Skills"
              onClose={hideModalAHander2}
            ></ModalB>
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
                    <Svg size="15" name="close" color="currentcolor" />
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
                    <Svg name="check" color="currentcolor" />
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
                    <Svg size="15" name="close" color="currentcolor" />
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
                    <Svg name="check" color="currentcolor" />
                    ok, got it
                  </Link>
                </div>
              </div>
            </Modal>
          </div>
        )}
      </div>

      <Link
        to="https://techymuideen.github.io/portfolio/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        onClick=""
        className="hover:bg-currentcolor flex items-center
        justify-center gap-2 rounded-lg bg-ash px-4 py-3 uppercase shadow-neum
        transition-all duration-150 hover:bg-darkash hover:shadow-deneum
        dark:bg-black dark:shadow-neum-dark dark:hover:bg-neum-bg-dark
        dark:hover:shadow-deneum-dark"
      >
        <Svg name="file_download" color="currentcolor" />
        Resume
        <Svg name="launch" color="currentcolor" />
      </Link>
    </div>
  );
};

export default AboutLink;

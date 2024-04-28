import Clicker from "../../ui/Clicker";
import Modal from "../../ui/Modal";
import Rainbow from "../../ui/Rainbow";
import Svg from "../../ui/Svg";
import { Link, NavLink } from "react-router-dom";

const Clicks = [
  {
    icon: "notebook",
    text: "Info About me",
    content: "My skills, Experience, Certifications, Projects, Resume, etc",
    link: "about",
  },
  {
    icon: "work",
    text: "My Projects",
    content:
      "Overview and details of some projects that i've done/i'm currently working on. ",
    link: "projects",
  },
  {
    icon: "notebook",
    text: "My Blog",
    content:
      "A personal blog I keep for writing about coding, webdev, gaming, debate, some social stuff, and my experiences/interests in general",
    link: "blog",
  },
  {
    icon: "insert_invitation",
    text: "My Client Platform",
    content: "A leantime Agile dev platform where I maintain client projects",
    link: "",
  },
  {
    icon: "library",
    text: "My library",
    content:
      "A personal place where I make review about books that I have read and the ones I am currently reading",
    link: "library",
  },
];

const ModalA = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <div className="pb-4">
        <div className="flex items-center gap-4 p-5 text-2xl font-medium text-[#000] dark:text-[#fff]">
          <Svg name="help" color="#E91E63" />
          <p>What is this place?</p>
          <div
            onClick={props.onClose}
            className="ml-auto flex cursor-pointer items-center rounded-full bg-ash p-[12px] shadow-neum hover:shadow-deneum dark:bg-black dark:shadow-rounded-neum-dark dark:hover:bg-neum-bg-dark dark:hover:shadow-round-deneum-dark"
          >
            <Svg size="15" name="tools" color="currentcolor" />
          </div>
        </div>
        <div className="h-[3px]">
          <Rainbow />
        </div>
        <div className="h-[60vh] overflow-auto border-b dark:border-[#fff2]">
          <p className="p-5 text-xl font-light text-[rbg(16,16,16)] dark:text-[#fff]">
            I like to think of it as my own little corner of the web. Here's
            what you can find here :-
          </p>
          <div className="mx-4 mb-2 border shadow-md dark:border-[#fff2]  ">
            {Clicks.map((click, index) => {
              return (
                <Clicker
                  key={index}
                  icon={click.icon}
                  text={click.text}
                  content={click.content}
                  link={click.link}
                />
              );
            })}
          </div>
        </div>
        <div className="flex px-4">
          <Link
            onClick={props.onClose}
            to=""
            className="hover:bg-currentcolor ml-auto mt-2 flex items-center justify-center gap-2 rounded-lg  bg-ash px-4   py-2 text-base font-medium  text-[#4CAF50] shadow-neum transition-all  duration-150 hover:bg-darkash  hover:shadow-deneum dark:bg-black  dark:shadow-neum-dark-2 dark:hover:bg-neum-bg-dark  dark:hover:shadow-neum-dark-3"
          >
            <Svg name="send" color="currentcolor" />
            ok, got it
          </Link>
        </div>
      </div>
    </Modal>
  );
};

export default ModalA;

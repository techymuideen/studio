import { useContext, useState } from "react";
import ThemeContext from "../../../store/theme-context";
import Svg from "../../ui/Svg";
import Rainbow from "../../ui/Rainbow";
import profile from "../../assets/pop.png";
import Popup from "../../ui/Popup";
import AboutModal from "./AboutModal";

const skills = [
  { name: "html5", icon: "HTML5" },
  { name: "css3", icon: "CSS3" },
  { name: "javascript", icon: "Javascript" },
  { name: "typescript", icon: "Typescript" },
  { name: "firebase", icon: "Firebase" },
  { name: "node-dot-js", icon: "Nodejs" },
  { name: "sass", icon: "Sass" },
  { name: "materialdesign", icon: "Materialize CSS" },
  { name: "tailwindcss", icon: "Tailwind" },
  { name: "bootstrap", icon: "Bootstrap" },
  { name: "next-dot-js", icon: "Nextjs" },
  { name: "react", icon: "React" },
  { name: "wordpress", icon: "Wordpress" },
];

const About = () => {
  const ctx = useContext(ThemeContext);

  const [showModal, setShowModal] = useState(false);

  const showModalAHandler = () => {
    setShowModal(true);
  };

  const hideModalAHander = () => {
    setShowModal(false);
  };

  return (
    <div className="h-[100vh] w-[100%] bg-about-light bg-cover px-14 pt-5 dark:bg-about-dark">
      <div
        data-aos="zoom-out-down"
        data-aos-duration="150"
        className="box-about mx-auto flex h-[82%]  w-[50%] flex-col text-white backdrop-blur-sm transition-all duration-300 "
      >
        <div className="relative h-[35%]  rounded-t-3xl p-2">
          <div className="flex items-center gap-1">
            <Popup text="Github">
              <div className="cursor-pointer rounded-full p-3 transition hover:bg-[#fff4]">
                <Svg
                  name="github1"
                  size="28"
                  color={ctx.darkTheme ? "#fff" : "#000"}
                />
              </div>
            </Popup>
            <Popup text="Twitter">
              <div className="cursor-pointer rounded-full p-3 transition hover:bg-[#fff4]">
                <Svg
                  name="twitter1"
                  size="28"
                  color={ctx.darkTheme ? "#fff" : "#000"}
                />
              </div>
            </Popup>
            <Popup className="ml-auto" text="Menu">
              <div
                onClick={showModalAHandler}
                className=" cursor-pointer rounded-full p-3 transition hover:bg-[#fff4]"
              >
                <Svg name="error_outline" size="28" color="#E91E63" />
              </div>
            </Popup>
            {showModal && <AboutModal onClose={hideModalAHander} />}
          </div>
        </div>
        <div className="flex-1 rounded-b-3xl bg-[#fff9] dark:bg-[#19191999]">
          <div className="h-[3px]">
            <Rainbow />
          </div>
          <div className="mx-auto -mt-20 h-40 w-40 ">
            <img src={profile} alt="profile" />
          </div>
          <div className="mt-8 text-center font-light text-[#101010]">
            <p className="mb-2 text-3xl dark:text-pink">
              {ctx.darkTheme ? "@TechyMuideen" : "Muideen Popoola"}
            </p>
            <p className=" text-xl  dark:text-[#efefef] ">Frontend Developer</p>
          </div>

          <div className="mt-2 flex  flex-wrap justify-center gap-2 px-10">
            {skills.map((skill) => {
              return (
                <Popup text={skill.icon} key={skill.name}>
                  <div className=" rounded-full bg-white p-[6px] dark:bg-[#0004]">
                    <Svg name={skill.name} size={20} />
                  </div>
                </Popup>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

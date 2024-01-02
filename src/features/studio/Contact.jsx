import { useContext } from "react";
import ThemeContext from "../../../store/theme-context";
import Svg from "../../ui/Svg";

const Contact = () => {
  const ctx = useContext(ThemeContext);

  const icons = [
    { name: "phone", color: "#FFB300" },
    { name: "email", color: "#2196F3" },
    { name: "insert_invitation", color: "#9C27B0" },
    { name: "question", color: `${ctx.darkTheme ? "#fff" : "#707070"}` },
  ];

  return (
    <div>
      <div className="flex items-center">
        <Svg name="search" color="currentcolor" className="mr-[-60px]" />
        <input
          placeholder="Search ('/' to focus, ';' to toggle menu)"
          className="ml-6 w-[100%] flex-1 rounded-full bg-[#ffffff30] py-3 pl-10 pr-3 outline-none  placeholder:text-inherit"
        />
      </div>
      <div className="mt-5 flex items-center gap-4">
        {icons.map((icon, id) => {
          return (
            <div
              key={id}
              className="box flex cursor-pointer  items-center rounded-full bg-[#25252510] p-[8px]"
            >
              <Svg name={icon.name} color={icon.color} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Contact;

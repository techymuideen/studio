import { useContext, useEffect, useState } from "react";
import ThemeContext from "../../../../store/theme-context";
import Svg from "../../../ui/Svg";

const ProjectsFilter = ({ onSelect }) => {
  const ctx = useContext(ThemeContext);
  const [filterTags, setFilterTags] = useState([]);

  useEffect(() => {
    onSelect(filterTags);
  }, [filterTags, onSelect]);

  const filterHandler = (event) => {
    if (event.target.checked) {
      setFilterTags((prevList) => [...prevList, event.target.id]);
    } else {
      setFilterTags((prevList) =>
        prevList.filter((filterTag) => filterTag !== event.target.id),
      );
    }
  };

  return (
    <div
      data-aos="fade-up"
      className=" sticky top-[100px] hidden bg-[#fff] p-5 lg:flex lg:flex-col dark:bg-[#1E1E1E]"
    >
      <div className="flex items-center gap-2 text-xl font-medium text-[rgba(0,0,0,0.8)] dark:text-[#fff]">
        <Svg name="filter_list" color={ctx.darkTheme ? "#fff" : "#000"} />
        Projects Filter
      </div>
      <p className="mt-1 text-sm font-normal text-[rgba(0,0,0,0.6)] dark:text-[rgba(255,255,255,.6)]">
        Filter Projects by technologies used
      </p>
      <form className="mt-6 flex flex-wrap gap-5 px-4 text-base font-normal text-[rgba(0,0,0,.6)] dark:text-[rgba(255,255,255,.6)]">
        <div className="flex  cursor-pointer items-center gap-2">
          <input
            onChange={filterHandler}
            type="checkbox"
            className="checkbox"
            id="html5"
          />
          <label className="cursor-pointer" htmlFor="html5">
            HTML
          </label>
        </div>
        <div className="flex cursor-pointer items-center gap-2">
          <input
            onChange={filterHandler}
            type="checkbox"
            className="checkbox"
            id="javascript"
          />
          <label className="cursor-pointer" htmlFor="javascript">
            Javascript
          </label>
        </div>
        <div className="flex cursor-pointer items-center gap-2">
          <input
            onChange={filterHandler}
            type="checkbox"
            className="checkbox"
            id="vuejs"
          />
          <label className="cursor-pointer" htmlFor="vuejs">
            Vue JS
          </label>
        </div>
        <div className="flex cursor-pointer items-center gap-2">
          <input
            onChange={filterHandler}
            type="checkbox"
            className="checkbox"
            id="vuetify"
          />
          <label className="cursor-pointer" htmlFor="vuetify">
            Vuetify
          </label>
        </div>
        <div className="flex cursor-pointer items-center gap-2">
          <input
            onChange={filterHandler}
            type="checkbox"
            className="checkbox"
            id="wordpress"
          />
          <label className="cursor-pointer" htmlFor="wordpress">
            Wordpress
          </label>
        </div>
        <div className="flex cursor-pointer items-center gap-2">
          <input
            onChange={filterHandler}
            type="checkbox"
            className="checkbox"
            id="bootstrap"
          />
          <label className="cursor-pointer" htmlFor="bootstrap">
            Bootstrap
          </label>
        </div>
        <div className="flex cursor-pointer items-center gap-2">
          <input
            onChange={filterHandler}
            type="checkbox"
            className="checkbox"
            id="node-dot-js"
          />
          <label className="cursor-pointer" htmlFor="node-dot-js">
            Node JS
          </label>
        </div>
        <div className="flex cursor-pointer items-center gap-2">
          <input
            onChange={filterHandler}
            type="checkbox"
            className="checkbox"
            id="firebase"
          />
          <label className="cursor-pointer" htmlFor="firebase">
            Firebase
          </label>
        </div>
        <div className="flex cursor-pointer items-center gap-2">
          <input
            onChange={filterHandler}
            type="checkbox"
            className="checkbox"
            id="tailwindcss"
          />
          <label className="cursor-pointer" htmlFor="tailwindcss">
            Tailwind CSS
          </label>
        </div>
        <div className="flex cursor-pointer items-center gap-2">
          <input
            onChange={filterHandler}
            type="checkbox"
            className="checkbox"
            id="react"
          />
          <label className="cursor-pointer" htmlFor="reactjs">
            React JS
          </label>
        </div>
        <div className="flex cursor-pointer items-center gap-2">
          <input
            onChange={filterHandler}
            type="checkbox"
            className="checkbox"
            id="python"
          />
          <label className="cursor-pointer" htmlFor="python">
            Python
          </label>
        </div>
        <div className="flex cursor-pointer items-center gap-2">
          <input
            onChange={filterHandler}
            type="checkbox"
            className="checkbox"
            id="angular"
          />
          <label className="cursor-pointer" htmlFor="angular">
            Angular
          </label>
        </div>
        <div className="flex cursor-pointer items-center gap-2">
          <input
            onChange={filterHandler}
            type="checkbox"
            className="checkbox"
            id="typescript"
          />
          <label className="cursor-pointer" htmlFor="typescript">
            Typescript
          </label>
        </div>
        <div className="flex cursor-pointer items-center gap-2">
          <input
            onChange={filterHandler}
            type="checkbox"
            className="checkbox"
            id="nextjs"
          />
          <label className="cursor-pointer" htmlFor="nextjs">
            Next JS
          </label>
        </div>
        <div className="flex cursor-pointer items-center gap-2">
          <input
            onChange={filterHandler}
            type="checkbox"
            className="checkbox"
            id="sass"
          />
          <label className="cursor-pointer" htmlFor="sass">
            Sass
          </label>
        </div>
        <div className="flex cursor-pointer items-center gap-2">
          <input
            onChange={filterHandler}
            type="checkbox"
            className="checkbox"
            id="expressjs"
          />
          <label className="cursor-pointer" htmlFor="expressjs">
            Express.Js
          </label>
        </div>
        <div className="flex cursor-pointer items-center gap-2">
          <input
            onChange={filterHandler}
            type="checkbox"
            className="checkbox"
            id="mongodb"
          />
          <label className="cursor-pointer" htmlFor="mongodb">
            MongoDB
          </label>
        </div>
        <div className="flex cursor-pointer items-center gap-2">
          <input
            onChange={filterHandler}
            type="checkbox"
            className="checkbox"
            id="django"
          />
          <label className="cursor-pointer" htmlFor="django">
            Django
          </label>
        </div>
      </form>
    </div>
  );
};

export default ProjectsFilter;

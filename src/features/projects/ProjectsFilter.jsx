import Svg from "../../ui/Svg";

const ProjectsFilter = () => {
  return (
    <div className="bg-[#fff] p-5">
      <div className="flex items-center gap-2 text-xl font-medium text-[rgba(0,0,0,0.8)]">
        <Svg name="filter_list" />
        Projects Filter
      </div>
      <p className="mt-1 text-sm font-normal text-[rgba(0,0,0,0.6)]">
        Filter Projects by technologies used
      </p>
      <form className="mt-6 flex flex-wrap gap-5 px-4 text-base font-normal text-[rgba(0,0,0,.6)]">
        <div className="flex  items-center gap-2">
          <input
            type="checkbox"
            className="h-4 w-4 cursor-pointer  border-red-300 bg-red-100 text-red-600 focus:ring-red-200"
            id="html"
          />
          <label htmlFor="html">HTML</label>
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" id="javascript" />
          <label htmlFor="javascript">Javascript</label>
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" id="vuejs" />
          <label htmlFor="vuejs">Vue JS</label>
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" id="vuetify" />
          <label htmlFor="vuetify">Vuetify</label>
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" id="wordpress" />
          <label htmlFor="wordpress">Wordpress</label>
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" id="bootstrap" />
          <label htmlFor="bootstrap">Bootstrap</label>
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" id="nodejs" />
          <label htmlFor="nodejs">Node JS</label>
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" id="firebase" />
          <label htmlFor="firebase">Firebase</label>
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" id="tailwindcss" />
          <label htmlFor="tailwindcss">Tailwind CSS</label>
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" id="reactjs" />
          <label htmlFor="reactjs">React JS</label>
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" id="python" />
          <label htmlFor="python">Python</label>
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" id="angular" />
          <label htmlFor="angular">Angular</label>
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" id="typescript" />
          <label htmlFor="typescript">Typescript</label>
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" id="nextjs" />
          <label htmlFor="nextjs">Next JS</label>
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" id="sass" />
          <label htmlFor="sass">Sass</label>
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" id="django" />
          <label htmlFor="django">Django</label>
        </div>
      </form>
    </div>
  );
};

export default ProjectsFilter;

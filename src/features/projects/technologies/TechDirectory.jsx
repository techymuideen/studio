import { Fragment } from "react";
import { Link } from "react-router-dom";
import Svg from "../../../ui/Svg";
import SeeMore from "./SeeMore";

const TechDirectory = () => {
  const mySoftwareContent = (
    <Fragment>
      <Link className="handler pad space mt-5">
        <Svg name="visualstudiocode" />
        <p>VS Code</p>
      </Link>

      <Link className="pad handler space">
        <Svg name="terminal" />
        <p>Windows Terminal </p>
      </Link>

      <Link className="pad handler space">
        <Svg name="file-pdf" />
        <p> Adobe Suite </p>
      </Link>
    </Fragment>
  );

  const content = (
    <Fragment>
      <Link className="pad handler space">
        <Svg name="computer" /> <p>My Laptop</p>
      </Link>
      <SeeMore
        icon="integration_instructions"
        text="My Software"
        sub="true"
        content={mySoftwareContent}
      />
    </Fragment>
  );

  const myLanguageContent = (
    <Fragment>
      <Link className="pad handler space">
        <Svg name="html5" /> <p>HTML</p>
      </Link>

      <Link className="pad handler space">
        <Svg name="css3" />
        <p> CSS</p>
      </Link>

      <Link className="pad handler space">
        <Svg name="javascript" /> <p> Javascript (ES6)</p>
      </Link>
      <Link className="pad handler space">
        <Svg name="sass" /> <p> SASS</p>
      </Link>
    </Fragment>
  );

  const myFrameworksContent = (
    <Fragment>
      <Link className="pad handler space">
        <Svg name="vue-dot-js" />
        <p> Vue Js</p>
      </Link>

      <Link className="pad handler space">
        <Svg name="angular" />
        <p> Angular 2</p>
      </Link>

      <Link className="pad handler space">
        <Svg name="react" /> <p> React</p>
      </Link>
    </Fragment>
  );

  const myLibrariesContent = (
    <Fragment>
      <Link className="pad handler space">
        <Svg name="vue-dot-js" /> <p>Vuetify</p>
      </Link>

      <Link className="pad handler space">
        <Svg name="angular" /> <p> Angular Material</p>
      </Link>

      <Link className="pad handler space">
        <Svg name="materialdesign" /> <p> Material UI</p>
      </Link>
      <Link className="pad handler space">
        <Svg name="bootstrap" /> <p> Bootstrap</p>
      </Link>
      <Link className="pad handler space">
        <Svg name="tailwindcss" />
        <p> tailwindcss</p>
      </Link>
    </Fragment>
  );

  const frontendContent = (
    <Fragment>
      <SeeMore
        icon="translate"
        text="Language / Basics"
        sub="true"
        content={myLanguageContent}
      />
      <SeeMore
        icon="architecture"
        text="Frameworks"
        sub="true"
        content={myFrameworksContent}
      />
      <SeeMore
        icon="tools"
        text="Libraries"
        sub="true"
        content={myLibrariesContent}
      />
    </Fragment>
  );

  const backendContent = (
    <Fragment>
      <Link className="pad handler space">
        <Svg name="node-dot-js" /> <p> Node js</p>
      </Link>

      <Link className="pad handler space">
        <Svg name="database" /> <p> MySQL</p>
      </Link>

      <Link className="pad handler space">
        <Svg name="firebase" /> <p> Firebase </p>
      </Link>
      <Link className="pad handler space">
        <Svg name="django" /> <p> Django </p>
      </Link>
    </Fragment>
  );

  return (
    <div className="box mt-4 rounded-md bg-[#fff] p-0 dark:bg-[#1E1E1E]">
      <h2 className="rounded-t-sm bg-[#3F51B5] p-4 text-2xl font-normal text-[#fff]">
        Tech Directory
      </h2>
      <div className="flex ">
        <div className=" flex flex-[35%] flex-col gap-1 border-r-2 pb-6 pt-8 text-base font-normal text-[rgba(0,0,0,.8)] dark:border-[#b5b2b218] dark:text-[#fff]">
          <Link className="px-6 pb-1">
            <SeeMore text="My Home Setup" icon="home" content={content} />
          </Link>
          <Link className="px-6 py-1">
            <SeeMore
              icon="personal_video"
              text="Front End Technologies"
              content={frontendContent}
            />
          </Link>
          <Link className="px-6 py-1">
            <SeeMore
              text="Back End Technologies"
              icon="storage"
              content={backendContent}
            />
          </Link>
        </div>
        <div className="flex flex-[65%] items-center justify-center">
          <div className="text-xl font-light text-[#bdbdbd]">
            Select a Technology
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechDirectory;

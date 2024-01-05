import { NavLink } from "react-router-dom";

const Projects = () => {
  return (
    <div>
      This is where you will get to see all the exciting projects i am working
      on
      <NavLink to="/projects">Web Projects</NavLink>
      <NavLink to="/projects/technologies">Technologies</NavLink>
      <NavLink to="/projects/myprocess">My Process</NavLink>
    </div>
  );
};

export default Projects;

import { Link } from "react-router-dom";
import Svg from "../../../ui/Svg";
import PropTypes from "prop-types";

const ProcessItem = ({
  color,
  title,
  text,
  icon,
  bordercolor,
  tohover,
  headerbg,
  textcol,
  link,
}) => {
  ProcessItem.propTypes = {
    color: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    icon: PropTypes.array.isRequired,
    tohover: PropTypes.array.isRequired,
    bordercolor: PropTypes.array.isRequired,
    headerbg: PropTypes.array.isRequired,
    textcol: PropTypes.array.isRequired,
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  };

  return (
    <div data-aos="fade-up" className="flex items-start gap-10 text-[#fff]">
      <div className={`rounded-full bg-[${color}] p-3`}>
        <Svg name={icon} />
      </div>
      <div className={`box flex-1 rounded-md  bg-[#fff] p-0 pb-6`}>
        <h2
          className={`rounded-t-sm ${headerbg} clipy -ml-3 w-[104%] px-4 py-4 pl-10 text-xl font-medium text-[#fff]  sm:w-[102.2%] md:w-[101.5%] lg:w-[101.2%]`}
        >
          {title}
        </h2>
        <p className="mb-2 px-4 py-4 text-sm font-normal text-[#161111]">
          {text}
        </p>
        <Link
          className={`ml-4 hidden rounded-md border max-sm:text-sm lg:inline ${textcol} ${tohover} px-3 py-2 transition-colors  lg:px-5 ${bordercolor}`}
        >
          {link}
        </Link>
        <Link
          className={`ml-4 rounded-md border max-sm:text-sm lg:hidden ${textcol} ${tohover} px-3 py-2 transition-colors  lg:px-5 ${bordercolor}`}
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default ProcessItem;

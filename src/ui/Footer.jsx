import { Link } from "react-router-dom";

const now = new Date();
const year = now.getFullYear();

const Footer = () => {
  return (
    <div className="flex w-[100%] gap-4 bg-[#fff] px-8 py-2 text-pink dark:bg-black">
      <p className="text-base font-normal text-light-black dark:text-[#fff]">
        &copy; {year}
      </p>

      <Link className="ml-auto" to="">
        Music Player 🎵
      </Link>
      <Link to="">Try out different colors 🎨</Link>
    </div>
  );
};

export default Footer;

import SeeMore from "./SeeMore";

const TechDirectory = () => {
  return (
    <div className="mt-4 bg-[#fff]">
      <h2 className="rounded-t-sm bg-[#3F51B5] p-4 text-2xl font-normal text-[#fff]">
        Tech Directory
      </h2>
      <div className="px-6 py-10">
        <SeeMore />
      </div>
    </div>
  );
};

export default TechDirectory;

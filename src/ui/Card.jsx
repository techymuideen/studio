import Rainbow from "./Rainbow";

const Card = () => {
  return (
    <div className="box bg-[#F1F1F1] px-12 py-14 backdrop-blur-[1px] transition-all duration-300 hover:backdrop-blur-sm dark:bg-[#131313] dark:text-white ">
      <p className="mb-3 text-[34px] font-light">Projects</p>
      <div className="h-[10px]">
        <Rainbow />
      </div>
      <p className="mt-4 text-2xl font-light leading-8">
        As I continue to learn and grow as a developer, these are some of the
        results of my endeavours so far...
      </p>
    </div>
  );
};

export default Card;

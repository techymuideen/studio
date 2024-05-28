import "aos/dist/aos.css";

const Music = () => {
  return (
    <div className="flex px-5 h-[100vh] flex-col items-center justify-center dark:bg-black dark:text-white">
      <div
        data-aos="fade-left"
        data-aos-duration="300"
        className="loader mb-4"
      ></div>
      <div data-aos="fade-right" data-aos-duration="300" className="mx-auto">
        I am still working on adding music feature. You can check back later.
      </div>
    </div>
  );
};

export default Music;

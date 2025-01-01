import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";
import ThemeContext from "../../store/theme-context";
import Footer from "./Footer";

const AppLayout = () => {
  const [dark, setDark] = useState(false);
  const [toggleSideBar, setToggleSideBar] = useState(() => {
    // Check screen size during initialization
    return !window.matchMedia("(max-width: 1024px)").matches;
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia("(max-width: 1024px)").matches) {
        setToggleSideBar(false);
      } else {
        setToggleSideBar(true);
      }
    };

    // Set initial state based on current screen size
    handleResize();

    // Listen for resize events
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const changeDarkHandler = () => {
    setDark((prevState) => !prevState);
  };

  const toggleSideBarHandler = () => {
    setToggleSideBar((prevState) => !prevState);
  };

  return (
    <ThemeContext.Provider
      value={{
        darkTheme: dark,
        onChangeTheme: changeDarkHandler,
        toggleState: toggleSideBar,
        onToggle: toggleSideBarHandler,
      }}
    >
      <div
        className={`flex w-[100%]   ${dark ? "dark bg-black" : "bg-white"} `}
        id="overlays"
      >
        <SideBar />
        <div className="border-1 -z-0 min-h-[100vh] w-[100%] flex-1 ">
          <Header />
          <main className="min-h-[100vh] ">
            {toggleSideBar && (
              <div
                onClick={toggleSideBarHandler}
                className=" fixed left-0 top-0 z-10 h-[100vh] w-[100%] bg-[#0008] backdrop-blur-sm lg:hidden"
              />
            )}
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default AppLayout;

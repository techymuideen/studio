import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";
import ThemeContext from "../../store/theme-context";
import Footer from "./Footer";

const AppLayout = () => {
  const [dark, setDark] = useState(false);
  const [toggleSideBar, setToggleSideBar] = useState(true);

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
      <div className={`flex  ${dark ? "dark" : ""} `} id="overlays">
        <SideBar />
        <div className="border-1 min-h-[100%] flex-1 ">
          <Header />
          <main className="max-h-[100%] ">
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default AppLayout;

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
      <div className={`flex max-h-screen ${dark ? "dark" : ""}`}>
        <SideBar />
        <div className="border-1 min-h-screen flex-1 overflow-y-scroll">
          <Header />
          <main className="">
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default AppLayout;

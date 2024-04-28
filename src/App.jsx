import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Studio from "./features/studio/Studio";
import Projects from "./features/projects/Projects";
import Blog from "./features/Blog/Blog";
import About from "./features/about/About";
import Music from "./features/music/Music";
import Library from "./features/library/Library";
import Technologies from "./features/projects/technologies/Technologies";
import WebProjects from "./features/projects/webprojects/WebProjects";
import MyProcess from "./features/projects/process/MyProcess";
import AOS from "aos";
import "aos/dist/aos.css";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Studio /> },
      {
        path: "/projects",
        element: <Projects />,
        children: [
          { path: "/projects", element: <WebProjects /> },
          { path: "/projects/technologies", element: <Technologies /> },
          { path: "/projects/myprocess", element: <MyProcess /> },
        ],
      },
      { path: "/blog", element: <Blog /> },
      { path: "/about", element: <About /> },
      { path: "/music", element: <Music /> },
      { path: "/library", element: <Library /> },
    ],
  },
]);

function App() {
  useEffect(() => {
    AOS.init({
      offset: 50,
      duration: 500,
      easing: "ease-in",
      mirror: true,
    });
  }, []);

  return <RouterProvider router={router} />;
}

export default App;

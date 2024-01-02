import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Studio from "./features/studio/Studio";
import Projects from "./features/projects/Projects";
import WebPieces from "./features/web-pieces/WebPieces";
import About from "./features/about/About";
import Music from "./features/music/Music";
import Library from "./features/library/Library";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Studio /> },
      { path: "/projects", element: <Projects /> },
      { path: "/webpieces", element: <WebPieces /> },
      { path: "/about", element: <About /> },
      { path: "/music", element: <Music /> },
      { path: "/library", element: <Library /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import { RoutesPaths } from "./constants/routes";
import Astronauts from "./pages/Astronauts";

export const router = createBrowserRouter([
  {
    path: RoutesPaths.HOME,
    element: <Home />,
  },
  {
    path: RoutesPaths.ASTRONAUTS,
    element: <Astronauts />,
  },
]);

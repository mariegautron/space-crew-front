import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import { RoutesPaths } from "./constants/routes";
import Astronauts from "./pages/Astronauts";
import AddAstronaut from "./pages/AddAstronaut";

export const router = createBrowserRouter([
  {
    path: RoutesPaths.HOME,
    element: <Home />,
  },
  {
    path: RoutesPaths.ASTRONAUTS,
    element: <Astronauts />,
  },
  {
    path: RoutesPaths.ADD_ASTRONAUT,
    element: <AddAstronaut />,
  },
]);

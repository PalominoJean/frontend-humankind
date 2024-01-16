import { createBrowserRouter } from "react-router-dom";
import Landing from "../layouts/Landing/Landing";
import Home from "../pages/Home/Home";
import Wrestle from "../pages/Wrestle/Wrestle";
import Collectibles from "../pages/Collectibles/Collectibles";
import Subscribe from "../pages/Subscribe/Subscribe";
import Play from "../pages/Play/Play";

export const router = createBrowserRouter([
  {
    element: <Landing></Landing>,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "wrestle",
        element: <Wrestle></Wrestle>,
      },
      {
        path: "collectibles",
        element: <Collectibles></Collectibles>,
      },
      {
        path: "subscribe",
        element: <Subscribe></Subscribe>,
      },
      {
        path: "play",
        element: <Play></Play>,
      },
    ],
  },
  {
    path: "hola",
    element: <p>hola222</p>,
  },
]);

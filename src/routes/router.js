import { createBrowserRouter } from "react-router-dom";
import Landing from "../layouts/Landing/Landing";
import Home from "../pages/Home/Home";
import Wrestle from "../pages/Wrestle/Wrestle";
import Collectibles from "../pages/Collectibles/Collectibles";

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
    ],
  },
  {
    path: "hola",
    element: <p>hola222</p>,
  },
]);

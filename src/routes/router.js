import { createBrowserRouter } from "react-router-dom";
import Landing from "../layouts/Landing/Landing";
import Home from "../pages/Home/Home";
import Wrestle from "../pages/Wrestle/Wrestle";

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
    ],
  },
  {
    path: "hola",
    element: <p>hola222</p>,
  },
]);

import { createBrowserRouter } from "react-router-dom";
//components
import Landing from "../layouts/Landing/Landing";
import Home from "../pages/Home/Home";
import Wrestle from "../pages/Wrestle/Wrestle";
import Collectibles from "../pages/Collectibles/Collectibles";
import Subscribe from "../pages/Subscribe/Subscribe";
import Play from "../pages/Play/Play";
import Conference from "../pages/Conference/Conference";
import Studios from "../pages/Studios/Studios";
import Discord from "../pages/Discord/Discord";
import Photos from "../pages/Photos/Photos";
import DailyDoodles from "../pages/DailyDoodles/DailyDoodles";
import About from "../pages/About/About";
import Careers from "../pages/Careers/Careers";

export const router = createBrowserRouter([
  {
    element: <Landing />,
    children: [
      { path: "", element: <Home /> },
      { path: "wrestle", element: <Wrestle /> },
      { path: "collectibles", element: <Collectibles /> },
      { path: "conference", element: <Conference /> },
      { path: "careers", element: <Careers /> },
      { path: "about", element: <About /> },
      { path: "dailyDoodles", element: <DailyDoodles /> },
      { path: "photos", element: <Photos /> },
      { path: "discord", element: <Discord /> },
      { path: "studios", element: <Studios /> },
      { path: "subscribe", element: <Subscribe /> },
      { path: "play", element: <Play /> },
    ],
  },
  {
    path: "hola",
    element: <p>hola222</p>,
  },
]);

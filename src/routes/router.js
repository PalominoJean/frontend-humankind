import { createBrowserRouter } from "react-router-dom";
//components
import Landing from "../layouts/landing/Landing";
import Home from "../pages/home/Home";
import Wrestle from "../pages/wrestle/Wrestle";
import Collectibles from "../pages/collectibles/Collectibles";
import Subscribe from "../pages/subscribe/Subscribe";
import Play from "../pages/play/Play";
import Conference from "../pages/conference/Conference";
import Studios from "../pages/studios/Studios";
import Discord from "../pages/discord/Discord";
import Photos from "../pages/photos/Photos";
import DailyDoodles from "../pages/dailyDoodles/DailyDoodles";
import About from "../pages/about/About";
import Careers from "../pages/careers/Careers";

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

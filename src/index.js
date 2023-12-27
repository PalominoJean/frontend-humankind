import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/scss/styles.scss";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Landing from "./layouts/Landing/Landing";
import Wrestle from "./pages/Wrestle/Wrestle";
// import router from "./routes/router";

const router = createBrowserRouter([
  {
    path: "",
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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

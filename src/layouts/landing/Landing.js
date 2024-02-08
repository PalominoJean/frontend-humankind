import { Outlet } from "react-router-dom";
//compontes
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Landing() {
  return (
    <>
      <Header></Header>
      <div className="mt-16">
        <Outlet />
      </div>
      <Footer></Footer>
    </>
  );
}

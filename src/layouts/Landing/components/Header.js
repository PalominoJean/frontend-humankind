import { useLocation, useNavigate } from "react-router-dom";
import logo from "./../../../assets/images/icon.svg";
import { useState } from "react";
import { isVisible } from "@testing-library/user-event/dist/utils";

function Header() {
  const [isMenuHidden, setIsMenuHidden] = useState(true);
  const [isSubmenuShown, setIsSubmenuShown] = useState(false);

  const navigate = useNavigate();
  const { pathname } = useLocation();

  console.log("pathname", pathname);

  const handleSetIsMenuHidden = () => {
    setIsMenuHidden(!isMenuHidden);
  };

  const handleSetIsSubmenuShown = (isShown) => {
    console.log("en efeccto", isShown);
    setIsSubmenuShown(isShown);
  };

  const navigateHome = () => {
    navigate("/");
  };

  const navigateWrestle = () => {
    navigate("/wrestle");
  };

  const navigateCollectibles = () => {
    navigate("/collectibles");
  };

  const getClassActive = (value) => {
    return pathname === `/${value}` ? "list-disc" : "";
  };

  return (
    <div className="grid grid-cols-12 py-2  sticky top-0 bg-white">
      <div className="col-span-3">
        <div className="flex items-start gap-1" onClick={navigateHome}>
          <img src={logo} className="w-11" alt="logo" />
          <p className="text-xl font-bold lg:text-2xl">humankind</p>
        </div>
      </div>
      <div
        className="col-span-9 text-right md:hidden"
        onClick={handleSetIsMenuHidden}
      >
        <button>Menu</button>
      </div>
      <div
        className={`col-span-12 justify-end flex flex-col p-10 shadow-xl gap-y-5 md:flex lg:gap-1 ${
          isMenuHidden ? "hidden" : "flex"
        }`}
      >
        <ul>
          <li
            className={`py-3 px-4 font-semibold text-sm text-left transition cursor-pointer hover:text-gray-500 md:text-md lg:text-lg ${getClassActive(
              "wrestle"
            )}`}
            onClick={navigateWrestle}
          >
            Wrestle
          </li>
          <li
            className={`py-3 px-4 font-semibold text-sm text-left transition cursor-pointer mt-5 hover:text-gray-500 md:text-md lg:text-lg ${getClassActive(
              "collectibles"
            )}`}
            onClick={navigateCollectibles}
          >
            Collectibles
          </li>
          <li className="py-3 px-4 font-semibold text-sm text-left transition cursor-pointer mt-5 hover:text-gray-500 md:text-md lg:text-lg">
            Shop
          </li>
          <li
            className="py-3 px-4 font-semibold text-sm text-left transition mt-5 md:text-md lg:text-lg"
            onMouseEnter={() => handleSetIsSubmenuShown(true)}
            onMouseLeave={() => handleSetIsSubmenuShown(false)}
          >
            Community
            <ul
              className={`flex-col gap-3 ${isSubmenuShown ? "flex" : "hidden"}`}
            >
              <li className="ml-2 mt-5 cursor-pointer hover:text-gray-500">
                Conference
              </li>
              <li className="ml-2 mt-2 cursor-pointer hover:text-gray-500">
                Carrers
              </li>
              <li className="ml-2 mt-2 cursor-pointer hover:text-gray-500">
                About
              </li>
              <li className="ml-2 mt-2 cursor-pointer hover:text-gray-500">
                Daily Doodles
              </li>
              <li className="ml-2 mt-2 cursor-pointer hover:text-gray-500">
                Photos
              </li>
              <li className="ml-2 mt-2 cursor-pointer hover:text-gray-500">
                Discord
              </li>
              <li className="ml-2 mt-2 cursor-pointer hover:text-gray-500">
                Studios
              </li>
            </ul>
          </li>
          <li className="py-2 px-4 font-semibold text-sm text-left transition cursor-pointer mt-5 hover:text-gray-500 md:text-md lg:text-lg">
            Subscribe
          </li>
        </ul>
        <button className="bg-black text-white text-sm py-1 px-6 rounded-full font-bold border-4 border-black hover:bg-red-500 hover:shadow-md hover:translate-x-0.5 hover:-translate-y-0.5 transition md:text-md lg:text-lg">
          Play Now! 💀
        </button>
      </div>
    </div>
  );
}

export default Header;

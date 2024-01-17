import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
//images
import logo from "./../../../assets/images/icon.svg";

function Header() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [isMenuHidden, setIsMenuHidden] = useState(true);
  const [isSubmenuHidden, setIsSubmenuHidden] = useState(true);

  const handleSetIsMenuHidden = () => {
    setIsMenuHidden(!isMenuHidden);
  };

  const handleSetIsSubmenuHidden = (isShown) => {
    setIsSubmenuHidden(isShown);
  };

  const navigateTo = (route = "") => {
    navigate(`/${route}`);
    setIsMenuHidden(true);
    setIsSubmenuHidden(true);
  };

  const getClassActive = (value, isMenu = true) => {
    return pathname !== `/${value}`
      ? ""
      : isMenu
      ? "list-disc"
      : "underline decoration-solid";
  };

  return (
    <div className="grid grid-cols-12 px-4 py-3 top-0 bg-white sticky z-10 w-full shadow-xl md:px-4 md:py-2 md:shadow-none">
      <div className="col-span-3">
        <div className="flex items-start gap-1" onClick={() => navigateTo()}>
          <img src={logo} className="w-11" alt="logo" />
          <p className="text-xl font-bold lg:text-2xl">humankind</p>
        </div>
      </div>
      <div className="col-span-9 flex items-center justify-end md:hidden">
        <div
          className="flex flex-col gap-y-1 cursor-pointer"
          onClick={handleSetIsMenuHidden}
        >
          <div className="menu-icon"></div>
          <div className="menu-icon"></div>
          <div className="menu-icon"></div>
        </div>
      </div>
      <div
        className={`col-span-12 justify-end flex flex-col p-8 gap-y-5 md:flex md:flex-row md:gap-x-5 md:col-span-9 md:p-0 lg:gap-x-8 ${
          isMenuHidden ? "hidden" : "flex"
        }`}
      >
        <ul className="flex flex-col gap-x-14 gap-y-12 p-2 md:flex-row md:items-center md:p-0">
          <li
            className={`font-semibold text-sm text-left transition cursor-pointer hover:text-gray-500 md:text-md lg:text-lg ${getClassActive(
              "wrestle"
            )}`}
            onClick={() => navigateTo("wrestle")}
          >
            Wrestle
          </li>
          <li
            className={`font-semibold text-sm text-left transition cursor-pointer hover:text-gray-500 md:text-md lg:text-lg ${getClassActive(
              "collectibles"
            )}`}
            onClick={() => navigateTo("collectibles")}
          >
            Collectibles
          </li>
          <li
            className="font-semibold text-sm text-left transition md:relative md:text-md md:z-10 lg:text-lg "
            onMouseEnter={() => handleSetIsSubmenuHidden(false)}
            onMouseLeave={() => handleSetIsSubmenuHidden(true)}
          >
            Community
            <ul
              className={`flex-col gap-y-4 md:absolute px-3 pt-6 md:bg-white md:p-5 md:gap-y-6 md:border-2 md:rounded md:border-black	 ${
                isSubmenuHidden ? "hidden" : "flex"
              }`}
            >
              <li
                className={` cursor-pointer hover:text-gray-500 ${getClassActive(
                  "conference",
                  false
                )}`}
                onClick={() => navigateTo("conference")}
              >
                Conference
              </li>
              <li
                className={` cursor-pointer hover:text-gray-500 ${getClassActive(
                  "careers",
                  false
                )}`}
                onClick={() => navigateTo("careers")}
              >
                Carrers
              </li>
              <li
                className={` cursor-pointer hover:text-gray-500 ${getClassActive(
                  "about",
                  false
                )}`}
                onClick={() => navigateTo("about")}
              >
                About
              </li>
              <li
                className={`cursor-pointer hover:text-gray-500 ${getClassActive(
                  "dailyDoodles",
                  false
                )}`}
                onClick={() => navigateTo("dailyDoodles")}
              >
                <p>Daily Doodles</p>
              </li>
              <li
                className={` cursor-pointer hover:text-gray-500 ${getClassActive(
                  "photos",
                  false
                )}`}
                onClick={() => navigateTo("photos")}
              >
                Photos
              </li>
              <li
                className={` cursor-pointer hover:text-gray-500 ${getClassActive(
                  "discord",
                  false
                )}`}
                onClick={() => navigateTo("discord")}
              >
                Discord
              </li>
              <li
                className={` cursor-pointer hover:text-gray-500 ${getClassActive(
                  "studios",
                  false
                )}`}
                onClick={() => navigateTo("studios")}
              >
                Studios
              </li>
            </ul>
          </li>
          <li
            className={`font-semibold text-sm text-left transition cursor-pointer hover:text-gray-500 md:text-md lg:text-lg ${getClassActive(
              "subscribe"
            )}`}
            onClick={() => navigateTo("subscribe")}
          >
            Subscribe
          </li>
        </ul>
        <button
          className="bg-black text-white text-sm py-1 px-6 rounded-full font-bold border-4 border-black hover:bg-red-500 hover:shadow-md hover:translate-x-0.5 hover:-translate-y-0.5 transition md:text-md lg:text-lg"
          onClick={() => navigateTo("play")}
        >
          Play Now! 💀
        </button>
      </div>
    </div>
  );
}

export default Header;

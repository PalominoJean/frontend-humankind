import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
//images
import logo from "./../../../assets/images/icon.svg";
import chevronDown from "./../../../assets/images/chevron-down.svg";
import Button from "../../../components/Button";

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

  const openInNewTab = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="grid grid-cols-12 px-4 py-3 top-0 bg-white fixed z-20 w-full shadow-xl md:px-4 md:py-2 md:shadow-none">
      <div className="col-span-3">
        <div
          className="flex items-start gap-1 cursor-pointer"
          onClick={() => navigateTo()}
        >
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
            <div className="flex gap-1">
              <p>Community</p>
              <img
                src={chevronDown}
                className={`w-5 transition-all	${
                  isSubmenuHidden ? "" : "rotate-180"
                }`}
                alt="chevronDown"
              />
            </div>
            <ul
              className={`flex-col gap-y-4 md:absolute px-3 pt-6 md:bg-white md:p-5 md:gap-y-6 md:border-2 md:rounded md:border-black	 ${
                isSubmenuHidden ? "hidden" : "flex"
              }`}
            >
              {/* <li
                className={` cursor-pointer hover:text-gray-500 ${getClassActive(
                  "conference",
                  false
                )}`}
                onClick={() => navigateTo("conference")}
              >
                Conference
              </li> */}
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
              {/* <li
                className={` cursor-pointer hover:text-gray-500 ${getClassActive(
                  "photos",
                  false
                )}`}
                onClick={() => navigateTo("photos")}
              >
                Photos
              </li> */}
              <li
                className={` cursor-pointer hover:text-gray-500 ${getClassActive(
                  "discord",
                  false
                )}`}
                onClick={() =>
                  openInNewTab("https://discord.com/invite/robotos")
                }
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
        <Button
          text="Play Now! 💀"
          type="secondary"
          size="small"
          onClick={() => navigateTo("play")}
        ></Button>
      </div>
    </div>
  );
}

export default Header;

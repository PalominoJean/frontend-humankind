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
  };

  const getClassActive = (value, isMenu = true) => {
    return pathname !== `/${value}`
      ? ""
      : isMenu
      ? "list-disc"
      : "underline decoration-solid";
  };

  return (
    <div className="grid grid-cols-12 py-2  sticky top-0 bg-white">
      <div className="col-span-3">
        <div className="flex items-start gap-1" onClick={() => navigateTo()}>
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
            onClick={() => navigateTo("wrestle")}
          >
            Wrestle
          </li>
          <li
            className={`py-3 px-4 font-semibold text-sm text-left transition cursor-pointer mt-5 hover:text-gray-500 md:text-md lg:text-lg ${getClassActive(
              "collectibles"
            )}`}
            onClick={() => navigateTo("collectibles")}
          >
            Collectibles
          </li>
          <li
            className="py-3 px-4 font-semibold text-sm text-left transition mt-5 md:text-md lg:text-lg"
            onMouseEnter={() => handleSetIsSubmenuHidden(false)}
            onMouseLeave={() => handleSetIsSubmenuHidden(true)}
          >
            Community
            <ul
              className={`flex-col gap-3 ${
                isSubmenuHidden ? "hidden" : "flex"
              }`}
            >
              <li
                className={`ml-2 mt-5 cursor-pointer hover:text-gray-500 ${getClassActive(
                  "conference",
                  false
                )}`}
                onClick={() => navigateTo("conference")}
              >
                Conference
              </li>
              <li
                className={`ml-2 mt-2 cursor-pointer hover:text-gray-500 ${getClassActive(
                  "careers",
                  false
                )}`}
                onClick={() => navigateTo("careers")}
              >
                Carrers
              </li>
              <li
                className={`ml-2 mt-2 cursor-pointer hover:text-gray-500 ${getClassActive(
                  "about",
                  false
                )}`}
                onClick={() => navigateTo("about")}
              >
                About
              </li>
              <li
                className={`ml-2 mt-2 cursor-pointer hover:text-gray-500 ${getClassActive(
                  "dailyDoodles",
                  false
                )}`}
                onClick={() => navigateTo("dailyDoodles")}
              >
                Daily Doodles
              </li>
              <li
                className={`ml-2 mt-2 cursor-pointer hover:text-gray-500 ${getClassActive(
                  "photos",
                  false
                )}`}
                onClick={() => navigateTo("photos")}
              >
                Photos
              </li>
              <li
                className={`ml-2 mt-2 cursor-pointer hover:text-gray-500 ${getClassActive(
                  "discord",
                  false
                )}`}
                onClick={() => navigateTo("discord")}
              >
                Discord
              </li>
              <li
                className={`ml-2 mt-2 cursor-pointer hover:text-gray-500 ${getClassActive(
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
            className={`py-3 px-4 font-semibold text-sm text-left transition cursor-pointer mt-5 hover:text-gray-500 md:text-md lg:text-lg ${getClassActive(
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

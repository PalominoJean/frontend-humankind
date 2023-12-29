import { useNavigate } from "react-router-dom";
import logo from "./../../../assets/images/icon.svg";

function Header() {
  const navigate = useNavigate();

  const navigateWrestle = () => {
    navigate("/wrestle");
  };

  const navigateCollectibles = () => {
    navigate("/collectibles");
  };

  return (
    <div className="flex justify-between py-2 px-4 sticky top-0 bg-white">
      <div className="flex items-center gap-1">
        <img src={logo} className="w-11 m-auto" alt="logo" />
        <p className="text-2xl font-bold">humankind</p>
      </div>
      <div className="flex gap-1">
        <button
          className="py-2 px-4 text-lg font-semibold hover:text-gray-500 transition"
          onClick={navigateWrestle}
        >
          Wrestle
        </button>
        <button
          className="py-2 px-4 text-lg font-semibold hover:text-gray-500 transition"
          onClick={navigateCollectibles}
        >
          Collectibles
        </button>
        <button className="py-2 px-4 text-lg font-semibold hover:text-gray-500 transition">
          Studios
        </button>
        <button className="py-2 px-4 text-lg font-semibold hover:text-gray-500 transition">
          Community
        </button>
        <button className="py-2 px-4 text-lg font-semibold hover:text-gray-500 transition">
          Subscribe
        </button>
        <button className="bg-black text-lg text-white py-1 px-6 rounded-full font-bold border-4 border-black hover:bg-red-500 hover:shadow-md hover:translate-x-0.5 hover:-translate-y-0.5 transition">
          Play Now! 💀
        </button>
      </div>
    </div>
  );
}

export default Header;

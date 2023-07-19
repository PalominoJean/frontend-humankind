function Header() {
  return (
    <div className="flex justify-between py-2 px-4">
      <div>
        <p className="text-xl font-black">humankind</p>
      </div>
      <div className="flex gap-1">
        <button className="py-2 px-4 font-bold hover:text-gray-500 transition">
          Art
        </button>
        <button className="py-2 px-4 font-bold hover:text-gray-500 transition">
          Collectibles
        </button>
        <button className="py-2 px-4 font-bold hover:text-gray-500 transition">
          Studios
        </button>
        <button className="py-2 px-4 font-bold hover:text-gray-500 transition">
          Community
        </button>
        <button className="py-2 px-4 font-bold hover:text-gray-500 transition">
          Subscribe
        </button>
        <button className="bg-black text-white py-2 px-7 rounded-full font-bold border-4 border-black hover:bg-red-500 hover:shadow-md hover:translate-x-0.5 hover:-translate-y-0.5 transition">
          Play now! O
        </button>
      </div>
    </div>
  );
}

export default Header;

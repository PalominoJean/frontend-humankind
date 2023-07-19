import homeImage from './../../assets/images/wallhaven-579rx1.png';
import playImage from './../../assets/images/wallhaven-3zpw5y.jpg';

function Home() {
  return (
    <div>
      <div className="w-10/12 m-auto pt-10 pb-3">
        <img src={homeImage} className="w-10/12 m-auto" alt="homeImage" />
        <p className="text-2xl mt-4">
          Creating a magical world for the kid in all of us.
        </p>
        <div className="flex justify-center gap-2 mt-8">
          <button className="py-4 px-6 rounded-full font-bold border-4 border-black hover:shadow-md hover:translate-x-0.5 hover:-translate-y-0.5 transition">
            O Get a Lunchbox
          </button>
          <button className="bg-black text-white py-4 px-6 rounded-full font-bold border-4 border-black hover:bg-red-500 hover:shadow-md hover:translate-x-0.5 hover:-translate-y-0.5 transition">
            O Play now!
          </button>
        </div>
        <p className="mt-4 ">Lunchbox burn starts on Dec 13th, 2022</p>
      </div>
      <div className="w-2/3 m-auto mt-24">
        <div className="flex  gap-3 border-4 border-black rounded-3xl p-6">
          <div className="w-1/2">
            <img src={playImage} className="rounded-lg" alt="playImage" />
          </div>
          <div className="w-1/2 text-left flex  items-center">
            <div>
              <p className="text-4xl font-black">Play Herokind!</p>
              <p className="text-xl mt-6">
                Herokind is a unique game made just for Humankind NFT
                collectors. It combines the fun of collectibles with the
                anticipation of daily adventure events.
                <br />
                <br />
                Send your Humankind collectibles to places like Tenotch Forest,
                Skull Volcano, and Cloud Island, where the environment and
                events are unpredictable and can change at any time.
              </p>
              <button className="  mt-8 bg-yellow-300 text-black py-4 px-6 rounded-full font-bold border-4  border-yellow-300 hover:border-lime-300 hover:bg-lime-300 hover:shadow-md hover:translate-x-0.5 hover:-translate-y-0.5 transition">
                O Play now!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

import homeTopImage from './../../assets/images/62d1b8e2c048c969e47514c7_hero-top-p-1600.webp';
import homeBottomImage from './../../assets/images/62d1b8e32e16f6b524514c60_hero-bottom-p-1600.webp';
import playImage from './../../assets/images/646fb24a3ad2f2ac41afd67b_herokind-adventure-lores-p-800.png';

function Home() {
  return (
    <>
      <div className="w-11/12 m-auto pt-24 pb-3">
        <img src={homeTopImage} alt="homeTopImage" />
        <img src={homeBottomImage} className="-mt-72" alt="homeBottomImage" />
        <p className="text-2xl mt-4 font-lora">
          Creating a magical world for the kid in all of us.
        </p>
        <div className="flex justify-center gap-2 mt-8">
          <button className="py-4 px-6 text-xl rounded-full font-bold border-4 border-black transition hover:shadow-md hover:translate-x-0.5 hover:-translate-y-0.5">
            🎁 Get a Lunchbox
          </button>
          <button className="bg-black text-xl text-white py-4 px-6 rounded-full font-bold border-4 border-black hover:bg-red-500 hover:shadow-md hover:translate-x-0.5 hover:-translate-y-0.5 transition">
            ⚔️ Play Now!
          </button>
        </div>
        <p className="mt-4 font-lora text-lg">
          Lunchbox burn starts on Dec 13th, 2022
        </p>
      </div>
      <div className="w-2/3 m-auto mt-28">
        <div className="flex gap-3 border-4 border-black rounded-3xl p-6 transition hover:shadow-lg">
          <div className="w-1/2">
            <img src={playImage} className="rounded-lg" alt="playImage" />
          </div>
          <div className="w-1/2 text-left flex  items-center">
            <div>
              <p className="text-4xl font-bold">Play Herokind!</p>
              <p className="text-xl mt-6 font-lora">
                Herokind is a unique game made just for Humankind NFT
                collectors. It combines the fun of collectibles with the
                anticipation of daily adventure events.
                <br />
                <br />
                Send your Humankind collectibles to places like Tenotch Forest,
                Skull Volcano, and Cloud Island, where the environment and
                events are unpredictable and can change at any time.
              </p>
              <button className="mt-8 text-xl bg-yellow-300 text-black py-4 px-6 rounded-full font-bold border-4  border-yellow-300 hover:border-lime-300 hover:bg-lime-300 hover:shadow-md hover:translate-x-0.5 hover:-translate-y-0.5 transition">
                ⚔️ Play Now!
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

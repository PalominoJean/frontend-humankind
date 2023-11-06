import homeTopImage from './../../assets/images/62d1b8e2c048c969e47514c7_hero-top-p-1600.webp';
import homeBottomImage from './../../assets/images/62d1b8e32e16f6b524514c60_hero-bottom-p-1600.webp';
import playImage from './../../assets/images/646fb24a3ad2f2ac41afd67b_herokind-adventure-lores-p-800.png';
import bringImage from './../../assets/images/63e09ea82ae9b06d12ea9b91_028-band-playing-p-800.webp';
import grabImage from './../../assets/images/63765b76de5f1356947d9d23_Lunchboxes.gif';

import nftImage from './../../assets/images/62d0eba9fd0791f1321f3463_hk-8.webp';
import Section from './components/Section';
// import
import sectionData from './../../data/section';

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

      <Section data={sectionData.wrestle} />
      <Section data={sectionData.play} />

      <div className="w-2/3 m-auto mt-28">
        <div className="flex gap-4 border-4 card-shadow border-black rounded-3xl p-6 transition ">
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
      <div className="w-2/3 m-auto mt-16">
        <div className="flex gap-4 border-4 card-shadow border-black rounded-3xl p-6 transition ">
          <div className="w-1/2">
            <img src={bringImage} className="rounded-lg" alt="bringImage" />
          </div>
          <div className="w-1/2 text-left flex  items-center">
            <div>
              <p className="text-4xl font-bold">
                Bring your ideas to life with the Humankind Fund
              </p>
              <p className="text-xl mt-6 font-lora">
                The Humankind Fund is a community-driven platform that supports
                and empowers projects that align with the values and mission of
                the Humankind brand. Join us in bringing creative ideas to life
                and making a positive impact in the world.
              </p>
              <button className="mt-8 text-xl bg-yellow-300 text-black py-4 px-6 rounded-full font-bold border-4  border-yellow-300 hover:border-lime-300 hover:bg-lime-300 hover:shadow-md hover:translate-x-0.5 hover:-translate-y-0.5 transition">
                ❤️ Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-2/3 m-auto my-16">
        <div className="flex gap-4 border-4 card-shadow border-black rounded-3xl p-6 transition ">
          <div className="w-1/2">
            <img src={grabImage} className="rounded-lg" alt="grabImage" />
          </div>
          <div className="w-1/2 text-left flex  items-center">
            <div>
              <p className="text-4xl font-bold">
                Grab your lunchbox. It will be a long journey.
              </p>
              <p className="text-xl mt-6 font-lora">
                We are delighted you’re finally joining our adventure alongside
                Maya and Dallas. It all starts with a simple and nostalgic
                object: a lunchbox. A lunchbox? What for? Well, it’s gonna be a
                long journey!
                <br />
                <br />
                Every lunchbox will unlock a Humankind on a brave quest. You’ll
                be able to claim your Kind with them. We’ve made our generative
                lunchboxes with art we’ve been creating for the last year.
              </p>
              <div className="flex items-center gap-1 mt-8">
                <button className="bg-black text-xl text-white py-4 px-6 rounded-full font-bold border-4 border-black hover:bg-red-500 hover:shadow-md hover:translate-x-0.5 hover:-translate-y-0.5 transition">
                  🌊 Get one from Opensea
                </button>
                <button className="py-4 px-6 text-xl rounded-full font-bold border-4 border-black transition hover:shadow-md hover:translate-x-0.5 hover:-translate-y-0.5">
                  🌮 Learn more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-24 pt-48 section-collectibles">
        <div className="w-2/3 m-auto ">
          <div className="p-16  border-black rounded-3xl transition bg-black text-white">
            <div className="w-2/3 w-3/4 m-auto text-center">
              <div className="flex items-center -mt-28 ml-7 max-w-3xl flex-wrap justify-center">
                <img
                  src={nftImage}
                  alt="nftImage"
                  className="rounded-full border-4 border-black w-40 -mt-7 -ml-7 hover:scale-110 transition relative"
                />
                <img
                  src={nftImage}
                  alt="nftImage"
                  className="rounded-full border-4 border-black w-40 -mt-7 -ml-7 hover:scale-110 transition relative"
                />
                <img
                  src={nftImage}
                  alt="nftImage"
                  className="rounded-full border-4 border-black w-40 -mt-7 -ml-7 hover:scale-110 transition relative"
                />
                <img
                  src={nftImage}
                  alt="nftImage"
                  className="rounded-full border-4 border-black w-40 -mt-7 -ml-7 hover:scale-110 transition relative"
                />
                <img
                  src={nftImage}
                  alt="nftImage"
                  className="rounded-full border-4 border-black w-40 -mt-7 -ml-7 hover:scale-110 transition relative"
                />
                <img
                  src={nftImage}
                  alt="nftImage"
                  className="rounded-full border-4 border-black w-40 -mt-7 -ml-7 hover:scale-110 transition relative"
                />
                <img
                  src={nftImage}
                  alt="nftImage"
                  className="rounded-full border-4 border-black w-40 -mt-7 -ml-7 hover:scale-110 transition relative"
                />
                <img
                  src={nftImage}
                  alt="nftImage"
                  className="rounded-full border-4 border-black w-40 -mt-7 -ml-7 hover:scale-110 transition relative"
                />
                <img
                  src={nftImage}
                  alt="nftImage"
                  className="rounded-full border-4 border-black w-40 -mt-7 -ml-7 hover:scale-110 transition relative"
                />
              </div>
              <p className="text-5xl font-bold mt-4">Humankind Collectibles</p>
              <p className="text-xl mt-6 font-lora">
                Back in 2022, we launched a set of diverse and unique art
                collectibles featuring the Humankind species, the most prevalent
                in The Land of Kinds.
              </p>
              <div className="flex justify-center gap-5 mt-8">
                <button className="bg-black text-xl text-white py-4 px-6 rounded-full font-bold border-4 hover:shadow-md hover:translate-x-0.5 hover:-translate-y-0.5 transition">
                  Learn More
                </button>
                <button className="bg-white text-black py-4 px-6 text-xl rounded-full font-bold border-4 border-white transition hover:shadow-md hover:translate-x-0.5 hover:-translate-y-0.5">
                  Get one from Opensea
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-multi py-28 px-5">
        <p>hola</p>
      </div>
    </>
  );
}

export default Home;

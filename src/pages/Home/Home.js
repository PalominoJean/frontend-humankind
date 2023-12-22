//data
import sectionData from './../../data/section';
//component
import Section from './components/Section';
//images
import homeTopImage from './../../assets/images/62d1b8e2c048c969e47514c7_hero-top-p-1600.webp';
import homeBottomImage from './../../assets/images/62d1b8e32e16f6b524514c60_hero-bottom-p-1600.webp';
import nftImage from './../../assets/images/62d0eba9fd0791f1321f3463_hk-8.webp';
import mechaImage from './../../assets/images/6310a4518beef1d8f521fd6a_mechaWEBbaja.gif';

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
      <div className="my-16">
        <Section data={sectionData.wrestle} />
        <Section data={sectionData.play} />
        <Section data={sectionData.ideas} />
        <Section data={sectionData.lunchbox} />
      </div>

      <div className="pb-24 pt-48 section-collectibles">
        <div className="w-2/3 m-auto ">
          <div className="p-16  border-black rounded-3xl transition bg-black text-white">
            <div className="w-3/4 m-auto text-center">
              <div className="flex items-center -mt-28 ml-7 max-w-3xl flex-wrap justify-center">
                {[...Array(9)].map((item, index) => (
                  <img
                    src={nftImage}
                    alt="nftImage"
                    className="rounded-full border-4 border-black w-40 -mt-7 -ml-7 hover:scale-110 transition relative"
                  />
                ))}
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
        <div className="flex justify-center">
          <div className="w-3/4 flex">
            <div className="w-5/12">
              <div className="bg-white px-10 py-12 text-left rounded-xl">
                <p className="text-5xl font-extrabold">
                  Art and kindness are our tools of trade
                </p>
                <p className="text-xl mt-6 font-lora">
                  Humankind is a creative force developing relatable characters
                  and epic stories for a global audience across various formats
                  powered by decentralization.
                </p>
                <button className="text-black border-black ml-2 mt-8 text-xl py-4 px-6 rounded-full font-bold border-4 hover:shadow-md hover:translate-x-0.5 hover:-translate-y-0.5 transition">
                  Learn About Us
                </button>
              </div>
            </div>
            <div className="w-7/12">
              <img src={mechaImage} alt="mechaImage" className=" w-full " />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

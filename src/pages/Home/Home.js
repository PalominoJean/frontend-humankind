//data
import sectionData from "./../../data/section";
//component
import Section from "./components/Section";
//images
import homeTopImage from "./../../assets/images/62d1b8e2c048c969e47514c7_hero-top-p-1600.webp";
import homeBottomImage from "./../../assets/images/62d1b8e32e16f6b524514c60_hero-bottom-p-1600.webp";
import nftImage from "./../../assets/images/62d0eba9fd0791f1321f3463_hk-8.webp";
import mechaImage from "./../../assets/images/6310a4518beef1d8f521fd6a_mechaWEBbaja.gif";
import designingImage from "./../../assets/images/62d769d7aeaf6503ae33a1d2_kinds.webp";
import studiosImage from "./../../assets/images/62bff77773892535e8a14d13_Studios.webp";
import artFundImage from "./../../assets/images/62bff77649a83b488feffb57_Fund.webp";
import buildingImage from "./../../assets/images/62d76a66cddf7a1a50d2a8b9_teamwork.png";

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
      <div className="py-28 px-5">
        <div className="flex justify-center">
          <div className="w-3/4 ">
            <div>
              <img
                src={designingImage}
                alt="designingImage"
                className=" w-full "
              />
            </div>
            <div className="flex justify-center text-left gap-10 mt-16">
              <div className="w-1/3">
                <div className="rounded-xl">
                  <p className="text-5xl font-extrabold">
                    Designing a universe
                  </p>
                </div>
              </div>
              <div className="w-2/4">
                <p className="text-2xl leading-10 font-lora">
                  We’re building the Humankind brand, its world, stories, and
                  characters. Our goal is to capture the hearts and minds of
                  kids and adults worldwide with epic creations, a unique
                  vision, and community-driven storytelling.
                </p>
                <button className="text-black border-black ml-2 mt-8 text-xl py-4 px-6 rounded-full font-bold border-4 hover:shadow-md hover:translate-x-0.5 hover:-translate-y-0.5 transition">
                  Discover the Art
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-black">
        <p className="text-white font-bold font-size-19vw line-height-20rem">
          stayhuman
        </p>
        <div className="flex justify-center items-center text-left gap-10 mt-16 section-stayhuman">
          <div className="grid grid-cols-2 gap-5 max-w-screen-lg">
            <div className="bg-white px-10 py-12 rounded-xl border-4 border-black duration-500 hover:bg-yellow-400">
              <img
                src={studiosImage}
                alt="studiosImage"
                className="w-28 mix-blend-multiply"
              />
              <p className="font-bold text-4xl mt-2">Humankind Studios</p>
              <p className="font-lora mt-1 ">
                A creative studio designing the stories, world, and brand of
                Humankind.
              </p>
            </div>
            <div className="bg-white px-10 py-12 rounded-xl border-4 border-black duration-500 hover:bg-yellow-400">
              <img
                src={artFundImage}
                alt="artFundImage"
                className="w-36 mix-blend-multiply"
              />
              <p className="font-bold text-4xl mt-2">Humankind Fund</p>
              <p className="font-lora mt-1 ">
                A fund that helps artists conceive their creations free of
                economic dependencies.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-10 min-heigth-851px">
        <div className="col-span-7">
          <img
            src={buildingImage}
            alt="buildingImage"
            className="w-full max-h-full"
          />
        </div>
        <div className="col-span-3 flex items-end text-left px-12 pb-10">
          <div className=" ">
            <p className="font-bold text-5xl mt-2">Building together</p>
            <p className="font-lora text-2xl mt-4">
              Our mission is to entertain and inspire people all over the globe
              through the power of art, kindness, and unique storytelling in
              web3.
            </p>
            <button className="text-black border-black ml-2 mt-8 text-xl py-4 px-6 rounded-full font-bold border-4 hover:shadow-md hover:translate-x-0.5 hover:-translate-y-0.5 transition">
              Explore Careers
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-10 min-heigth-851px">
        <div className="col-span-7">
          <img
            src={buildingImage}
            alt="buildingImage"
            className="w-full max-h-full"
          />
          <p className="font-bold text-5xl mt-2">Building together</p>
          <p className="font-lora text-2xl mt-4">
            Our mission is to entertain and inspire people all over the globe
            through the power of art, kindness, and unique storytelling in web3.
          </p>
          <button className="text-black border-black ml-2 mt-8 text-xl py-4 px-6 rounded-full font-bold border-4 hover:shadow-md hover:translate-x-0.5 hover:-translate-y-0.5 transition">
            Explore Careers
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;

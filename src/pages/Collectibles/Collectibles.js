//images
import runLeftImg from "./../../assets/images/run-run-left.png";
import runRightImg from "./../../assets/images/run-run-right.png";
import stickersImg from "./../../assets/images/stickers-website.webp";
import lunchboxesImg from "./../../assets/images/Lunchboxes.gif";
import treeImg from "./../../assets/images/Tree.webp";
import lunchboxImg from "./../../assets/images/Lunchbox.webp";
import nftImg from "./../../assets/images/hk-8.webp";
import membershipImg from "./../../assets/images/icons-membership.svg";
import diamondImg from "./../../assets/images/icons-diamond.svg";
import ipfsImg from "./../../assets/images/icons-ipfs.svg";
import utilityImg from "./../../assets/images/icons-utility.svg";
import voteImg from "./../../assets/images/icons-vote.svg";
import mapImg from "./../../assets/images/icons-world_map.svg";
import mushroomImg from "./../../assets/images/mushroom-sticker.png";
import SubFooter from "../../components/subfooter";

export default function Collectibles() {
  return (
    <>
      <div className="w-11/12 m-auto grid grid-cols-11 gap-5 mt-24 lg:w-10/12 xl:w-8/12">
        <div className="col-span-11 md:col-span-5 flex flex-col justify-center text-left items-start">
          <p className="font-semibold uppercase text-xl 2xl:text-2xl">
            HUMANKIND collectibles
          </p>
          <h1 className="text-5xl font-bold mt-2 md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
            Time for an adventure.
          </h1>
          <p className="mt-4 font-lora text-lg md:text-xl lg:text-2xl">
            After a long time of doodling we're launching our first collection.
          </p>
          <button className="py-2 px-5 w-full rounded-full font-bold border-4 transition bg-black text-white border-black mt-7 hover:bg-red-500 hover:shadow-md hover:translate-x-0.5 hover:-translate-y-0.5 md:w-auto lg:text-lg xl:mt-10  ">
            Mint Now
          </button>
        </div>
        <div className="col-span-11 md:col-span-6 relative">
          <img
            src={runLeftImg}
            alt="runLeftImg"
            className="w-full max-h-full absolute"
          />
          <img
            src={runRightImg}
            alt="runRightImg"
            className="w-full max-h-full"
          />
        </div>
      </div>
      <div className="mt-40">
        <img
          src={stickersImg}
          alt="stickersImg"
          className="h-20 md:h-24 lg:h-32 xl:h-44"
        />
      </div>
      <div className="w-11/12 m-auto grid grid-cols-11 gap-5 mt-28 lg:w-9/12 xl:w-7/12  xl:gap-8 2xl:w-6/12">
        <div className="col-span-11">
          <img
            src={lunchboxesImg}
            alt="lunchboxesImg"
            className="w-10/12 m-auto max-h-full xl:w-8/12"
          />
        </div>
        <div className="col-span-11 md:col-span-5">
          <p className="text-3xl font-bold md:text-4xl lg:text-5xl">
            Every adventure starts with a healthy meal 🖤.
          </p>
        </div>
        <div className="col-span-11 md:col-span-6">
          <p className="font-lora text-lg md:text-xl lg:text-2xl xl:leading-10 2xl:text-3xl 2xl:leading-10">
            First, you need to get a lunchbox that will serve to wake up your
            Humankind. You can only start the adventure as soon as your Kind is
            well-nourished!
          </p>
        </div>
      </div>
      <div className="w-11/12 m-auto grid grid-cols-11 gap-5 mt-28 lg:w-9/12 xl:w-7/12 xl:gap-8 xl:mt-40 2xl:w-6/12">
        <div className="col-span-11 md:col-span-5 flex flex-col justify-center items-start">
          <img
            src={lunchboxImg}
            alt="lunchboxImg"
            className="w-20 lg:w-32 max-h-full"
          />
          <p className="text-3xl font-bold mt-6 md:text-4xl lg:text-5xl ">
            Yum! Feed your kind!
          </p>
          <p className="font-lora text-lg mt-4 md:text-xl lg:text-2xl xl:leading-10">
            Since your Kind will take the lunchbox with them, you will have to
            do an exchange. Soon we will announce more details of this.
          </p>
          <button className="mt-6 text-md py-2 px-5 rounded-full font-bold border-4  sm:text-lg md:text-xl md:py-4 md:px-6 hover:shadow-md hover:translate-x-0.5 hover:-translate-y-0.5 transition bg-black text-white border-black hover:bg-red-500">
            Mint now
          </button>
        </div>
        <div className="col-span-11 md:col-span-6">
          <img src={treeImg} alt="treeImg" className="w-full max-h-full" />
        </div>
      </div>
      <div className="pb-24 pt-48 section-collectibles">
        <div className="w-11/12 m-auto md:w-10/12 lg:w-9/12 xl:w-7/12">
          <div className="border-black rounded-3xl transition bg-black text-white">
            <div className="w-11/12 m-auto text-center pb-10 md:w-10/12 lg:w-9/12 xl:pb-16">
              <div className="flex items-center m-auto flex-wrap justify-center w-11/12 pl-7 md:w-11/12 xl:w-10/12">
                {[...Array(9)].map((item, index) => (
                  <img
                    src={nftImg}
                    alt="nftImg"
                    className="rounded-full border-4 border-black w-24 -mt-7 -ml-7 hover:scale-110 transition relative sm:w-28  md:w-32 lg:w-36 xl:w-48"
                    key={index}
                  />
                ))}
              </div>
              <p className="text-3xl font-bold mt-5 md:text-4xl lg:text-5xl xl:text-6xl">
                Humankind Collectibles
              </p>
              <p className="mt-6 font-lora lg:text-lg xl:text-2xl">
                We're launching a set of diverse and unique art collectibles
                featuring the Humankind species, the most prevalent in The Land
                of Kinds.
              </p>
              <p className="text mt-6 font-lora lg:text-lg xl:text-2xl">
                Through ownership, these art pieces will unlock exclusive access
                to the Humankind world and support the LINK . Collectors will
                participate in the ongoing creation of the world, get sneak
                peeks, access to the latest products, merchandise, and
                additional benefits, including dibs on future projects like
                Creaturekind, Spiritkind, and Monsterkind.
              </p>
              <div className="grid grid-cols-2 mt-8 gap-y-10 md:grid-cols-3 xl:mt-14">
                <div className="flex flex-col items-center gap-2">
                  <img
                    src={membershipImg}
                    alt="membershipImg"
                    className="w-8 xl:w-10"
                  />
                  <p className="font-lora xl:text-xl">Community Pass</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <img
                    src={diamondImg}
                    alt="diamondImg"
                    className="w-8 xl:w-10"
                  />
                  <p className="font-lora xl:text-xl">Minted in ETH</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <img src={ipfsImg} alt="ipfsImg" className="w-8 xl:w-10" />
                  <p className="font-lora xl:text-xl">IPFS Hosted</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <img
                    src={utilityImg}
                    alt="utilityImg"
                    className="w-8 xl:w-10"
                  />
                  <p className="font-lora xl:text-xl">Benefits Unlock</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <img src={voteImg} alt="voteImg" className="w-8 xl:w-10" />
                  <p className="font-lora xl:text-xl">Community-Driven</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <img src={mapImg} alt="mapImg" className="w-8 xl:w-10" />
                  <p className="font-lora xl:text-xl">Staking Mechanism</p>
                </div>
              </div>
              <div className="mt-8 xl:mt-12">
                <button className="bg-white text-black py-4 px-6 rounded-full font-bold border-4 border-white transition hover:shadow-md hover:translate-x-0.5 hover:-translate-y-0.5 md:text-lg">
                  Mint now
                </button>
                <p className="mt-5 font-lora">View on Etherscan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black">
        <p className="text-white font-bold font-size-19vw line-height-20rem">
          stayhuman
        </p>
        <div className="flex justify-center items-center text-left gap-10 mt-16 section-stayhuman p-5">
          <div className="bg-white px-6 py-8 rounded-xl border-4 flex flex-col items-center border-black duration-500 text-center hover:bg-yellow-400 md:px-10 md:py-12">
            <img
              src={mushroomImg}
              alt="mushroomImg"
              className="w-32 mix-blend-multiply"
            />
            <p className="font-bold text-4xl mt-2 lg:text-5xl lg:mt-2 2xl:text-6xl">
              Let's hangout!
            </p>
            <p className="font-lora mt-1 text-lg lg:mt-4 2xl:text-xl">
              Stop by and say hello; we're looking to make some new friends.
            </p>
            <button className="py-3 px-6 rounded-full font-bold border-4 transition bg-black text-white border-black mt-7 hover:bg-red-500 hover:shadow-md hover:translate-x-0.5 hover:-translate-y-0.5 md:w-auto lg:text-lg lg:mt-8 ">
              Join our Discord
            </button>
          </div>
        </div>
      </div>
      <SubFooter></SubFooter>
    </>
  );
}

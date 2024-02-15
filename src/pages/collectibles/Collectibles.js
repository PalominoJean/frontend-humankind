import { motion, useTransform, useViewportScroll } from "framer-motion";
//images
import runLeftImg from "./../../assets/images/run-run-left.png";
import runRightImg from "./../../assets/images/run-run-right.png";
import stickersImg from "./../../assets/images/stickers-website.webp";
import lunchboxesImg from "./../../assets/images/Lunchboxes.gif";
import treeImg from "./../../assets/images/tree.webp";
import treeBackgroundImg from "./../../assets/images/tree-background.webp";
import lunchboxImg from "./../../assets/images/Lunchbox.webp";
import nftImg from "./../../assets/images/hk-8.webp";
import membershipImg from "./../../assets/images/icons-membership.svg";
import diamondImg from "./../../assets/images/icons-diamond.svg";
import ipfsImg from "./../../assets/images/icons-ipfs.svg";
import utilityImg from "./../../assets/images/icons-utility.svg";
import voteImg from "./../../assets/images/icons-vote.svg";
import mapImg from "./../../assets/images/icons-world_map.svg";
import mushroomImg from "./../../assets/images/mushroom-sticker.png";
//components
import SubFooter from "../../components/Subfooter";
import Button from "../../components/Button";
import SectionChildren from "../components/SectionChildren";

const sectionChildrenData = {
  title: "stayhuman",
  cards: [
    {
      image: mushroomImg,
      title: "Let's hangout!",
      text: "Stop by and say hello; we're looking to make some new friends.",
      button: <Button text="Join our Discord" type="secondary" />,
    },
  ],
};

export default function Collectibles() {
  const { scrollYProgress } = useViewportScroll();

  const yTranslate1 = useTransform(scrollYProgress, [0, 0.3], ["0%", "30%"]);
  const yTranslate2 = useTransform(
    scrollYProgress,
    [0.3, 0.6],
    ["-10%", "30%"]
  );

  const increaseScale1 = useTransform(scrollYProgress, [0, 0.5], [1, 1.4]);
  const increaseScale2 = useTransform(scrollYProgress, [0.1, 0.5], [0.9, 1.3]);
  const increaseScale3 = useTransform(scrollYProgress, [0, 1], [0.9, 1.3]);

  return (
    <>
      <div className="w-11/12 m-auto grid grid-cols-11 gap-5 py-28 lg:w-10/12 xl:w-9/12">
        <div className="col-span-11 flex flex-col gap-10 justify-center text-left items-start md:col-span-5">
          <div className="flex flex-col gap-1">
            <p className="font-semibold uppercase text-xl 2xl:text-2xl">
              HUMANKIND collectibles
            </p>
            <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
              Time for an adventure.
            </h1>
          </div>
          <p className="font-lora text-lg md:text-xl lg:text-2xl 2xl:text-3xl">
            After a long time of doodling we're launching our first collection.
          </p>
          <Button text="Mint Now" type="secondary"></Button>
        </div>
        <div className="col-span-11 md:col-span-6 relative">
          <motion.img
            alt="runLeftImg"
            className="w-full max-h-full absolute"
            src={runLeftImg}
            style={{ y: yTranslate1 }}
          />
          <img
            alt="runRightImg"
            className="w-full max-h-full"
            src={runRightImg}
          />
        </div>
      </div>
      <div>
        <motion.img
          alt="stickersImg"
          className="h-20 object-cover md:h-24 lg:h-32 xl:h-44"
          src={stickersImg}
          style={{ scale: increaseScale1 }}
        />
      </div>
      <div className="w-11/12 m-auto grid grid-cols-11 gap-5 py-28 lg:w-9/12 xl:w-7/12  xl:gap-8 2xl:w-6/12">
        <div className="col-span-11">
          <motion.img
            alt="lunchboxesImg"
            className="w-10/12 m-auto max-h-full xl:w-8/12"
            src={lunchboxesImg}
            style={{ scale: increaseScale2 }}
          />
        </div>
        <div className="col-span-11 md:col-span-5">
          <p className="text-3xl font-semibold sm:text-4xl md:text-5xl 2xl:text-6xl">
            Every adventure starts with a healthy meal 🖤.
          </p>
        </div>
        <div className="col-span-11 md:col-span-6">
          <p className="font-lora text-lg sm:text-xl md:text-2xl lg:text-2xl xl:leading-10 2xl:text-3xl">
            First, you need to get a lunchbox that will serve to wake up your
            Humankind. You can only start the adventure as soon as your Kind is
            well-nourished!
          </p>
        </div>
      </div>
      <div className="w-11/12 m-auto grid grid-cols-11 gap-5 py-28 lg:py-36 lg:w-9/12 xl:w-7/12 xl:gap-8 2xl:py-40 2xl:w-6/12">
        <div className="col-span-11 flex flex-col justify-center items-start gap-8  md:col-span-5 2xl:gap-10">
          <img
            alt="lunchboxImg"
            className="w-20 max-h-full md:w-28 lg:w-32 2xl:w-40"
            src={lunchboxImg}
          />
          <p className="text-3xl font-semibold sm:text-4xl md:text-5xl 2xl:text-6xl">
            Yum! Feed your kind!
          </p>
          <p className="font-lora text-lg sm:text-xl md:text-2xl lg:text-2xl xl:leading-10 2xl:text-3xl">
            Since your Kind will take the lunchbox with them, you will have to
            do an exchange. Soon we will announce more details of this.
          </p>
          <Button text="Mint Now" type="secondary"></Button>
        </div>
        <div className="col-span-11 flex items-center relative h-96 md:h-auto md:col-span-6">
          <motion.img
            alt="treeBackgroundImg"
            className="w-full absolute"
            src={treeBackgroundImg}
            style={{ y: yTranslate2 }}
          />
          <img alt="treeImg" className="w-full absolute" src={treeImg} />
        </div>
      </div>
      <div className="pb-24 pt-48 section-collectibles">
        <div className="w-11/12 m-auto md:w-10/12 lg:w-9/12 xl:w-8/12 2xl:w-7/12">
          <div className="border-black rounded-3xl transition bg-black text-white">
            <div className="w-11/12 m-auto text-center pb-10 md:w-10/12 lg:w-9/12 xl:pb-16">
              <motion.div
                className="flex items-center m-auto flex-wrap justify-center w-11/12 pl-7 md:w-11/12 xl:w-10/12"
                style={{ scale: increaseScale3, y: "-15%" }}
              >
                {[...Array(9)].map((item, index) => (
                  <img
                    src={nftImg}
                    alt="nftImg"
                    className="rounded-full border-4 border-black w-24 -mt-7 -ml-7 hover:scale-110 transition relative sm:w-28 md:w-32 lg:w-36 2xl:w-48"
                    key={index}
                  />
                ))}
              </motion.div>
              <p className="text-3xl font-semibold md:text-4xl lg:text-5xl 2xl:text-6xl">
                Humankind Collectibles
              </p>
              <p className="mt-6 font-lora lg:text-lg xl:text-xl 2xl:text-2xl">
                We're launching a set of diverse and unique art collectibles
                featuring the Humankind species, the most prevalent in The Land
                of Kinds.
                <br />
                <br />
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
                  <p className="font-lora xl:text-lg 2xl:text-xl">
                    Community Pass
                  </p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <img
                    src={diamondImg}
                    alt="diamondImg"
                    className="w-8 xl:w-10"
                  />
                  <p className="font-lora xl:text-lg 2xl:text-xl">
                    Minted in ETH
                  </p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <img src={ipfsImg} alt="ipfsImg" className="w-8 xl:w-10" />
                  <p className="font-lora xl:text-lg 2xl:text-xl">
                    IPFS Hosted
                  </p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <img
                    src={utilityImg}
                    alt="utilityImg"
                    className="w-8 xl:w-10"
                  />
                  <p className="font-lora xl:text-lg 2xl:text-xl">
                    Benefits Unlock
                  </p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <img src={voteImg} alt="voteImg" className="w-8 xl:w-10" />
                  <p className="font-lora xl:text-lg 2xl:text-xl">
                    Community-Driven
                  </p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <img src={mapImg} alt="mapImg" className="w-8 xl:w-10" />
                  <p className="font-lora xl:text-lg 2xl:text-xl">
                    Staking Mechanism
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center mt-8 xl:mt-12">
                <Button text="Mint Now" type="secondaryDark"></Button>
                <button className="mt-5 font-lora block border-b-2 text-lg">
                  View on Etherscan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SectionChildren data={sectionChildrenData} />
      <SubFooter />
    </>
  );
}

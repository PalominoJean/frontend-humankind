import { motion, useViewportScroll, useTransform } from "framer-motion";
//data
import sectionData from "../../data/section";
//component
import Section from "./components/Section";
import SubFooter from "../../components/Subfooter";
import Button from "../../components/Button";
import SectionChildren from "../components/SectionChildren";
//images
import homeTopImg from "./../../assets/images/hero-top-p-1600.webp";
import homeBottomImg from "./../../assets/images/hero-bottom-p-1600.webp";
import nftImg from "./../../assets/images/hk-8.webp";
import mechaImg from "./../../assets/images/mechaWEBbaja.gif";
import designingImg from "./../../assets/images/kinds.webp";
import studiosImg from "./../../assets/images/Studios.webp";
import artFundImg from "./../../assets/images/Fund.webp";
import buildingImg from "./../../assets/images/teamwork.png";
import joinImg from "./../../assets/images/your-back 1.webp";
import subfooterImg from "./../../assets/images/maya-sitting 1.webp";

const sectionChildrenData = {
  title: "stayhuman",
  cards: [
    {
      image: studiosImg,
      title: "Humankind Studios",
      text: "A creative studio designing the stories, world, and brand of Humankind.",
    },
    {
      image: artFundImg,
      title: "Humankind Fund",
      text: "A fund that helps artists conceive their creations free of economic dependencies.",
    },
  ],
};

function Home() {
  const { scrollYProgress } = useViewportScroll();

  const decreaseScale1 = useTransform(scrollYProgress, [0, 0.5], [1, 0.5]);
  const decreaseScale2 = useTransform(scrollYProgress, [0.6, 0.9], [1.5, 1]);
  const increaseScale1 = useTransform(scrollYProgress, [0, 0.5], [1, 1.5]);
  const increaseScale2 = useTransform(scrollYProgress, [0.3, 0.6], [0.9, 1.3]);
  const increaseScale3 = useTransform(scrollYProgress, [0.4, 0.8], [0.7, 1.3]);
  const increaseScale4 = useTransform(scrollYProgress, [0.8, 1], [0.7, 1.2]);
  const yTranslate1 = useTransform(
    scrollYProgress,
    [0.3, 0.6],
    ["30%", "-30%"]
  );

  return (
    <>
      <div className="m-auto pt-24 pb-3 flex flex-col md:w-11/12 lg:w-10/12 xl:w-9/12">
        <motion.img
          alt="homeTopImg"
          className="-mb-16 sm:-mb-36 md:-mb-40 lg:-mb-48 xl:-mb-52 2xl:-mb-72 transition-transform"
          src={homeTopImg}
          style={{ scale: decreaseScale1 }}
        />
        <motion.img
          alt="homeBottomImg"
          src={homeBottomImg}
          style={{ scale: increaseScale1 }}
        />
        <p className="mt-4 font-lora text-center sm:text-lg md:text-xl lg:text-2xl 2xl:text-3xl">
          Creating a magical world for the kid in all of us.
        </p>
        <div className="flex flex-col justify-center gap-3 mt-8 px-5 sm:flex-row 2xl:mt-12">
          <Button text="🎁 Get a Lunchbox" />
          <Button text="⚔️ Play Now!" type="secondary" />
        </div>
      </div>
      <div className="my-16">
        <Section data={sectionData.wrestle} key={"wrestle"} />
        <Section data={sectionData.play} key={"play"} />
        <Section data={sectionData.ideas} key={"ideas"} />
        <Section data={sectionData.lunchbox} key={"lunchbox"} />
      </div>
      <div className="pb-24 pt-48 section-collectibles">
        <div className="w-11/12 m-auto md:w-10/12 lg:w-9/12 xl:w-7/12">
          <div className="border-black rounded-3xl transition bg-black text-white">
            <div className="w-11/12 m-auto text-center pb-10 md:w-10/12 lg:w-9/12 xl:pb-16">
              <motion.div
                className="flex items-center m-auto flex-wrap justify-center w-11/12 pl-7 md:w-11/12 xl:w-10/12"
                style={{ scale: increaseScale2, y: "-15%" }}
              >
                {[...Array(9)].map((item, index) => (
                  <img
                    key={index}
                    src={nftImg}
                    alt="nftImg"
                    className="rounded-full border-4 border-black w-24 -mt-7 -ml-7 hover:scale-110 transition relative sm:w-28  md:w-32 lg:w-36 xl:w-48"
                  />
                ))}
              </motion.div>
              <p className="text-3xl font-bold md:text-4xl lg:text-5xl xl:text-6xl">
                Humankind Collectibles
              </p>
              <p className="mt-6 font-lora lg:text-lg xl:text-2xl">
                Back in 2022, we launched a set of diverse and unique art
                collectibles featuring the Humankind species, the most prevalent
                in The Land of Kinds.
              </p>
              <div className="flex justify-center flex-col gap-5 mt-8 sm:flex-row">
                <Button text="Learn More" type="primaryDark" />
                <Button text="Get one from Opensea" type="secondaryDark" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-multi py-28">
        <div className="flex justify-center">
          <div className="w-11/12 lg:w-3/4 flex flex-col md:flex-row">
            <div className="w-full md:w-5/12">
              <div className="bg-white px-5  md:px-10 py-12 text-left rounded-xl">
                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold 2xl:text-7xl">
                  Art and kindness are our tools of trade
                </p>
                <p className="text-sm mt-6 font-lora md:text-xl 2xl:text-2xl 2xl:leading-9">
                  Humankind is a creative force developing relatable characters
                  and epic stories for a global audience across various formats
                  powered by decentralization.
                </p>
                <br />
                <Button text="Learn About Us" />
              </div>
            </div>
            <div className="w-full md:w-7/12">
              <motion.img
                alt="mechaImg"
                className="w-full"
                src={mechaImg}
                style={{ y: yTranslate1 }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="py-28">
        <div className="flex justify-center">
          <div className="w-11/12 lg:w-9/12 2xl:w-7/12">
            <div>
              <motion.img
                alt="designingImg"
                className="w-full"
                src={designingImg}
                style={{ scale: increaseScale3 }}
              />
            </div>
            <div className="flex flex-col md:flex-row justify-center text-left gap-5 md:gap-10 mt-16">
              <div className="w-full md:w-1/3">
                <div className="rounded-xl">
                  <p className="text-4xl font-bold lg:text-5xl 2xl:text-6xl">
                    Designing a universe
                  </p>
                </div>
              </div>
              <div className="w-full md:w-2/4">
                <p className="text-sm sm:text-xl lg:text-2xl leading-6 font-lora 2xl:text-3xl 2xl:leading-10">
                  We’re building the Humankind brand, its world, stories, and
                  characters. Our goal is to capture the hearts and minds of
                  kids and adults worldwide with epic creations, a unique
                  vision, and community-driven storytelling.
                </p>
                <br />
                <Button text="Discover the Art" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <SectionChildren data={sectionChildrenData}></SectionChildren>
      <div className="grid grid-cols-10 min-heigth-851px ">
        <div className="col-span-10 overflow-hidden flex items-center md:col-span-7 ">
          <motion.img
            alt="buildingImg"
            className="w-full max-h-full"
            src={buildingImg}
            style={{ scale: decreaseScale2 }}
          />
        </div>
        <div className="col-span-10 flex items-end text-left px-6 pb-10 md:col-span-3 md:px-12">
          <div>
            <p className="font-bold text-3xl mt-2 md:text-4xl 2xl:text-5xl">
              Building together
            </p>
            <p className="font-lora mt-4  lg:text-lg 2xl:text-2xl 2xl:leading-10">
              Our mission is to entertain and inspire people all over the globe
              through the power of art, kindness, and unique storytelling in
              web3.
            </p>
            <br />
            <Button text="Explore Careers" />
          </div>
        </div>
      </div>
      <div className="flex justify-center py-28">
        <div className="w-11/12 text-center md:w-1/3">
          <motion.img
            alt="joinImg"
            className="w-full max-h-full"
            src={joinImg}
            style={{ scale: increaseScale4 }}
          />
          <p className="font-bold text-2xl mt-10 sm:text-4xl md:text-5xl 2xl:text-6xl ">
            Join our adventure
          </p>
          <p className="font-lora text-sm sm:text-md md:text-xl mt-4 2xl:text-2xl 2xl:leading-9">
            Despite the many evil forces in the world, there is hope. We can
            still make a positive difference through art and community. We’re
            looking for other geeks, punks, and freaks like us who believe in
            the power of storytelling to be a part of our quest.
          </p>
          <br />
          <Button text="👾 Join our Discord" type="secondary" />
        </div>
      </div>
      <SubFooter image={subfooterImg}></SubFooter>
    </>
  );
}

export default Home;

import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
//data
import sectionData from "./../../data/section";
//component
import Section from "./components/Section";
import SubFooter from "../../components/Subfooter";
import Button from "../../components/Button";
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

const variants = {
  visible: { scale: 1, transition: { duration: 0.5 } },
  hidden: { scale: 0.9 },
};

const variants2 = {
  visible: { scale: 1.1, transition: { duration: 0.5 } },
  hidden: { scale: 1 },
};

const variantsReverse = {
  visible: { scale: 1, transition: { duration: 0.5 } },
  hidden: { scale: 1.1 },
};

function Home() {
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const controls4 = useAnimation();
  const controls5 = useAnimation();
  const controls6 = useAnimation();
  const controls7 = useAnimation();
  const controls8 = useAnimation();

  const [ref1, inView1] = useInView();
  const [ref2, inView2] = useInView();
  const [ref3, inView3] = useInView();
  const [ref4, inView4] = useInView();
  const [ref5, inView5] = useInView();
  const [ref6, inView6] = useInView();
  const [ref7, inView7] = useInView();
  const [ref8, inView8] = useInView();

  useEffect(() => {
    controls1.start(inView1 ? "visible" : "hidden");
    controls2.start(inView2 ? "visible" : "hidden");
    controls3.start(inView3 ? "visible" : "hidden");
    controls4.start(inView4 ? "visible" : "hidden");
    controls5.start(inView5 ? "visible" : "hidden");
    controls6.start(inView6 ? "visible" : "hidden");
    controls7.start(inView7 ? "visible" : "hidden");
    controls8.start(inView8 ? "visible" : "hidden");
  }, [
    controls1,
    controls2,
    controls3,
    controls4,
    controls5,
    controls6,
    controls7,
    controls8,
    inView1,
    inView2,
    inView3,
    inView4,
    inView5,
    inView6,
    inView7,
    inView8,
  ]);

  return (
    <>
      <div className="m-auto pt-24 pb-3 flex flex-col md:w-11/12 lg:w-10/12 xl:w-9/12">
        <motion.img
          ref={ref1}
          animate={controls1}
          initial="hidden"
          variants={variants}
          src={homeTopImg}
          alt="homeTopImg"
          className="-mb-20 sm:-mb-32 md:-mb-36 lg:-mb-44 xl:-mb-52 2xl:-mb-72 transition-transform"
        />
        <motion.img
          ref={ref2}
          animate={controls2}
          initial="hidden"
          variants={variantsReverse}
          src={homeBottomImg}
          alt="homeBottomImg"
        />
        <p className="mt-4 font-lora text-center sm:text-lg md:text-xl lg:text-2xl 2xl:text-3xl">
          Creating a magical world for the kid in all of us.
        </p>
        <div className="flex flex-col justify-center gap-3 mt-8 px-5 sm:flex-row 2xl:mt-12">
          <Button text={"🎁 Get a Lunchbox"} />
          <Button text={"⚔️ Play Now!"} type={"btn-secondary"} />
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
                ref={ref3}
                animate={controls3}
                initial="hidden"
                variants={variants}
                className="flex items-center m-auto flex-wrap justify-center w-11/12 pl-7 md:w-11/12 xl:w-10/12"
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
              <p className="text-3xl font-bold mt-5 md:text-4xl lg:text-5xl xl:text-6xl">
                Humankind Collectibles
              </p>
              <p className="mt-6 font-lora lg:text-lg xl:text-2xl">
                Back in 2022, we launched a set of diverse and unique art
                collectibles featuring the Humankind species, the most prevalent
                in The Land of Kinds.
              </p>
              <div className="flex justify-center flex-col gap-5 mt-8 sm:flex-row">
                <Button text="Learn More" type="btn-primary-dark" />
                <Button text="Get one from Opensea" type="btn-secondary-dark" />
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
                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold 2xl:text-7xl">
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
                ref={ref4}
                animate={controls4}
                initial="hidden"
                variants={variants}
                src={mechaImg}
                alt="mechaImg"
                className="w-full"
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
                ref={ref5}
                animate={controls5}
                initial="hidden"
                variants={variants}
                src={designingImg}
                alt="designingImg"
                className="w-full"
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
      <div className="bg-black h-120vh flex justify-center items-center  mt-16 relative overflow-hidden">
        <div className="grid grid-cols-2 gap-5 max-w-screen-lg z-10  px-3 2xl:max-w-screen-xl ">
          <div className="flex flex-col items-center col-span-2 sm:col-span-1 text-center bg-white px-10 py-12 rounded-xl border-4 border-black duration-500 hover:bg-yellow-400 md:items-start md:text-left 2xl:px-16 2xl:py-16">
            <img
              src={studiosImg}
              alt="studiosImg"
              className="w-28 mix-blend-multiply 2xl:w-32"
            />
            <p className="font-bold text-2xl md:text-4xl mt-2 2xl:text-5xl">
              Humankind Studios
            </p>
            <p className="font-lora mt-1 text-sm md:text-md lg:text-lg 2xl:text-xl">
              A creative studio designing the stories, world, and brand of
              Humankind.
            </p>
          </div>
          <div className="flex flex-col items-center col-span-2 sm:col-span-1 text-center bg-white px-10 py-12 rounded-xl border-4 border-black duration-500 hover:bg-yellow-400 md:items-start md:text-left 2xl:px-16 2xl:py-16">
            <img
              src={artFundImg}
              alt="artFundImg"
              className="w-36 mix-blend-multiply 2xl:w-44"
            />
            <p className="font-bold text-2xl mt-2 md:text-4xl 2xl:text-5xl">
              Humankind Fund
            </p>
            <p className="font-lora mt-1 text-sm md:text-md lg:text-lg 2xl:text-xl">
              A fund that helps artists conceive their creations free of
              economic dependencies.
            </p>
          </div>
        </div>
        <p className="text-white font-bold font-size-21vw line-height-20rem absolute leading-none -top-2 sm:-top-3 md:-top-6 lg:-top-9 xl:-top-12 2xl:-top-16">
          stayhuman
        </p>
        <motion.div
          ref={ref6}
          animate={controls6}
          initial="hidden"
          variants={variants2}
          className="section-stayhuman absolute w-full h-105vh bottom-0"
        ></motion.div>
      </div>
      <div className="grid grid-cols-10 min-heigth-851px ">
        <div className="col-span-10 overflow-hidden flex items-center md:col-span-7 ">
          <motion.img
            ref={ref7}
            animate={controls7}
            initial="hidden"
            variants={variants2}
            src={buildingImg}
            alt="buildingImg"
            className="w-full max-h-full"
          />
        </div>
        <div className="col-span-10 flex items-end text-left px-6 pb-10 md:col-span-3 md:px-12">
          <div>
            <p className="font-bold text-3xl mt-2 md:text-4xl 2xl:text-5xl">
              Building together
            </p>
            <p className="font-lora mt-4 md:text-md lg:text-lg 2xl:text-xl 2xl:leading-10">
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
            ref={ref8}
            animate={controls8}
            initial="hidden"
            variants={variants}
            src={joinImg}
            alt="joinImg"
            className="w-full max-h-full"
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
          <Button text="👾 Join our Discord" type="btn-secondary" />
        </div>
      </div>
      <SubFooter image={subfooterImg}></SubFooter>
    </>
  );
}

export default Home;

//data
import sectionData from "./../../data/section";
//component
import Section from "./components/Section";
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
import mayaSittingImg from "./../../assets/images/maya-sitting 1.webp";
import discordImg from "./../../assets/images/discord.svg";
import twiterImg from "./../../assets/images/twitter_squared.svg";
import instagramImg from "./../../assets/images/icons8-instagram.svg";
import linkedinImg from "./../../assets/images/icons8-linkedin.svg";
import openSeaImg from "./../../assets/images/OpenSea.svg";
import { useState } from "react";
import { useEffect } from "react";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
  const controls = useAnimation();
  // const [ref, inView] = useInView();
  const [ref1, inView1] = useInView();
  const [ref2, inView2] = useInView();
  const [ref3, inView3] = useInView();
  const [ref4, inView4] = useInView();
  const [ref5, inView5] = useInView();
  const [ref6, inView6] = useInView();
  const [ref7, inView7] = useInView();
  const [ref8, inView8] = useInView();

  const [testHeight, setTestHeight] = useState(10);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setTestHeight(scrollTop);
      // console.log(scrollTop);
    };
    // console.log(inView);
    controls.start(inView1 ? "visible" : "hidden");
    controls.start(inView2 ? "visible" : "hidden");
    controls.start(inView3 ? "visible" : "hidden");
    controls.start(inView4 ? "visible" : "hidden");
    controls.start(inView5 ? "visible" : "hidden");
    controls.start(inView6 ? "visible" : "hidden");
    controls.start(inView7 ? "visible" : "hidden");
    controls.start(inView8 ? "visible" : "hidden");

    window.addEventListener("scroll", handleScroll);
    // return () => {};
  }, [
    controls,
    inView1,
    inView2,
    inView3,
    inView4,
    inView5,
    inView6,
    inView7,
    inView8,
  ]);

  const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  // let scrollVal = window.scrollY;
  // const demoDiv = document.querySelector("#demo");
  // console.log(demoDiv, "demoDiv");
  // var demoDiv2 = document.getElementById("demo");
  // console.log(demoDiv2, "demoDiv2");

  // window.addEventListener("scroll", function () {
  //   console.log(scrollVal, "scrolVal");
  //   // if (scrollVal * 0.0001 > 1 || scrollVal * 0.0001 < 0.2) {
  //   //   console.log("em function 1");
  //   //   return;
  //   // } else {
  //   //   console.log(" en fucnion 2");
  //   //   demoDiv.setAttribute(
  //   //     "style",
  //   //     "transform: scale(" + scrollVal * 0.0001 + ");"
  //   //   );
  //   // }
  // });
  // function changeWidth() {
  //   console.log("en fucntion");
  //   var scrollVal = window.scrollY;
  //   var scrollSlow = scrollVal / 4;
  //   //Changing CSS Width
  //   // demoDiv.style.width = Math.min(Math.max(scrollSlow, 20), 100) + "%";
  //   demoDiv.setAttribute(
  //     "style",
  //     `width: ${Math.min(Math.max(scrollSlow, 20), 100) + "%"};`
  //   );
  // }

  // window.addEventListener(
  //   "scroll",
  //   function () {
  //     requestAnimationFrame(changeWidth);
  //   },
  //   false
  // );

  return (
    <>
      <div className="m-auto pt-24 pb-3 flex flex-col md:w-11/12 lg:w-10/12 xl:w-9/12">
        <motion.img
          ref={ref1}
          animate={controls}
          initial="hidden"
          variants={variants}
          src={homeTopImg}
          alt="homeTopImg"
          className="-mb-20 sm:-mb-32 md:-mb-36 lg:-mb-44 xl:-mb-52 2xl:-mb-72 transition-transform"
        />
        {/* style={{ transform: `scale(1.${testHeight})` }} */}
        <motion.img
          ref={ref2}
          animate={controls}
          initial="hidden"
          variants={variantsReverse}
          src={homeBottomImg}
          alt="homeBottomImg"
        />
        {/* <img src={homeBottomImg} alt="homeBottomImg" /> */}
        <p className="text-xl mt-4 font-lora text-center md:text-2xl 2xl:text-3xl">
          Creating a magical world for the kid in all of us.
        </p>
        <div className="flex flex-col justify-center gap-3 mt-8 px-5 sm:flex-row 2xl:mt-12">
          <button className="py-4 px-6 rounded-full font-bold border-4 border-black transition hover:shadow-md hover:translate-x-0.5 hover:-translate-y-0.5 md:text-lg 2xl:text-2xl">
            🎁 Get a Lunchbox
          </button>
          <button className="bg-black text-white py-4 px-6 rounded-full font-bold border-4 border-black hover:bg-red-500 hover:shadow-md hover:translate-x-0.5 hover:-translate-y-0.5 transition md:text-lg 2xl:text-2xl">
            ⚔️ Play Now!
          </button>
        </div>
      </div>
      <div className="my-16">
        <Section data={sectionData.wrestle} key={"wrestle"} />
        <Section data={sectionData.play} key={"play"} />
        <Section data={sectionData.ideas} key={"ideas"} />
        <Section data={sectionData.lunchbox} key={"lunchbox"} />
      </div>
      {/* <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={variants}
      >
        <p className="text-4xl font-black text-center">Hola</p>
      </motion.div> */}
      <div className="pb-24 pt-48 section-collectibles">
        <div className="w-11/12 m-auto md:w-10/12 lg:w-9/12 xl:w-7/12">
          <div className="border-black rounded-3xl transition bg-black text-white">
            <div className="w-11/12 m-auto text-center pb-10 md:w-10/12 lg:w-9/12 xl:pb-16">
              <motion.div
                ref={ref3}
                animate={controls}
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
              <div className="flex justify-center gap-5 mt-8">
                <button className="bg-black text-xl text-white py-4 px-6 rounded-full font-bold border-4 hover:shadow-md hover:translate-x-0.5 hover:-translate-y-0.5 transition xl:text-xl 2xl:text-2xl">
                  Learn More
                </button>
                <button className="bg-white text-black py-4 px-6 text-xl rounded-full font-bold border-4 border-white transition hover:shadow-md hover:translate-x-0.5 hover:-translate-y-0.5 xl:text-xl 2xl:text-2xl">
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
                <p className="text-5xl font-extrabold 2xl:text-7xl">
                  Art and kindness are our tools of trade
                </p>
                <p className="text-xl mt-6 font-lora 2xl:text-2xl 2xl:leading-9">
                  Humankind is a creative force developing relatable characters
                  and epic stories for a global audience across various formats
                  powered by decentralization.
                </p>
                <button className="text-black border-black ml-2 mt-8 text-xl py-4 px-6 rounded-full font-bold border-4 hover:shadow-md hover:translate-x-0.5 hover:-translate-y-0.5 transition xl:text-xl 2xl:text-2xl">
                  Learn About Us
                </button>
              </div>
            </div>
            <div className="w-7/12">
              <motion.img
                ref={ref4}
                animate={controls}
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
      <div className="py-28 px-5">
        <div className="flex justify-center">
          <div className="w-3/4 2xl:w-7/12">
            <div>
              <motion.img
                ref={ref5}
                animate={controls}
                initial="hidden"
                variants={variants}
                src={designingImg}
                alt="designingImg"
                className="w-full"
              />
            </div>
            <div className="flex justify-center text-left gap-10 mt-16">
              <div className="w-1/3">
                <div className="rounded-xl">
                  <p className="text-5xl font-bold 2xl:text-6xl">
                    Designing a universe
                  </p>
                </div>
              </div>
              <div className="w-2/4">
                <p className="text-2xl leading-10 font-lora 2xl:text-3xl 2xl:leading-10">
                  We’re building the Humankind brand, its world, stories, and
                  characters. Our goal is to capture the hearts and minds of
                  kids and adults worldwide with epic creations, a unique
                  vision, and community-driven storytelling.
                </p>
                <button className="text-black border-black ml-2 mt-8 text-xl py-4 px-6 rounded-full font-bold border-4 hover:shadow-md hover:translate-x-0.5 hover:-translate-y-0.5 transition xl:text-xl 2xl:text-2xl">
                  Discover the Art
                </button>
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
          animate={controls}
          initial="hidden"
          variants={variants2}
          className="section-stayhuman absolute w-full h-105vh bottom-0"
        ></motion.div>
      </div>
      <div className="grid grid-cols-10 min-heigth-851px ">
        <div className="col-span-10 overflow-hidden flex items-center md:col-span-7 ">
          <motion.img
            ref={ref7}
            animate={controls}
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
            <button className="text-black border-black mt-8 py-2 px-5 rounded-full font-bold border-4 transition hover:shadow-md hover:translate-x-0.5 hover:-translate-y-0.5 lg:text-lg xl:py-3 xl:px-7">
              Explore Careers
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-28">
        <div className="w-11/12 text-center md:w-1/3">
          <motion.img
            ref={ref8}
            animate={controls}
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
          <button className="mt-6 py-2 px-5 rounded-full font-bold border-4 transition bg-black text-white border-black hover:shadow-md hover:translate-x-0.5 hover:-translate-y-0.5  hover:bg-red-500 lg:text-lg xl:py-3 xl:px-7">
            👾 Join our Discord
          </button>
        </div>
      </div>
      <div className="flex justify-center py-28">
        <div className="w-4/5 grid grid-cols-7 2xl:w-8/12">
          <div className="col-span-3 text-left flex items-center">
            <div>
              <p className="font-bold text-6xl mt-10 2xl:text-7xl">Humankind</p>
              <p className="font-lora text-xl 2xl:text-2xl">
                stay human. be kind.
              </p>
              <div className="mt-8 flex gap-6">
                <img src={discordImg} alt="discordImg" className="w-8" />
                <img src={twiterImg} alt="twiterImg" className="w-8" />
                <img src={instagramImg} alt="instagramImg" className="w-8" />
                <img src={linkedinImg} alt="linkedinImg" className="w-8" />
                <img src={openSeaImg} alt="openSeaImg" className="w-8" />
              </div>
              <div>
                <button className="mt-6 text-lg py-2 px-5 rounded-full font-bold border-4 hover:shadow-md hover:translate-x-0.5 hover:-translate-y-0.5 transition bg-black text-white border-black hover:bg-red-500 xl:text-xl ">
                  ⚔️ Play Now!
                </button>
                <button className="text-black border-black ml-2 mt-6 text-lg py-2 px-5 rounded-full font-bold border-4 hover:shadow-md hover:translate-x-0.5 hover:-translate-y-0.5 transition xl:text-xl ">
                  👾 Join our Discord
                </button>
              </div>
              <p className="mt-10 font-lora text-sm 2xl:text-md">
                Humankind Industries Inc. 2023
              </p>
            </div>
          </div>
          <div className="col-span-4">
            <img
              src={mayaSittingImg}
              alt="mayaSittingImg"
              className="w-full max-h-full"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

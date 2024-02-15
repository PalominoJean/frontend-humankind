import { motion, useTransform, useViewportScroll } from "framer-motion";
//images
import studios1Img from "./../../assets/images/studios-1.png";
import studios2Img from "./../../assets/images/studios-2.png";
import sleepyTimeImg from "./../../assets/images/sleepy-time.png";
import mayaImg from "./../../assets/images/Maya.webp";
import beKindImg from "./../../assets/images/be-kind 1.webp";
import tunTunImg from "./../../assets/images/tun-tun.webp";
import subfooterImg from "./../../assets/images/gummy-doodle-p-1600.webp";
//components
import SubFooter from "../../components/Subfooter";

export default function Studios() {
  const { scrollYProgress } = useViewportScroll();

  const yTranslate1 = useTransform(scrollYProgress, [0, 0.3], ["0%", "-20%"]);
  const yTranslate2 = useTransform(scrollYProgress, [0, 0.3], ["0%", "-20%"]);
  const xTranslate1 = useTransform(scrollYProgress, [0.2, 0.6], ["0%", "-30%"]);
  const decreaseScale1 = useTransform(scrollYProgress, [0, 0.3], [1.1, 0.9]);
  const decreaseScale2 = useTransform(scrollYProgress, [0, 0.4], [1.1, 1]);
  const decreaseScale3 = useTransform(scrollYProgress, [0.5, 1], [1.2, 1]);
  const increaseScale1 = useTransform(scrollYProgress, [0.5, 0.8], [0.8, 1]);
  return (
    <>
      <div className="w-11/12 m-auto grid grid-cols-11 gap-5 py-24 lg:w-10/12 xl:w-8/12 xl:py-32">
        <motion.div
          className="col-span-11 md:col-span-5 flex flex-col justify-center text-left items-start"
          style={{ y: yTranslate1 }}
        >
          <p className="font-semibold uppercase text-xl 2xl:text-2xl">
            HUMANKIND studios
          </p>
          <h1 className="text-5xl font-bold mt-2 md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
            Doodles have feelings too.
          </h1>
          <p className="mt-4 font-lora text-lg md:text-xl lg:text-2xl">
            We’re building the journey in an enchanting world that lets people
            recapture their sense of wonder.
          </p>
        </motion.div>
        <div className="col-span-11 md:col-span-6 relative">
          <motion.img
            src={studios1Img}
            alt="studios1Img"
            className="w-full max-h-full absolute"
            style={{ y: yTranslate2, scale: decreaseScale1 }}
          />
          <img
            src={studios2Img}
            alt="studios2Img"
            className="w-full max-h-full"
          />
        </div>
      </div>
      <div className="relative overflow-hidden flex items-center h-[50rem] md:h-[65rem] lg:h-[70rem] xl:h-[75rem] 2xl:h-[80rem]">
        <motion.img
          src={sleepyTimeImg}
          alt="sleepyTimeImg"
          className="h-full absolute sm:w-full sm:h-auto"
          style={{ scale: decreaseScale2 }}
        />
        <div className="w-11/12 m-auto z-10 relative flex justify-center">
          <div className="bg-black p-9 text-white rounded-3xl my-12 max-w-3xl sm:p-14">
            <p className="text-3xl font-semibold md:text-4xl xl:text-5xl 2xl:text-6xl">
              Building an expansive world
            </p>
            <p className="font-lora mt-5 md:text-lg xl:text-xl 2xl:text-2xl">
              Humankind Studios is a creative force led by Pablo Stanley,
              building the Humankind brand, its world, stories, and characters.
              Our goal is to capture the hearts and minds of kids and adults
              worldwide with a unique vision of community-driven storytelling.{" "}
              <br /> <br />
              Everyone is invited to participate.
            </p>
          </div>
        </div>
      </div>
      <div className="my-14 overflow-hidden lg:my-28">
        <p className="text-center font-semibold text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl">
          Behind every brushstroke, there’s a story.
        </p>
        <motion.div className="flex" style={{ x: xTranslate1 }}>
          <img src={mayaImg} alt="mayaImg" className="w-full max-h-full mt-5" />
          <img src={mayaImg} alt="mayaImg" className="w-full max-h-full mt-5" />
        </motion.div>
      </div>
      <div className="w-11/12 m-auto my-20 lg:max-w-6xl xl:max-w-7xl">
        <div>
          <motion.img
            src={beKindImg}
            alt="beKindImg"
            className="w-full max-h-full mt-5"
            style={{ scale: increaseScale1 }}
          />
        </div>
        <div className="flex flex-col mt-8 gap-4 sm:flex-row ">
          <p className="font-semibold text-4xl sm:w-6/12 md:text-5xl xl:text-6xl">
            Join the fellowship
          </p>
          <div className="sm:w-6/12">
            <p className="font-lora  md:text-xl lg:text-2xl 2xl:text-3xl">
              Humankind is creating relatable characters and epic stories of
              well-meaning monsters. Their journey includes a group of friends
              that always find a way, a former captain gone rogue, creatures and
              spirits joining forces, and many more.
            </p>
            <button className="mt-5 text-xl py-4 px-6 rounded-full font-bold border-4 transition bg-black text-white border-black hover:bg-red-500 hover:shadow-md hover:translate-x-0.5 hover:-translate-y-0.5 lg:text-lg xl:py-3 xl:px-7 2xl:mt-16 2xl:px-8 2xl:py-5 2xl:text-2xl">
              Explore Careers
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12">
        <div className="col-span-12 relative md:col-span-6">
          <motion.img
            src={tunTunImg}
            alt="tunTunImg"
            className="w-full"
            style={{ scale: decreaseScale3 }}
          />
        </div>
        <div className="col-span-12 bg-black  text-white py-10  flex items-center md:col-span-6 ">
          <div className="w-10/12 m-auto md:w-9/12 2xl:w-6/12 ">
            <p className="text-4xl font-semibold 2xl:text-6xl">
              Let's conquer new worlds together
            </p>
            <p className="mt-4 font-lora text-lg leading-6 md:text-xl lg:text-2xl 2xl:text-3xl 2xl:leading-normal">
              If you want to invest in Humankind, collaborate on a project,
              obtain a license for one of the characters, or begin a
              partnership, let’s chat!
            </p>
            <button className="mt-5 bg-white text-black border-white py-2 px-5 rounded-full font-bold border-4 transition hover:shadow-md hover:translate-x-0.5 hover:-translate-y-0.5 lg:text-lg 2xl:mt-16 2xl:px-8 2xl:py-5 2xl:text-2xl">
              Apply to Humankind
            </button>
          </div>
        </div>
      </div>
      <SubFooter image={subfooterImg}></SubFooter>
    </>
  );
}

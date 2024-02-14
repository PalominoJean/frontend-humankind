import { useEffect, useState } from "react";
import {
  useAnimation,
  motion,
  useViewportScroll,
  useTransform,
} from "framer-motion";
import { useInView } from "react-intersection-observer";
//images
import uCool1Img from "./../../assets/images/u-cool-1.webp";
import uCool2Img from "./../../assets/images/u-cool-2.webp";
import cityBgImg from "./../../assets/images/city-bg.png";
import cityTopImg from "./../../assets/images/city-top-p-1600.webp";
import squad62Img from "./../../assets/images/squad62.png";
import squad12Img from "./../../assets/images/squad12.png";
import squad163Img from "./../../assets/images/squad163.png";
import squad195Img from "./../../assets/images/squad195.png";
import squad46Img from "./../../assets/images/squad46.png";
import pabsImg from "./../../assets/images/pabs-humankind-bw 1-p-500.webp";
import iconImg from "./../../assets/images/icon.svg";
import vector1Img from "./../../assets/images/Vector-1.webp";
import vector2Img from "./../../assets/images/Vector-2.webp";
import vector3Img from "./../../assets/images/Vector-3.webp";
import vector4Img from "./../../assets/images/Vector-4.webp";
import vector5Img from "./../../assets/images/Vector-5.webp";
import subfooterImg from "./../../assets/images/gummies-and-dallas-p-500.webp";
//components
import SubFooter from "../../components/Subfooter";
import Button from "../../components/Button";

const squad = [
  { image: squad62Img, name: "Pabs", work: "Artist" },
  { image: squad12Img, name: "Marian", work: "Media" },
  { image: squad163Img, name: "Bueno", work: "Dev & Ops" },
  { image: squad195Img, name: "Adam", work: "Artist" },
  { image: squad46Img, name: "Maya Draisin", work: "Brand Advisor" },
];
const variantsIncrease = {
  visible: { scale: 1, transition: { duration: 0.5 } },
  hidden: { scale: 0.9 },
};
const variantsIncrease2 = {
  visible: { scale: 1.1, transition: { duration: 0.5 } },
  hidden: { scale: 1 },
};
const variantsDecrease = {
  visible: { scale: 1, transition: { duration: 0.5 } },
  hidden: { scale: 1.1 },
};
const variantsDecrease2 = {
  visible: { scale: 1, transition: { duration: 0.5 } },
  hidden: { scale: 1.2 },
};

export default function About() {
  const [showResume, setShowResume] = useState(false);

  const { scrollYProgress } = useViewportScroll();

  const scaleAnim = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  const yPosAnim = useTransform(scrollYProgress, [0.3, 0.6], ["0%", "-30%"]);

  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const controls4 = useAnimation();
  const controls5 = useAnimation();
  const controls6 = useAnimation();
  const controls7 = useAnimation();

  const [ref1, inView1] = useInView();
  const [ref2, inView2] = useInView();
  const [ref3, inView3] = useInView();
  const [ref4, inView4] = useInView();
  const [ref5, inView5] = useInView();
  const [ref6, inView6] = useInView();
  const [ref7, inView7] = useInView();

  // let scaleTest = inView5 ? scale : 0;

  useEffect(() => {
    // console.log(scrollYProgress, scale);
    // scale = getScale();
    // console.log(scaleTest);

    controls1.start(inView1 ? "visible" : "hidden");
    controls2.start(inView2 ? "visible" : "hidden");
    controls3.start(inView3 ? "visible" : "hidden");
    controls4.start(inView4 ? "visible" : "hidden");
    controls5.start(inView5 ? "visible" : "hidden");
    controls6.start(inView6 ? "visible" : "hidden");
    controls7.start(inView7 ? "visible" : "hidden");
  }, [
    controls1,
    controls2,
    controls3,
    controls4,
    controls5,
    controls6,
    controls7,
    inView1,
    inView2,
    inView3,
    inView4,
    inView5,
    inView6,
    inView7,
  ]);

  const handleSetShowMenu = () => {
    setShowResume(!showResume);
  };

  return (
    <>
      <div className="w-11/12 m-auto grid grid-cols-11 gap-5 py-24 lg:w-10/12 xl:w-8/12 xl:py-40">
        <div className="col-span-11 md:col-span-6 relative">
          <motion.img
            ref={ref1}
            animate={controls1}
            initial="hidden"
            variants={variantsIncrease}
            src={uCool1Img}
            alt="uCool1Img"
            className="w-full "
          />
          <motion.img
            ref={ref2}
            animate={controls2}
            initial="hidden"
            variants={variantsDecrease}
            src={uCool2Img}
            alt="uCool2Img"
            className="w-full absolute top-0"
          />
        </div>
        <div className="col-span-11 md:col-span-5 flex flex-col justify-center text-left items-start">
          <p className="font-semibold uppercase text-xl 2xl:text-2xl">About</p>
          <h1 className="text-5xl font-bold mt-2 md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
            Stay human. <br />
            Be kind.
          </h1>
          <p className="mt-4 font-lora text-lg md:text-xl lg:text-2xl 2xl:text-3xl">
            We believe art and storytelling can change us and the world around
            us.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-12">
        <div className="col-span-12 relative md:col-span-6">
          <motion.img
            ref={ref3}
            animate={controls3}
            initial="hidden"
            variants={variantsDecrease}
            src={cityBgImg}
            alt="cityBgImg"
            className="w-full"
          />
          <motion.img
            ref={ref4}
            animate={controls4}
            initial="hidden"
            variants={variantsIncrease}
            src={cityTopImg}
            alt="cityTopImg"
            className="w-full absolute top-0"
          />
        </div>
        <div className="col-span-12 bg-black  text-white py-10  flex items-center md:col-span-6 ">
          <div className="w-10/12 m-auto md:w-9/12 2xl:w-6/12 ">
            <p className="text-4xl font-semibold 2xl:text-6xl">
              What is Humankind?
            </p>
            <p className="mt-4 font-lora text-lg leading-6 md:text-xl lg:text-2xl 2xl:text-3xl 2xl:leading-normal">
              Humankind is a creative team led by Pablo Stanley dedicated to
              capturing the hearts and minds of kids and adults worldwide with
              charming creations, a unique vision, and decentralized
              storytelling.
            </p>
          </div>
        </div>
      </div>
      <div className="section-teamkind relative overflow-hidden">
        <motion.div style={{ scaleAnim }}></motion.div>
        <motion.p
          style={{ y: yPosAnim }}
          className="uppercase font-black	text-white absolute bottom-0"
        >
          TEAMKIND BESTKIND
        </motion.p>
      </div>
      <div className="w-6/12 m-auto py-24 md:w-8/12 lg:w-10/12 xl:py-32 xl:w-9/12 2xl:w-8/12">
        <p className="text-center font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
          The Squad
        </p>
        <div className="flex flex-wrap  mt-5 justify-center">
          {squad.map(({ image, name, work }) => {
            return (
              <div
                key={name}
                className="w-full text-center sm:w-6/12 md:w-4/12 lg:w-3/12 2xl:w-2/12"
              >
                <img src={image} alt="squad62Img" className=" w-full" />
                <p className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl">
                  {name}
                </p>
                <p className="font-lora md:text-lg xl:text-xl 2xl:text-2xl">
                  {work}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex justify-center px-5 py-5 sm:px-10 sm:py-10 md:px-14 md:py-24">
        <div className="bg-black text-white pb-10 px-5 rounded-3xl text-center flex flex-col items-center max-w-3xl gap-6 sm:px-10 md:px-16">
          <img
            src={pabsImg}
            alt="pabsImg"
            className="w-40 rounded-full border-4 border-black -mt-10 md:-mt-16 lg:w-52"
          />
          <p className="text-3xl font-semibold sm:text-4xl lg:text-5xl 2xl:text-6xl">
            Who is Pablo Stanley?
          </p>
          <p className="font-lora lg:text-lg 2xl:text-xl">
            Pablo Stanley is a passion-driven artist, co-founder, and CEO of
            Bueno, creator of <strong>iconic NFT collections</strong>, and one
            of the most influential forces in the illustration world. He's
            behind open-source illustrations used by millions of people
            worldwide like
            <strong>
              Humaaans, Open Peeps, Avataaars, Open Doodles, Buttts,{" "}
            </strong>
            and <strong>Bottts</strong>.
            <span className={`${showResume ? "block" : "hidden"}`}>
              His life purpose is to fill the world with doodles. This dream has
              led him to develop two ambitious projects: a children's animated
              show with TIME Studios and Bueno, a no-code platform for NFT
              artists. <br /> <br /> Through his evolution as a designer,
              entrepreneur, and artist, Pablo has found ways to empower other
              creators by sharing his process with tutorials on his youtube
              channel, Sketch Together, and by giving talks, workshops, and
              conferences worldwide. In his free time, he sketches silly comics.
              He has been inspiring a whole generation of creators through these
              mediums of expression. <br /> <br /> Pablo believes that art and
              storytelling are the mightiest weapons. With Humankind, he strives
              to support artistic and passionate souls to live from what they do
              best: creating and sharing their talent with humanity.
            </span>
          </p>
          <button
            className="text-xl font-lora text-gray-500"
            onClick={() => handleSetShowMenu()}
          >
            Read {showResume ? "Less ↑" : "More ↓"}
          </button>
          <Button text="Say hi on Twitter" type="primaryDark" />
        </div>
      </div>
      <div className="bg-black flex flex-col items-center px-5 py-10 sm:px-10 md:px-14 md:py-24 xl:py-36">
        <div className="max-w-3xl">
          <div className=" text-white text-center flex flex-col items-center">
            <img src={iconImg} alt="iconImg" className="w-32 lg:w-40" />
            <p className="text-3xl font-semibold mt-5 sm:text-4xl lg:text-5xl 2xl:text-6xl">
              How we do stuff
            </p>
            <p className="mt-5 font-lora lg:text-lg 2xl:text-2xl">
              At Humankind, we believe in a culture of freedom and
              responsibility, allowing serendipity to guide us. It might look
              like chaos for an outsider, but it's a shared consciousness.
              <br /> <br />
              We believe that freedom and autonomy feed motivation, so we all
              have the authority to organize around projects and seize the
              opportunity while accelerating our personal growth. The idea is to
              maintain relationships across a network without a central command.
              That means that people can hold multiple roles in numerous
              projects.
              <br /> <br />
              Teams amongst teams operate as cells in a dynamic network—a living
              system. Each person has their purpose and goals, so talent and
              information flow freely. We work more like a marketplace than an
              org chart. Hierarchies emerge, but they are based on influence,
              reputation, and the work itself.
              <br /> <br />
              Decentralized, fluid, but with a clear goal.
            </p>
          </div>
          <div className="mt-40">
            <motion.div
              ref={ref7}
              style={{ scale: scrollYProgress }}
              className="flex flex-row-reverse"
            >
              <img
                src={vector2Img}
                alt="vector2Img"
                className="w-32 scale-2-3 lg:w-40"
              />
              <img
                src={vector1Img}
                alt="vector1Img"
                className="w-32 scale-2-3 lg:w-40"
              />
              <img
                src={vector3Img}
                alt="vector3Img"
                className="w-32 scale-2-3 lg:w-40"
              />
              <img
                src={vector4Img}
                alt="vector4Img"
                className="w-32 scale-2-3 lg:w-40"
              />
              <img
                src={vector5Img}
                alt="vector5Img"
                className="w-32 scale-2-3 lg:w-40"
              />
            </motion.div>
            <div className="text-center bg-white rounded-3xl border-4 border-black p-8 relative z-10">
              <div>
                <p className="text-3xl font-semibold mt-5 sm:text-4xl lg:text-5xl 2xl:text-6xl">
                  Wanna join our team?
                </p>
                <p className="mt-5 font-lora lg:text-lg 2xl:text-xl">
                  Embark the Humankind adventure and help us capture the hearts
                  and minds of kids and adults worldwide with lovely creations,
                  unique vision, and decentralized storytelling.
                </p>
                <div className="flex flex-col mt-8 gap-3 md:flex-row md:justify-center">
                  <Button text="Join as an Investor" />
                  <Button text="Explore Careers" type="secondary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SubFooter image={subfooterImg}></SubFooter>
    </>
  );
}

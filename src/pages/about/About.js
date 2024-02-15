import { useState } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
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

export default function About() {
  const [showResume, setShowResume] = useState(false);

  const { scrollYProgress } = useViewportScroll();

  const decreaseScale1 = useTransform(scrollYProgress, [0, 0.5], [1.5, 1]);
  const decreaseScale2 = useTransform(scrollYProgress, [0, 0.3], [1.1, 1]);
  const increaseScale1 = useTransform(scrollYProgress, [0, 0.5], [1, 1.5]);
  const yTranslate1 = useTransform(scrollYProgress, [0.3, 0.6], ["0%", "-30%"]);
  const yTranslate2 = useTransform(scrollYProgress, [0, 0.3], ["0%", "-30%"]);
  const yTranslate3 = useTransform(scrollYProgress, [0.6, 1], ["40%", "-10%"]);
  const yTranslate4 = useTransform(scrollYProgress, [0.6, 1], ["80%", "-10%"]);
  const yTranslate5 = useTransform(scrollYProgress, [0.6, 1], ["120%", "-10%"]);
  const yTranslate6 = useTransform(scrollYProgress, [0.6, 1], ["160%", "-10%"]);
  const yTranslate7 = useTransform(scrollYProgress, [0.6, 1], ["200%", "-10%"]);

  const handleSetShowMenu = () => {
    setShowResume(!showResume);
  };

  return (
    <>
      <div className="w-11/12 m-auto grid grid-cols-11 gap-5 py-24 lg:w-10/12 xl:w-8/12 xl:py-40">
        <div className="col-span-11 md:col-span-6 relative">
          <motion.img
            src={uCool1Img}
            alt="uCool1Img"
            className="w-full"
            style={{ scale: decreaseScale2, y: yTranslate2 }}
          />
          <motion.img
            src={uCool2Img}
            alt="uCool2Img"
            className="w-full absolute top-0"
          />
        </div>
        <motion.div
          style={{ y: yTranslate2 }}
          className="col-span-11 md:col-span-5 flex flex-col justify-center text-left items-start"
        >
          <p className="font-semibold uppercase text-xl 2xl:text-2xl">About</p>
          <h1 className="text-5xl font-bold mt-2 md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
            Stay human. <br />
            Be kind.
          </h1>
          <p className="mt-4 font-lora text-lg md:text-xl lg:text-2xl 2xl:text-3xl">
            We believe art and storytelling can change us and the world around
            us.
          </p>
        </motion.div>
      </div>
      <div className="grid grid-cols-12">
        <div className="col-span-12 relative overflow-hidden md:col-span-6">
          <motion.img
            src={cityBgImg}
            alt="cityBgImg"
            className="w-full"
            style={{ scale: decreaseScale1 }}
          />
          <motion.img
            src={cityTopImg}
            alt="cityTopImg"
            className="w-full absolute top-0"
            style={{ scale: increaseScale1 }}
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
        <motion.div style={{ scale: increaseScale1 }}></motion.div>
        <motion.p
          style={{ y: yTranslate1 }}
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
      <div className="bg-black py-10 md:py-24 xl:py-36">
        <div className="w-11/12 m-auto md:w-8/12 lg:w-7/12 xl:w-6/12 2xl:w-6/12">
          <div className="text-white text-center flex flex-col items-center md:px-12 lg:px-16 xl:px-20 2xl:px-24">
            <img src={iconImg} alt="iconImg" className="w-32 lg:w-40" />
            <p className="text-3xl font-semibold mt-5 sm:text-4xl lg:text-5xl 2xl:text-6xl">
              How we do stuff
            </p>
            <p className="mt-5 font-lora lg:text-lg 2xl:text-3xl">
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
          <div className="mt-40 md:mt-60">
            <div className="flex flex-row-reverse w-full">
              <motion.img
                src={vector2Img}
                alt="vector2Img"
                className="w-1/5"
                style={{ y: yTranslate7, scale: 2.3 }}
              />
              <motion.img
                src={vector1Img}
                alt="vector1Img"
                className="w-1/5"
                style={{ y: yTranslate6, scale: 2.3 }}
              />
              <motion.img
                src={vector3Img}
                alt="vector3Img"
                className="w-1/5"
                style={{ y: yTranslate5, scale: 2.3 }}
              />
              <motion.img
                src={vector4Img}
                alt="vector4Img"
                className="w-1/5"
                style={{ y: yTranslate4, scale: 2.3 }}
              />
              <motion.img
                src={vector5Img}
                alt="vector5Img"
                className="w-1/5"
                style={{ y: yTranslate3, scale: 2.3 }}
              />
            </div>
            <div className="flex justify-center bg-white rounded-3xl border-4 border-black p-8 relative mt-20 lg:p-16">
              <div className="text-center flex flex-col gap-8 md:max-w-xl">
                <p className="text-3xl font-semibold sm:text-4xl lg:text-5xl 2xl:text-6xl">
                  Wanna join our team?
                </p>
                <p className="font-lora lg:text-lg 2xl:text-xl">
                  Embark the Humankind adventure and help us capture the hearts
                  and minds of kids and adults worldwide with lovely creations,
                  unique vision, and decentralized storytelling.
                </p>
                <div className="flex flex-col gap-3 md:flex-row md:justify-center">
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

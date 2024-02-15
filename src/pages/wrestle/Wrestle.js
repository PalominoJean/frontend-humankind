import { motion, useViewportScroll, useTransform } from "framer-motion";
//images
import wrestleImg from "./../../assets/images/Logo.svg";
import heroImg from "./../../assets/images/hero-image-p-2600.webp";
import headImg from "./../../assets/images/Wild_robot_head-p-500.webp";
import stanleyImg from "./../../assets/images/Pablo Stanley Me Logo Icon Pabs-p-500.webp";
import avatarImg from "./../../assets/images/avatar.gif";
//components
import SubFooter from "../../components/Subfooter";
import Button from "../../components/Button";
import SectionChildren from "../components/SectionChildren";

const sectionChildrenData = {
  title: "wrestle!",
  cards: [
    {
      image: headImg,
      title: "Adventuring guide",
      text: "We've compiled a list of the most common questions and answers to help you better understand the game and its mechanics.",
    },
    {
      image: stanleyImg,
      title: "A message from Pabs",
      text: "Our founder discusses the idea and process behind 'Wrestle'. Read on to learn more.",
    },
  ],
};

export default function Wrestle() {
  const { scrollYProgress } = useViewportScroll();

  const increaseScale1 = useTransform(scrollYProgress, [0, 0.3], [1, 1.8]);
  const increaseScale2 = useTransform(scrollYProgress, [0, 0.3], [1, 1.1]);

  return (
    <>
      <div className="flex justify-center mt-20 md:mt-32">
        <div className="w-5/6 flex flex-col justify-center items-center">
          <motion.img
            alt="wrestleImg"
            className="w-60 md:w-80"
            src={wrestleImg}
            style={{ scale: increaseScale1 }}
          />
          <div className="max-w-3xl text-center ">
            <p className="text-5xl font-bold mt-5 leading-10 md:text-6xl xl:text-7xl">
              Are you ready to rumble?
            </p>
            <p className="font-lora text-lg mt-4 leading-6 md:text-2xl ">
              Get into turn-based fights with different monsters that appear in
              the Land of Kinds. Can you defeat them all?
            </p>
            <br />
            <Button text="🤼🤼 Go Play Now! 🤼🤼" type="secondary" />
          </div>
          <motion.img
            alt="heroImg"
            src={heroImg}
            style={{ scale: increaseScale2 }}
          />
        </div>
      </div>
      <SectionChildren data={sectionChildrenData}></SectionChildren>
      <div className="bg-black flex justify-center py-16">
        <div className="w-10/12 grid grid-cols-11 gap-10 sm:gap-16 sm:w-9/12 md:w-8/12 2xl:w-6/12 2xl:gap-24">
          <div className="col-span-11 sm:col-span-5 rounded-sm">
            <img src={avatarImg} alt="avatarImg" className="rounded-2xl" />
          </div>
          <div className="col-span-11 text-left text-white flex items-center p-6 pt-12  sm:col-span-6 sm:pt-0 sm:p-0">
            <div>
              <p className="text-2xl font-bold sm:text-4xl md:text-5xl">
                Wrestle. Wrestle. Wrestle. Wrestle. Wrestle. Wrestle. Wrestle.
                Wrestle. Wrestle!
              </p>
              <p className="mt-6 font-lora md:text-xl">
                Go play the Beta version of Wrestle in Herokind. It’s a simple
                turn-based fight game where your Humankind collectibles can
                wrestle monsters on different islands. It’s a bit like some
                old-school games we loved as kids, and we think you’ll enjoy it.
              </p>
              <br />
              <Button text="Wrestle Wrestle Wrestle!" type="tertiary" />
            </div>
          </div>
        </div>
      </div>
      <SubFooter></SubFooter>
    </>
  );
}

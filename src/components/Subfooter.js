import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

//images
import discordImg from "../assets/images/discord.svg";
import twiterImg from "../assets/images/twitter_squared.svg";
import instagramImg from "../assets/images/icons8-instagram.svg";
import linkedinImg from "../assets/images/icons8-linkedin.svg";
import openSeaImg from "../assets/images/OpenSea.svg";
import fireImg from "../assets/images/fire-p-500.webp";
import { useEffect } from "react";
import Button from "./Button";

const variants = {
  visible: { scale: 1, transition: { duration: 0.5 } },
  hidden: { scale: 0.9 },
};

export default function SubFooter({ image = fireImg }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    controls.start(inView ? "visible" : "hidden");
  }, [controls, inView]);

  return (
    <>
      <div className="flex justify-center py-28">
        <div className="w-4/5 grid grid-cols-7 gap-5 md:gap-8">
          <div className="col-span-7 px-10 md:col-span-4 md:order-last xl:px-20 2xl:px-40">
            <motion.img
              ref={ref}
              animate={controls}
              initial="hidden"
              variants={variants}
              src={image}
              alt="subfooterImg"
              className="w-full max-h-full"
            />
          </div>
          <div className="col-span-7 md:col-span-3 text-left flex items-center justify-center">
            <div>
              <p className="font-bold text-5xl mt-10 text-center md:text-left md:text-6xl xl:text-7xl">
                Humankind
              </p>
              <p className="font-lora text-lg text-center md:text-left md:text-xl xl:text-2xl">
                stay human. be kind.
              </p>
              <div className="mt-8 flex gap-6">
                <img src={discordImg} alt="discordImg" className="w-8" />
                <img src={twiterImg} alt="twiterImg" className="w-8" />
                <img src={instagramImg} alt="instagramImg" className="w-8" />
                <img src={linkedinImg} alt="linkedinImg" className="w-8" />
                <img src={openSeaImg} alt="openSeaImg" className="w-8" />
              </div>
              <div className="flex flex-col mt-8 gap-3 lg:flex-row">
                <Button text="⚔️ Play Now!" type="secondary" size="small" />
                <Button text="👾 Join our Discord" size="small"/>
              </div>
              <p className="mt-10 font-lora text-sm text-center lg:text-left">
                Humankind Industries Inc. 2023
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

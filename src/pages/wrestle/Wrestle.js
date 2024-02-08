import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
//images
import wrestleImg from "./../../assets/images/Logo.svg";
import heroImg from "./../../assets/images/hero-image-p-2600.webp";
import headImg from "./../../assets/images/Wild_robot_head-p-500.webp";
import stanleyImg from "./../../assets/images/Pablo Stanley Me Logo Icon Pabs-p-500.webp";
import avatarImg from "./../../assets/images/avatar.gif";
//components
import SubFooter from "../../components/Subfooter";
import Button from "../../components/Button";

const variants = {
  visible: { scale: 1, transition: { duration: 0.5 } },
  hidden: { scale: 0.9 },
};

export default function Wrestle() {
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();

  const [ref1, inView1] = useInView();
  const [ref2, inView2] = useInView();
  const [ref3, inView3] = useInView();

  useEffect(() => {
    controls1.start(inView1 ? "visible" : "hidden");
    controls2.start(inView2 ? "visible" : "hidden");
    controls3.start(inView3 ? "visible" : "hidden");
  }, [controls1, controls2, controls3, inView1, inView2, inView3]);

  return (
    <>
      <div className="flex justify-center mt-4">
        <div className="w-5/6 flex flex-col justify-center items-center">
          <motion.img
            ref={ref1}
            animate={controls1}
            initial="hidden"
            variants={variants}
            src={wrestleImg}
            alt="wrestleImg"
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
            ref={ref2}
            animate={controls2}
            initial="hidden"
            variants={variants}
            src={heroImg}
            alt="heroImg"
          />
        </div>
      </div>
      <div className="bg-black ">
        <p className="text-white font-bold font-size-21vw line-height-20rem text-center leading-none">
          wrestle!
        </p>
        <div className="flex justify-center items-center text-center gap-10 section-stayhuman md:text-left">
          <div className="grid grid-cols-1 gap-5 w-11/12 sm:grid-cols-2 md:w-5/6 lg:w-3/4 xl:w-7/12 2xl:w-6/12">
            <div className="bg-white px-5 py-6 rounded-xl border-8 border-black duration-500 hover:bg-yellow-400 md:px-10 md:py-10 xl:p-14">
              <motion.img
                ref={ref3}
                animate={controls3}
                initial="hidden"
                variants={variants}
                src={headImg}
                alt="headImg"
                className="w-24 mix-blend-multiply inline xl:w-32"
              />
              <p className="font-bold text-2xl mt-1 first-letter md:text-3xl lg:text-4xl xl:text-5xl ">
                Adventuring guide
              </p>
              <p className="font-lora mt-1 leading-5 lg:leading-6 lg:text-lg xl:text-xl xl:leading-8 xl:mt-2">
                We've compiled a list of the most common questions and answers
                to help you better understand the game and its mechanics.
              </p>
            </div>
            <div className="bg-white px-5 py-6 rounded-xl border-8 border-black duration-500 hover:bg-yellow-400 md:px-10 md:py-10 xl:p-14">
              <img
                src={stanleyImg}
                alt="stanleyImg"
                className="w-24 mix-blend-multiply inline xl:w-32"
              />
              <p className="font-bold text-2xl mt-1 first-letter md:text-3xl lg:text-4xl xl:text-5xl">
                A message from Pabs
              </p>
              <p className="font-lora mt-1 leading-5 lg:leading-6 lg:text-lg xl:text-xl xl:leading-8 xl:mt-2">
                Our founder discusses the idea and process behind "Wrestle".
                Read on to learn more.
              </p>
            </div>
          </div>
        </div>
      </div>
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

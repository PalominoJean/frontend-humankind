import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const variants = {
  visible: { scale: 1.1, transition: { duration: 0.5 } },
  hidden: { scale: 1 },
};

export default function SectionChildren({ data }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    controls.start(inView ? "visible" : "hidden");
  }, [controls, inView]);

  return (
    <>
      <div className="bg-black h-120vh flex justify-center items-center mt-16 relative overflow-hidden">
        <div className="flex flex-col gap-5 max-w-screen-lg z-10 px-3 sm:flex-row sm:justify-center 2xl:max-w-screen-xl">
          {data.cards.map(({ image, title, text }, index) => (
            <div
              key={index}
              className="w-full card flex flex-col items-center text-center bg-white px-10 py-12 rounded-xl border-black hover:bg-yellow-400 sm:w-6/12 sm:min-w-96 md:items-start md:text-left 2xl:px-16 2xl:py-16"
            >
              <img
                src={image}
                alt="studiosImg"
                className="w-28 mix-blend-multiply 2xl:w-32"
              />
              <p className="font-bold text-2xl md:text-4xl mt-2 2xl:text-5xl">
                {title}
              </p>
              <p className="font-lora mt-1 text-sm md:text-md lg:text-lg 2xl:text-xl">
                {text}
              </p>
            </div>
          ))}
        </div>
        <p className="text-white font-bold font-size-21vw line-height-20rem absolute leading-none -top-2 sm:-top-3 md:-top-6 lg:-top-9 xl:-top-12 2xl:-top-16">
          {data.title}
        </p>
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={variants}
          className="section-stayhuman absolute w-full h-105vh bottom-0"
        ></motion.div>
      </div>
    </>
  );
}

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
//images
import believeImg from "./../../assets/images/believe-p-800.webp";
import changeOfPlansImg from "./../../assets/images/change-of-plans.png";
import blockchainImg from "./../../assets/images/blockchain.svg";
import partnershipsImg from "./../../assets/images/partnerships.svg";
import goalImg from "./../../assets/images/goal.svg";
import contentImg from "./../../assets/images/content.svg";
import codeImg from "./../../assets/images/code.svg";
import artImg from "./../../assets/images/art.svg";
import designImg from "./../../assets/images/design.svg";
import communityImg from "./../../assets/images/community.svg";
import fillColorImg from "./../../assets/images/fill-color.svg";
//components
import SubFooter from "../../components/Subfooter";
import Button from "../../components/Button";

const variants = {
  visible: { scale: 1, transition: { duration: 0.5 } },
  hidden: { scale: 0.9 },
};

const courses = [
  { img: blockchainImg, title: "Web3 Strategist", description: "Product" },
  {
    img: partnershipsImg,
    title: "Partnerships Lead",
    description: "Community",
  },
  { img: goalImg, title: "Marketing Lead", description: "Marketing" },
  { img: contentImg, title: "Content Lead", description: "Marketing" },
  { img: codeImg, title: "Software Engineer", description: "Product" },
  { img: artImg, title: "Visual Artist", description: "Art" },
  { img: designImg, title: "Product Designer", description: "Product" },
  { img: communityImg, title: "Community Manager", description: "Community" },
  { img: fillColorImg, title: "Graphic Designer", description: "Marketing" },
];

export default function Careers() {
  const controls1 = useAnimation();
  const controls2 = useAnimation();

  const [ref1, inView1] = useInView();
  const [ref2, inView2] = useInView();

  useEffect(() => {
    controls1.start(inView1 ? "visible" : "hidden");
    controls2.start(inView2 ? "visible" : "hidden");
  }, [controls1, controls2, inView1, inView2]);

  return (
    <>
      <div className="w-11/12 m-auto grid grid-cols-11 py-24 lg:w-11/12 xl:w-10/12 2xl:w-8/12">
        <div className="col-span-11 md:col-span-5 flex flex-col gap-y-10 justify-center text-left items-start">
          <div className="flex flex-col gap-1">
            <p className="font-semibold uppercase text-xl 2xl:text-2xl">
              Careers
            </p>
            <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
              Become a Champion.
            </h1>
          </div>
          <p className="font-lora text-lg md:text-xl lg:text-2xl 2xl:text-3xl">
            Be part of an unthinkable mission. Work with an inspiring team who
            believes in the power of imagination and collaboration to lead the
            industry with new, innovative storytelling.
          </p>
          <Button text="Explore Careers" type="secondary"></Button>
        </div>
        <div className="col-span-11 md:col-span-6">
          <motion.img
            ref={ref1}
            animate={controls1}
            initial="hidden"
            variants={variants}
            src={believeImg}
            alt="believeImg"
            className="w-full max-h-full"
          />
        </div>
      </div>
      <div className="section-section text-white py-20 md:py-32 xl:py-40 2xl:py-52">
        <div className="w-10/12 m-auto md:w-9/12 lg:w-6/12 xl:w-4/12 2xl:w-3/12">
          <p className="text-5xl font-bold md:text-6xl lg:text-7xl 2xl:text-8xl">
            Small team. <br />
            Global mission.
          </p>
          <p className="font-lora text-lg mt-4 leading-10 md:text-xl lg:text-2xl 2xl:text-3xl">
            We’re on a quest to entertain and inspire people worldwide through
            art, kindness, and unique storytelling.
            <br />
            <br />
            If you want to be a part of a creative team, working remotely,
            designing unforgettable experiences, this is your opportunity to
            start the next chapter of your career story.
          </p>
        </div>
      </div>
      <div className="w-11/12 grid grid-cols-12 m-auto gap-y-8 py-24 lg:w-10/12 xl:w-8/12 2xl:w-7/12">
        <div className="col-span-12 ">
          <motion.img
            ref={ref2}
            animate={controls2}
            initial="hidden"
            variants={variants}
            src={changeOfPlansImg}
            alt="changeOfPlansImg"
            className="w-11/12 m-auto md:w-10/12 lg:w-9/12 xl:w-7/12 2xl:w-6/12"
          />
        </div>
        <div className="col-span-12 text-center">
          <p className="text-3xl font-semibold md:text-4xl lg:text-5xl 2xl:text-6xl">
            Our Modus Operandi
          </p>
          <p className="text-lg font-lora mt-4 md:text-xl 2xl:text-3xl">
            We’re creating a culture where wonderful humans (like you) can do
            their best work. If you’re ready to grow your many talents and help
            millions of people connect, you’re in the right place.
          </p>
        </div>
        <div className="col-span-12 grid grid-cols-2 px-5 text-lg md:gap-x-12 md:text-xl 2xl:text-3xl 2xl:mt-10 2xl:gap-x-20">
          <ul className="col-span-2 flex flex-col font-lora gap-y-4 md:gap-y-5 md:col-span-1">
            <li className="list-disc">
              Freedom and autonomy feed our motivation. <br />
              We’re encouraged to try, experiment, fail, learn, and repeat.
            </li>
            <li className="list-disc">
              We operate as a marketplace instead of an org chart. There’s no
              central command—we’re all cells in a living system.
            </li>
            <li className="list-disc">
              We don’t limit ourselves to one static job description—we hold
              various roles in many places.
            </li>
            <li className="list-disc">
              We depend on our ability to learn and adjust our course as we go.
            </li>
          </ul>
          <ul className="col-span-2 flex flex-col font-lora gap-y-4 md:gap-y-5 md:col-span-1">
            <li className="list-disc">
              The crazy now becomes the obvious later—we’re open to wild ideas.
            </li>
            <li className="list-disc">
              People are capable of directing their time and attention where
              they can add the most value. We go where our skills and motivation
              take us.
            </li>
            <li className="list-disc">
              We’re all inherently creative, given the right conditions.
            </li>
            <li className="list-disc">
              We embrace serendipity, uncertainty, and the beauty of chaos.
            </li>
            <li className="list-disc">
              We’re here to doodle, experiment, be silly, and create together.
            </li>
          </ul>
        </div>
      </div>
      <div className="w-11/12 grid grid-cols-12 m-auto gap-y-8 py-24 lg:w-10/12 2xl:w-8/12">
        <div className="col-span-12 text-center">
          <p className="text-3xl font-semibold md:text-4xl lg:text-5xl 2xl:text-6xl">
            Where will your story begin?
          </p>
        </div>
        <div className="col-span-12 grid grid-cols-2 gap-y-4 md:gap-8 ">
          {courses.map(({ img, imgAlt, title, description }) => {
            return (
              <div
                key={title}
                className="col-span-2 grid grid-rows-2 grid-cols-12 grid-flow-col border-4 gap-x-1 border-black rounded-xl p-4 card md:rounded-2xl md:col-span-1 2xl:p-8 2xl:rounded-2xl"
              >
                <div className="row-span-2 col-span-2 flex items-center justify-center sm:col-span-1 md:col-span-2">
                  <img
                    src={img}
                    alt={`${img}`}
                    className="w-8 md:w-10 lg:w-11 xl:w-12 2xl:w-13"
                  />
                </div>
                <div className="col-span-10 text-2xl font-bold sm:col-span-11 md:col-span-10 md:text-3xl lg:text-4xl 2xl:text-5xl">
                  {title}
                </div>
                <div className="col-span-10 font-lora sm:col-span-11 md:col-span-10 md:text-lg lg:text-xl 2xl:text-2xl 2xl:mt-2">
                  {description}. Remote. Full Time.
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <SubFooter />
    </>
  );
}

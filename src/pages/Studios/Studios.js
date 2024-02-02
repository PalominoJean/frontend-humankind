//images
import studios1Img from "./../../assets/images/studios-1.png";
import studios2Img from "./../../assets/images/studios-2.png";
import sleepyTimeImg from "./../../assets/images/sleepy-time.png";
import mayaImg from "./../../assets/images/Maya.webp";
import beKindImg from "./../../assets/images/be-kind 1.webp";


export default function Studios() {
  return (
    <>
      <div className="w-11/12 m-auto grid grid-cols-11 gap-5 py-24 lg:w-10/12 xl:w-8/12 xl:py-32">
        <div className="col-span-11 md:col-span-5 flex flex-col justify-center text-left items-start">
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
        </div>
        <div className="col-span-11 md:col-span-6 relative">
          <img
            src={studios1Img}
            alt="studios1Img"
            className="w-full max-h-full absolute"
          />
          <img
            src={studios2Img}
            alt="studios2Img"
            className="w-full max-h-full"
          />
        </div>
      </div>
      <div className="relative overflow-hidden flex items-center h-[50rem] md:h-[65rem] lg:h-[70rem] xl:h-[75rem] 2xl:h-[80rem]">
        <img
          src={sleepyTimeImg}
          alt="sleepyTimeImg"
          className="h-full absolute sm:w-full sm:h-auto"
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
      <div className="my-14 lg:my-28">
        <p className="text-center font-semibold text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl">
          Behind every brushstroke, there’s a story.
        </p>
        <img src={mayaImg} alt="mayaImg" className="w-full max-h-full mt-5" />
      </div>
      <div className="w-11/12 m-auto lg:max-w-6xl xl:max-w-7xl">
        <div>
          <img src={beKindImg} alt="beKindImg" className="w-full max-h-full mt-5" />
        </div>
        <div className="flex flex-col mt-8 gap-4 sm:flex-row ">
          <p className="font-semibold text-4xl sm:w-6/12 md:text-5xl xl:text-6xl">Join the fellowship</p>
          <p className="font-lora sm:w-6/12 md:text-xl lg:text-2xl 2xl:text-3xl">
            Humankind is creating relatable characters and epic stories of
            well-meaning monsters. Their journey includes a group of friends
            that always find a way, a former captain gone rogue, creatures and
            spirits joining forces, and many more.
          </p>
        </div>
      </div>
    </>
  );
}

//images
import studios1Img from "./../../assets/images/studios-1.png";
import studios2Img from "./../../assets/images/studios-2.png";

export default function Studios() {
  return (
    <>
      <div className="w-11/12 m-auto grid grid-cols-11 gap-5 mt-24 lg:w-10/12 xl:w-8/12 xl:mt-32">
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
    </>
  );
}

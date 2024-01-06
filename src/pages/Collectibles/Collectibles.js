import runLeftImg from "./../../assets/images/run-run-left.png";
import runRightImg from "./../../assets/images/run-run-right.png";
import stickersImg from "./../../assets/images/stickers-website.webp";
import lunchboxesImg from "./../../assets/images/Lunchboxes.gif";
import treeImg from "./../../assets/images/Tree.webp";
import lunchboxImg from "./../../assets/images/Lunchbox.webp";

export default function Collectibles() {
  return (
    <>
      <div className="w-11/12 m-auto grid grid-cols-11 gap-5 mt-24 lg:w-10/12 xl:w-8/12">
        <div className="col-span-11 md:col-span-5 flex flex-col justify-center text-left items-start">
          <p className="font-semibold uppercase text-xl ">
            HUMANKIND collectibles
          </p>
          <h1 className="text-5xl font-bold mt-2 md:text-6xl lg:text-7xl xl:text-8xl">
            Time for an adventure.
          </h1>
          <p className="mt-4 font-lora text-lg md:text-xl lg:text-2xl">
            After a long time of doodling we're launching our first collection.
          </p>
          <button className="py-2 px-5 w-full rounded-full font-bold border-4 transition bg-black text-white border-black mt-7 hover:bg-red-500 hover:shadow-md hover:translate-x-0.5 hover:-translate-y-0.5 md:w-auto lg:text-lg xl:mt-10">
            Mint Now
          </button>
        </div>
        <div className="col-span-11 md:col-span-6 relative">
          <img
            src={runLeftImg}
            alt="runLeftImg"
            className="w-full max-h-full absolute"
          />
          <img
            src={runRightImg}
            alt="runRightImg"
            className="w-full max-h-full"
          />
        </div>
      </div>
      <div className="mt-40">
        <img
          src={stickersImg}
          alt="stickersImg"
          className="h-20 md:h-24 lg:h-32 xl:h-44"
        />
      </div>
      <div className="w-11/12 m-auto grid grid-cols-11 gap-5 mt-28 lg:w-9/12 xl:w-7/12 xl:gap-8">
        <div className="col-span-11">
          <img
            src={lunchboxesImg}
            alt="lunchboxesImg"
            className="w-10/12 m-auto max-h-full xl:w-8/12"
          />
        </div>
        <div className="col-span-11 md:col-span-5">
          <p className="text-3xl font-bold md:text-4xl lg:text-5xl">
            Every adventure starts with a healthy meal 🖤.
          </p>
        </div>
        <div className="col-span-11 md:col-span-6">
          <p className="font-lora text-lg md:text-xl lg:text-2xl xl:leading-10">
            First, you need to get a lunchbox that will serve to wake up your
            Humankind. You can only start the adventure as soon as your Kind is
            well-nourished!
          </p>
        </div>
      </div>
      <div className="w-11/12 m-auto grid grid-cols-11 gap-5 mt-28 lg:w-9/12 xl:w-7/12 xl:gap-8 xl:mt-40">
        <div className="col-span-11 md:col-span-5 flex flex-col justify-center items-start">
          <img
            src={lunchboxImg}
            alt="lunchboxImg"
            className="w-20 lg:w-32 max-h-full"
          />
          <p className="text-3xl font-bold mt-6 md:text-4xl lg:text-5xl ">
            Yum! Feed your kind!
          </p>
          <p className="font-lora text-lg mt-4 md:text-xl lg:text-2xl xl:leading-10">
            Since your Kind will take the lunchbox with them, you will have to
            do an exchange. Soon we will announce more details of this.
          </p>
          <button className="mt-6 text-md py-2 px-5 rounded-full font-bold border-4  sm:text-lg md:text-xl md:py-4 md:px-6 hover:shadow-md hover:translate-x-0.5 hover:-translate-y-0.5 transition bg-black text-white border-black hover:bg-red-500">
            Mint now
          </button>
        </div>
        <div className="col-span-11 md:col-span-6">
          <img src={treeImg} alt="treeImg" className="w-full max-h-full" />
        </div>
      </div>
    </>
  );
}

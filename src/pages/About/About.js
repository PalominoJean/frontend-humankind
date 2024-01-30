//images
import uCool1Img from "./../../assets/images/u-cool-1.webp";
import uCool2Img from "./../../assets/images/u-cool-2.webp";
import cityBgImg from "./../../assets/images/city-bg.png";
import cityTopImg from "./../../assets/images/city-top-p-1600.webp";


export default function About() {
  return (
    <>
      <div className="w-11/12 m-auto grid grid-cols-11 gap-5 py-24 lg:w-10/12 xl:w-8/12 xl:py-40">
        <div className="col-span-11 md:col-span-6 relative">
          <img src={uCool1Img} alt="uCool1Img" className="w-full " />
          <img
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
          <img src={cityBgImg} alt="cityBgImg" className="w-full" />
          <img
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
        <p className="uppercase font-black tracking-tighter	text-white absolute bottom-0">TEAMKIND BESTKIND</p>
      </div>
    </>
  );
}

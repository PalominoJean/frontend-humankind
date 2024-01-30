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


export default function About() {
  const squad = [
    { image: squad62Img, name: "Pabs", work: "Artist" },
    { image: squad12Img, name: "Marian", work: "Media" },
    { image: squad163Img, name: "Bueno", work: "Dev & Ops" },
    { image: squad195Img, name: "Adam", work: "Artist" },
    { image: squad46Img, name: "Maya Draisin", work: "Brand Advisor" },
  ];
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
        <p className="uppercase font-black tracking-tighter	text-white absolute bottom-0">
          TEAMKIND BESTKIND
        </p>
      </div>
      <div className="w-6/12 m-auto py-24 md:w-8/12 lg:w-10/12 xl:w-9/12 2xl:w-7/12 xl:py-40">
        <p className="text-center font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl">The Squad</p>
        <div className="grid grid-cols-12 gap-y-5 mt-5 justify-center xl:grid-cols-10">
          {squad.map(({ image, name, work }) => {
            return (
              <div
                key={name}
                className="col-span-12 text-center sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2 "
              >
                <img src={image} alt="squad62Img" className=" w-full" />
                <p className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">{name}</p>
                <p className="font-lora md:text-lg xl:text-xl 2xl:text-2xl">{work}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

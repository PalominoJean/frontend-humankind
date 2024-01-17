//images
import runLeftImg from "./../../assets/images/run-run-left.png";
import sectionImg from "./../../assets/images/Section.png";
import believeImg from "./../../assets/images/believe-p-800.webp";

export default function Careers() {
  return (
    <>
      <div className="w-11/12 m-auto grid grid-cols-11 gap-5 mt-24 lg:w-10/12 xl:w-8/12">
        <div className="col-span-11 md:col-span-5 flex flex-col justify-center text-left items-start">
          <p className="font-semibold uppercase text-xl 2xl:text-2xl">
            Careers
          </p>
          <h1 className="text-5xl font-bold mt-2 md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
            Become a Champion.
          </h1>
          <p className="mt-4 font-lora text-lg md:text-xl lg:text-2xl">
            Be part of an unthinkable mission. Work with an inspiring team who
            believes in the power of imagination and collaboration to lead the
            industry with new, innovative storytelling.
          </p>
          <button className="py-2 px-5 w-full rounded-full font-bold border-4 transition bg-black text-white border-black mt-7 hover:bg-red-500 hover:shadow-md hover:translate-x-0.5 hover:-translate-y-0.5 md:w-auto lg:text-lg xl:mt-10  ">
            Explore Careers
          </button>
        </div>
        <div className="col-span-11 md:col-span-6 ">
          <img
            src={believeImg}
            alt="believeImg"
            className="w-full max-h-full "
          />
        </div>
      </div>
    </>
  );
}

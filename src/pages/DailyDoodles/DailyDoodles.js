//images
import doodle1Img from "../../assets/images/doodle-003.jpg";
import doodle2Img from "../../assets/images/doodle-004.jpeg";
import doodle3Img from "../../assets/images/doodle-006.jpeg";
import doodle4Img from "../../assets/images/doodle-007.jpeg";
import doodle5Img from "../../assets/images/doodle-009.jpeg";
import doodle6Img from "../../assets/images/doodle-010.jpeg";
import doodle7Img from "../../assets/images/doodle-011.jpeg";
import doodle8Img from "../../assets/images/doodle-015.jpeg";
import doodle9Img from "../../assets/images/doodle-019.png";
import doodle10Img from "../../assets/images/doodle-020.png";
import doodle11Img from "../../assets/images/doodle-021.png";
import doodle12Img from "../../assets/images/doodle-022.png";
import doodle13Img from "../../assets/images/doodle-023.png";
import doodle14Img from "../../assets/images/doodle-024.png";
import doodle15Img from "../../assets/images/doodle-025.png";
import doodle16Img from "../../assets/images/doodle-026.png";
import doodle17Img from "../../assets/images/doodle-027.png";
import doodle18Img from "../../assets/images/doodle-028.png";
import doodle19Img from "../../assets/images/doodle-030.png";
import doodle20Img from "../../assets/images/doodle-031.png";
import doodle21Img from "../../assets/images/doodle-032.png";
import doodle22Img from "../../assets/images/doodle-033.png";
import doodle23Img from "../../assets/images/doodle-034.png";
import doodle24Img from "../../assets/images/doodle-035.png";
import doodle25Img from "../../assets/images/doodle-036.png";
import doodle26Img from "../../assets/images/doodle-037.png";
import goomieImg from "../../assets/images/gummy-doodle-p-1600.webp";
//components
import SubFooter from "../../components/Subfooter";

export default function DailyDoodles() {
  const doodles = [
    { img: doodle1Img, day: "036" },
    { img: doodle2Img, day: "036" },
    { img: doodle3Img, day: "036" },
    { img: doodle4Img, day: "036" },
    { img: doodle5Img, day: "036" },
    { img: doodle6Img, day: "036" },
    { img: doodle7Img, day: "036" },
    { img: doodle8Img, day: "036" },
    { img: doodle9Img, day: "036" },
    { img: doodle10Img, day: "036" },
    { img: doodle11Img, day: "036" },
    { img: doodle12Img, day: "036" },
    { img: doodle13Img, day: "036" },
    { img: doodle14Img, day: "036" },
    { img: doodle15Img, day: "036" },
    { img: doodle16Img, day: "036" },
    { img: doodle17Img, day: "036" },
    { img: doodle18Img, day: "036" },
    { img: doodle19Img, day: "036" },
    { img: doodle20Img, day: "036" },
    { img: doodle21Img, day: "036" },
    { img: doodle22Img, day: "036" },
    { img: doodle23Img, day: "036" },
    { img: doodle24Img, day: "036" },
    { img: doodle25Img, day: "036" },
    { img: doodle26Img, day: "036" },
  ];
  return (
    <>
      <div className="px-4 mt-20 md:px-8 2xl:px-14">
        <p className="font-bold tracking-tighter font-size-16vw leading-none">
          open doodles
        </p>
        <p className="font-lora mt-3 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
          open source creative Illustrations for makers made by Pablo Stanley
          and the Humankind team.
        </p>
        <div className="flex flex-col mt-5 gap-3 sm:flex-row">
          <button className="py-2 px-5 rounded-full font-bold border-4 transition bg-black text-white border-black hover:bg-red-500 hover:shadow-md hover:translate-x-0.5 hover:-translate-y-0.5 lg:text-lg xl:py-3 xl:px-7">
            Download All Doodles
          </button>
          <button className="text-black border-black py-2 px-5 rounded-full font-bold border-4 transition hover:shadow-md hover:translate-x-0.5 hover:-translate-y-0.5 lg:text-lg">
            Visit Old Version
          </button>
        </div>
        <div className="grid grid-cols-12 mt-6 gap-10 lg:mt-8 2xl:grid-cols-10">
          {doodles.map(({ img, day }) => {
            return (
              <div
                key={`${img}`}
                className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 2xl:col-span-2"
              >
                <div className="border-2 rounded-xl border-black overflow-hidden">
                  <img
                    src={img}
                    alt="img"
                    className="w-full transition-all hover:scale-110"
                  />
                </div>
                <div className="flex justify-between mt-2">
                  <p className="font-medium">Day {day}</p>
                  <p className="font-light">Pablo Stanley</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <SubFooter image={goomieImg}></SubFooter>
    </>
  );
}

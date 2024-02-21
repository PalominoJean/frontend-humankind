//images
import mayaRunningImg from "./../../assets/images/maya-dallas-running.png";
import journeyImg from "./../../assets/images/journey-intro-card.png";
import wrestleImg from "./../../assets/images/wrestle-intro-card.png";

export default function Play() {
  return (
    <>
      <div className="flex justify-center pt-60">
        <div className="w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 2xl:w-7/12">
          <p className="text-4xl font-bold text-center xl:text-6xl">
            adventure awaits
          </p>
          <div className="flex flex-col gap-y-16 mt-6 w-full md:gap-x-5 md:flex-row 2xl:mt-10">
            <div className="card border-black rounded-2xl h-96 flex items-end justify-center w-full relative md:w-1/3">
              <div className="object-center object-cover rounded-2xl overflow-hidden absolute w-full h-full">
                <img
                  className="card-img transition-all object-center object-cover w-full h-full"
                  src={mayaRunningImg}
                  alt="maya running"
                />
              </div>
              <div className="bg-black text-white px-6 py-3 rounded-xl w-11/12 z-10 absolute -bottom-12">
                <p className="font-semibold text-2xl">Claim your Kind</p>
                <p className="">
                  Every adventure starts with a healthy meal. It will be a long
                  journey.
                </p>
              </div>
            </div>
            <div className="card border-black rounded-2xl h-96 flex items-end justify-center w-full relative md:w-1/3">
              <div className="object-center object-cover rounded-2xl overflow-hidden absolute w-full h-full">
                <img
                  className="card-img transition-all object-center object-cover w-full h-full"
                  src={journeyImg}
                  alt="journey"
                />
              </div>
              <div className="bg-black text-white px-6 py-3 rounded-xl w-11/12 z-10 absolute -bottom-12">
                <p className="font-semibold text-2xl">Herokind Adventure</p>
                <p className="">
                  Step into the Land of Kinds for an unparalleled adventure.
                </p>
              </div>
            </div>
            <div className="card border-black rounded-2xl h-96 flex items-end justify-center w-full relative md:w-1/3">
              <div className="object-center object-cover rounded-2xl overflow-hidden absolute w-full h-full">
                <img
                  className="card-img transition-all object-center object-cover w-full h-full"
                  src={wrestleImg}
                  alt="wrestle"
                />
              </div>
              <div className="bg-black text-white px-6 py-3 rounded-xl w-11/12 z-10 absolute -bottom-12">
                <p className="font-semibold text-2xl">Battle Time</p>
                <p className="">
                  Prepare to prove your skills, strategy, and strength in the
                  ultimate showdown.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

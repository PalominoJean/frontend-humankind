import wrestleImg from "./../../assets/images/Logo.svg";
import heroImg from "./../../assets/images/hero-image-p-2600.webp";
import headImg from "./../../assets/images/Wild_robot_head-p-500.webp";
import stanleyImg from "./../../assets/images/Pablo Stanley Me Logo Icon Pabs-p-500.webp";
import avatarImg from "./../../assets/images/avatar.gif";
import discordImg from "./../../assets/images/discord.svg";
import twiterImg from "./../../assets/images/twitter_squared.svg";
import instagramImg from "./../../assets/images/icons8-instagram.svg";
import linkedinImg from "./../../assets/images/icons8-linkedin.svg";
import openSeaImg from "./../../assets/images/OpenSea.svg";
import fireImg from "./../../assets/images/fire-p-500.webp";

export default function Wrestle() {
  return (
    <>
      <div className="flex justify-center mt-4">
        <div className="w-5/6 flex flex-col justify-center items-center">
          <img src={wrestleImg} alt="wrestleImg" />
          <div className="max-w-3xl text-center ">
            <p className="text-5xl font-bold mt-5 leading-10 md:text-6xl xl:text-7xl">
              Are you ready to rumble?
            </p>
            <p className="font-lora text-lg mt-4 leading-6 md:text-2xl ">
              Get into turn-based fights with different monsters that appear in
              the Land of Kinds. Can you defeat them all?
            </p>
            <button className="mt-6 text-md py-2 px-5 rounded-full font-bold border-4 sm:text-lg md:text-xl md:py-4 md:px-6 hover:shadow-md hover:translate-x-0.5 hover:-translate-y-0.5 transition bg-black text-white border-black hover:bg-red-500">
              🤼🤼 Go Play Now! 🤼🤼
            </button>
          </div>
          <img src={heroImg} alt="heroImg" />
        </div>
      </div>
      <div className="bg-black ">
        <p className="text-white font-bold font-size-19vw line-height-20rem text-center leading-none">
          wrestle!
        </p>
        <div className="flex justify-center items-center text-center gap-10 section-stayhuman md:text-left">
          <div className="grid grid-cols-1 gap-5 w-11/12 sm:grid-cols-2 md:w-5/6 lg:w-3/4 xl:w-7/12">
            <div className="bg-white px-5 py-6 rounded-xl border-8 border-black duration-500 hover:bg-yellow-400 md:px-10 md:py-10 xl:p-14">
              <img
                src={headImg}
                alt="headImg"
                className="w-24 mix-blend-multiply inline xl:w-32"
              />
              <p className="font-bold text-2xl mt-1 first-letter md:text-3xl lg:text-4xl xl:text-5xl ">
                Adventuring guide
              </p>
              <p className="font-lora mt-1 leading-5 lg:leading-6 lg:text-lg xl:text-xl xl:leading-8 xl:mt-2">
                We've compiled a list of the most common questions and answers
                to help you better understand the game and its mechanics.
              </p>
            </div>
            <div className="bg-white px-5 py-6 rounded-xl border-8 border-black duration-500 hover:bg-yellow-400 md:px-10 md:py-10 xl:p-14">
              <img
                src={stanleyImg}
                alt="stanleyImg"
                className="w-24 mix-blend-multiply inline xl:w-32"
              />
              <p className="font-bold text-2xl mt-1 first-letter md:text-3xl lg:text-4xl xl:text-5xl">
                A message from Pabs
              </p>
              <p className="font-lora mt-1 leading-5 lg:leading-6 lg:text-lg xl:text-xl xl:leading-8 xl:mt-2">
                Our founder discusses the idea and process behind "Wrestle".
                Read on to learn more.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black text-white flex justify-center py-16">
        <div className="w-10/12 grid grid-cols-11 gap-10 sm:gap-16 sm:w-9/12 md:w-8/12">
          <div className="col-span-11 sm:col-span-5 rounded-sm">
            <img src={avatarImg} alt="avatarImg" className="rounded-2xl" />
          </div>
          <div className="col-span-11 text-left flex items-center p-6 pt-12  sm:col-span-6 sm:pt-0 sm:p-0">
            <div>
              <p className="text-2xl font-bold sm:text-4xl md:text-5xl">
                Wrestle. Wrestle. Wrestle. Wrestle. Wrestle. Wrestle. Wrestle.
                Wrestle. Wrestle!
              </p>
              <p className="mt-6 font-lora md:text-xl">
                Go play the Beta version of Wrestle in Herokind. It’s a simple
                turn-based fight game where your Humankind collectibles can
                wrestle monsters on different islands. It’s a bit like some
                old-school games we loved as kids, and we think you’ll enjoy it.
              </p>
              <button className="mt-8 text-xl py-4 px-6 rounded-full font-bold border-4 hover:shadow-md hover:translate-x-0.5 hover:-translate-y-0.5 transition bg-yellow-300 text-black border-yellow-500 hover:bg-lime-200">
                Wrestle Wrestle Wrestle!
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-28">
        <div className="w-4/5 grid grid-cols-7 gap-5 md:gap-8">
          <div className="col-span-7 md:col-span-4 md:order-last">
            <img src={fireImg} alt="fireImg" className="w-full max-h-full" />
          </div>
          <div className="col-span-7 md:col-span-3 text-left flex items-center justify-center">
            <div>
              <p className="font-bold text-5xl mt-10 text-center md:text-left md:text-6xl xl:text-7xl">
                Humankind
              </p>
              <p className="font-lora text-lg text-center md:text-left md:text-xl xl:text-2xl">
                stay human. be kind.
              </p>
              <div className="mt-8 flex gap-6">
                <img src={discordImg} alt="discordImg" className="w-8" />
                <img src={twiterImg} alt="twiterImg" className="w-8" />
                <img src={instagramImg} alt="instagramImg" className="w-8" />
                <img src={linkedinImg} alt="linkedinImg" className="w-8" />
                <img src={openSeaImg} alt="openSeaImg" className="w-8" />
              </div>
              <div className="flex flex-col mt-8 gap-3 lg:flex-row">
                <button className="py-2 px-5 rounded-full font-bold border-4 transition bg-black text-white border-black hover:bg-red-500 hover:shadow-md hover:translate-x-0.5 hover:-translate-y-0.5 lg:text-lg xl:py-3 xl:px-7">
                  ⚔️ Play Now!
                </button>
                <button className="text-black border-black py-2 px-5 rounded-full font-bold border-4 transition hover:shadow-md hover:translate-x-0.5 hover:-translate-y-0.5 lg:text-lg">
                  👾 Join our Discord
                </button>
              </div>
              <p className="mt-10 font-lora text-sm text-center lg:text-left">
                Humankind Industries Inc. 2023
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

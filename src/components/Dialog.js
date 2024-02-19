import cuteImg from "./../assets/images/Cute Monster with Pencil & Paper.webp";
import closeImg from "./../assets/images/close.png";
import Button from "./Button";

export default function Dialog() {
  return (
    <>
      <div className="bg-black bg-opacity-30 h-full w-full fixed top-0 z-50 flex items-center justify-center px-4">
        <div className="dialog-subscribe relative bg-white rounded-3xl px-5 py-6 text-center bg-opacity-100 flex flex-col items-center max-w-sm 2xl:max-w-lg 2xl:px-7 2xl:py-8">
          <img
            className="w-4 cursor-pointer absolute right-5 top-5"
            src={closeImg}
            alt="cerrar"
          />
          <img className="w-36 2xl:w-40" src={cuteImg} alt="cute monster" />
          <p className="font-semibold mt-5 sm:text-lg md:text-xl lg:text-2xl 2xl:text-3xl">
            Subscribe to humankind letters
          </p>
          <p className="mt-3 font-lora text-xs xl:text-sm">
            The creative pulse of design, tech, and art. Uncover inspiring
            profiles, curated trends, and uplifting stories from our community.
            By subscribing you accept our conditions.
          </p>
          <div className="w-full text-left mt-5 md:mt-6">
            <p className="text-sm font-semibold">Name</p>
            <input
              className="rounded-md border-2 border-black bg-transparent w-full px-3 py-2 mt-2 font-medium text-gray-700"
              type="text"
            />
          </div>
          <div className="w-full text-left mt-4 mb-4">
            <p className="text-sm font-semibold">Email</p>
            <input
              className="rounded-md border-2 border-black bg-transparent w-full px-3 py-2 mt-2 font-medium text-gray-700"
              type="text"
            />
          </div>
          <Button text="Continue" type="secondary"></Button>
        </div>
      </div>
    </>
  );
}

import { useForm } from "react-hook-form";
import cuteImg from "./../assets/images/Cute Monster with Pencil & Paper.webp";
import closeImg from "./../assets/images/close.png";
import Button from "./Button";
import axios from "axios";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import subscribeSchema from "./../schemas/subscribe";

const bodyToSend = {
  name: "Email Form",
  pageId: "64e758de3cded287d1b02f78",
  elementId: "d45ff41b-7ef0-97b8-19bf-1aa7f07362ff",
  source: "https://www.humankind.art/wrestle",
  test: false,
  dolphin: "false",
};

export default function Dialog({ isOpen = false, onClose }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(subscribeSchema) });

  const [createSubscription, setCreateSubscription] = useState({
    isLoading: false,
    isSuccess: false,
  });

  const onSubmit = (body) => {
    const payload = getPayload(body);
    fetchCreateSubscription(payload);
  };

  const getPayload = ({ name, email }) => {
    return {
      ...bodyToSend,
      "fields[name]": name,
      "fields[email]": email,
    };
  };

  const getBtnText = () => {
    return createSubscription.isLoading ? "Please Wait..." : "Continue";
  };

  const getStyleIsOpen = () => {
    return isOpen ? "flex" : "hidden";
  };

  const handleCloseDialog = () => {
    reset();
    setCreateSubscription({ ...createSubscription, isSuccess: false });
    onClose();
  };

  async function fetchCreateSubscription(payload) {
    setCreateSubscription({ ...createSubscription, isLoading: true });
    try {
      await axios.post(
        "https://webflow.com/api/v1/form/62b94e6b19cb4487d4ca3d43",
        payload,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Origin: "https://www.humankind.art",
            Referer: "https://www.humankind.art/",
          },
        }
      );
      setCreateSubscription({ ...createSubscription, isSuccess: true });
    } catch (error) {
      setCreateSubscription({ ...createSubscription, isSuccess: true });
    } finally {
    }
  }

  return (
    <>
      <form
        className={`${getStyleIsOpen()} bg-black bg-opacity-30 h-full w-full fixed top-0 z-50 items-center justify-center px-4`}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="dialog-subscribe relative bg-white rounded-3xl px-5 py-6 text-center bg-opacity-100 flex flex-col items-center max-w-sm 2xl:max-w-lg 2xl:px-7 2xl:py-8">
          <img
            className="w-4 cursor-pointer absolute right-5 top-5"
            src={closeImg}
            alt="cerrar"
            onClick={handleCloseDialog}
          />
          <img className="w-36 2xl:w-40" src={cuteImg} alt="cute monster" />
          <p className="font-semibold mt-5 sm:text-lg md:text-xl lg:text-2xl 2xl:text-3xl">
            Subscribe to humankind letters
          </p>
          <p className="mt-3 font-lora text-xs xl:text-sm 2xl:text-base">
            The creative pulse of design, tech, and art. Uncover inspiring
            profiles, curated trends, and uplifting stories from our community.
            By subscribing you accept our conditions.
          </p>
          {createSubscription.isSuccess ? (
            <p className="p-4 rounded-2xl bg-gray-500 bg-opacity-20 mt-5 text-xs font-lora xl:text-sm 2xl:text-base">
              Thanks for joining Humankind Letters – and remember to stay human,
              be kind.
            </p>
          ) : (
            <div className="w-full">
              <div className="w-full text-left mt-5 md:mt-6">
                <p className="text-sm font-semibold">Name</p>
                <input
                  className="rounded-md border-2 border-black bg-transparent w-full px-3 py-2 mt-2 font-medium text-gray-700 focus:outline-none focus:border-gray-400 focus:ring-gray-400"
                  level="text"
                  {...register("name")}
                />
                <p className="text-red-500 font-lora text-sm mt-2">
                  {errors.name?.message}
                </p>
              </div>
              <div className="w-full text-left mt-4 mb-4">
                <p className="text-sm font-semibold">Email</p>
                <input
                  className="rounded-md border-2 border-black bg-transparent w-full px-3 py-2 mt-2 font-medium text-gray-700 focus:outline-none focus:border-gray-400 focus:ring-gray-400"
                  level="text"
                  {...register("email")}
                />
                <p className="text-red-500 font-lora text-sm mt-2">
                  {errors.email?.message}
                </p>
              </div>
              <Button text={getBtnText()} level="secondary" type="submit" />
            </div>
          )}
        </div>
      </form>
    </>
  );
}

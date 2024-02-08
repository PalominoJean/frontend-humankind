export default function Button({
  text = "",
  type = "primary",
  size = "normal",
  onClick,
}) {
  const btnType = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    tertiary: "btn-tertiary",
  };
  const btnSize = {
    normal: "py-3 px-5 2xl:py-4 2xl:px-7",
    small: "py-2 px-4 2xl:px-5",
  };
  return (
    <button
      className={`rounded-full text-sm font-semibold btn transition hover:translate-x-0.5 hover:-translate-y-0.5 md:text-md xl:text-lg 2xl:text-xl ${btnType[type]} ${btnSize[size]}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

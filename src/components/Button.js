export default function Button({
  text = "",
  level = "primary",
  size = "normal",
  onClick,
  type = "submit",
}) {
  const btnLevel = {
    primary: "btn-primary",
    primaryDark: "btn-primary-dark",
    secondary: "btn-secondary",
    secondaryDark: "btn-secondary-dark",
    tertiary: "btn-tertiary",
  };
  const btnSize = {
    normal: "py-3 px-5 2xl:py-4 2xl:px-7",
    small: "py-2 px-4 2xl:px-5",
  };
  return (
    <button
      className={`rounded-full text-sm font-semibold btn transition hover:translate-x-0.5 hover:-translate-y-0.5 md:text-md xl:text-lg 2xl:text-xl ${btnLevel[level]} ${btnSize[size]}`}
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  );
}

export default function Button({
  text = "",
  type = "btn-primary",
  size = "normal",
  onClick,
}) {
  const sizeStyle = {
    normal: "py-3 px-5 2xl:py-4 2xl:px-7",
    small: "py-2 px-4 2xl:py-2 2xl:px-5",
  };
  return (
    <button
      className={`rounded-full text-sm font-semibold btn transition hover:translate-x-0.5 hover:-translate-y-0.5 md:text-md xl:text-lg 2xl:text-xl ${type} ${sizeStyle[size]}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

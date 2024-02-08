export default function Button({ text = "", type = "btn-primary" }) {
  return (
    <button
      className={`py-3 px-5 rounded-full font-semibold btn transition hover:translate-x-0.5 hover:-translate-y-0.5 xl:text-lg 2xl:text-xl 2xl:py-4 2xl:px-6 ${type}`}
    >
      {text}
    </button>
  );
}

import buenoImg from "./../../../assets/images/Bueno-logo.svg";

function Footer() {
  return (
    <div className="flex justify-center gap-2 py-5">
      <p className="text-sm font-lora">Powered by</p>{" "}
      <img src={buenoImg} alt="buenoImg" />
    </div>
  );
}

export default Footer;

import Button from "../../../components/Button";

function Section({ data }) {
  return (
    <>
      <div className="w-11/12 m-auto mt-28 lg:w-10/12 xl:w-8/12 2xl:w-7/12">
        <div className="grid grid-cols-12 flex-col gap-4 border-4 card-shadow border-black rounded-3xl p-4 transition sm:flex-row sm:p-5 sm:gap-6 lg:gap-8 2xl:gap-10">
          <div className="col-span-12 sm:col-span-6">
            <img src={data.image} className="rounded-lg" alt="playImage" />
          </div>
          <div className="text-left flex items-center col-span-12 sm:col-span-6">
            <div>
              <p className="text-2xl font-bold mt-3 mb-8 md:text-4xl xl:text-5xl">
                {data.text.title}
              </p>
              {data.text.paragraph.map((item, index) => {
                return (
                  <p
                    className="mt-4 font-lora md:text-lg xl:text-xl 2xl:text-2xl 2xl:leading-9"
                    key={index}
                  >
                    {item}
                  </p>
                );
              })}
              <div className="flex mt-8 flex-col gap-3 items-center md:items-start lg:flex-row">
                {data.button.map(({ text, type }, index) => {
                  return <Button text={text} type={type} key={index}></Button>;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section;

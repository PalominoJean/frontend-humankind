import playImage from './../../../assets/images/646fb24a3ad2f2ac41afd67b_herokind-adventure-lores-p-800.png';

function Section({ data }) {
  return (
    <>
      <div className="w-2/3 m-auto mt-28">
        <div className="flex gap-4 border-4 card-shadow border-black rounded-3xl p-6 transition ">
          <div className="w-1/2">
            <img src={playImage} className="rounded-lg" alt="playImage" />
          </div>
          <div className="w-1/2 text-left flex items-center">
            <div>
              <p className="text-4xl font-bold">{data.text.title}</p>
              {data.text.paragraph.map((item, index) => {
                return (
                  <p className="text-xl mt-6 font-lora" key={index}>
                    {item}
                  </p>
                );
              })}
              {data.button.map((item, index) => {
                console.log(item, 'el item');
                return (
                  <button
                    className={`mt-8 text-xl py-4 px-6 rounded-full font-bold border-4 hover:shadow-md hover:translate-x-0.5 hover:-translate-y-0.5 transition ${item.class} `}
                    key={index}
                  >
                    {item.icon} {item.text}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section;

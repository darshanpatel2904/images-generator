import Image from "next/image";
import { useState } from "react";

export default function HowtoGenerate() {
  const steps = [
    {
      label: "Step 1",
      no: 1,
      image: "step-1.png",
      desc: "Type a few words into the AI image generator. Don’t be afraid to think outside the box! You can also add style keywords  such as sketch, cartoon and digital art.",
    },
    {
      label: "Step 2",
      no: 2,
      image: "step-2.png",
      desc: "Select how many images you want to genrate",
    },
    {
      label: "Step 3",
      no: 3,
      image: "step-3.png",
      desc: "Select the size of the images you want to genrate",
    },
  ];
  const [number, setNumber] = useState(1);
  const handleClick = (key) => {
    setNumber(key);
  };
  return (
    <div className="flex flex-col justify-center items-center p-10 lg:p-28 h-2/3">
      <div className="text-5xl font-bold leading-none sm:text-6xl">
        How to generate AI images
      </div>
      <div className="flex flex-col gap-10">
        <div className="flex justify-center items-center">
          {steps.map((obj, key) => {
            return (
              <div
                className="flex justify-center items-center flex-col"
                key={key}
              >
                <span
                  className={`flex justify-center items-center w-16 h-16 ${
                    key + 1 === number ? "bg-violet-400" : "bg-violet-300"
                  } rounded-full m-10 mb-3 cursor-pointer text-white`}
                  onClick={() => {
                    handleClick(obj.no);
                  }}
                >
                  {obj.no}
                </span>
                <p>{obj.label}</p>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center items-center">
          {steps.map((obj, key) => {
            return (
              <div className="flex flex-col justify-center items-center">
                <div
                  className={`justify-center items-center ${
                    key + 1 === number ? "flex" : "hidden"
                  } w-2/3`}
                  key={key}
                >
                  <Image src={require(`/public/${obj.image}`)} alt={"image"} />
                </div>
                <div
                  className={`justify-center items-center ${
                    key + 1 === number ? "flex" : "hidden"
                  } w-2/3 font-medium text-xl`}
                >
                  {obj.desc}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

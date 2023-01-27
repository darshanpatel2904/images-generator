import { useState } from "react";

export default function HowtoGenerate() {
  const steps = [{ label: "Step 1", no: 1 }, { label: "Step 2", no: 2 }, { label: "Step 3", no: 3 }];
  const [number, setNumber] = useState(1);
  const handleClick = (key) => {
    setNumber(key);
  };
  return (
    <div className="flex flex-col justify-center items-center p-10 lg:p-28">
      <div className="text-5xl font-bold leading-none sm:text-6xl">
        How to generate AI images
      </div>
     <div className="flex justify-center items-center">
      {steps.map((obj,key)=>{
        return(
          <div className="flex justify-center items-center flex-col">
          <span className={`flex justify-center items-center w-16 h-16 ${key+1===number ? 'bg-violet-400' : 'bg-violet-300'} rounded-full m-10 mb-3 cursor-pointer text-white`} onClick={()=>{handleClick(obj.no)}}>{obj.no}</span>
          <p>{obj.label}</p>
          </div>
        )
      })}
     </div>
    </div>
  );
}

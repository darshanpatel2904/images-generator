import Image from "next/image";
import { useState } from "react";

export default function ImageGenerator() {
  const sizes = ["1024x1024", "512x512", "256x256"];
  const [number, setNumber] = useState(1);
  const [size, setSize] = useState("256x256");
  const handleClickNumber = (key) => {
    setNumber(key);
  };
  const handleClickSize = (key) => {
    setSize(key);
  };
  return (
    <section className="container flex flex-col justify-between items-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:px-6 xl:px-28">
		<div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
  <div className="w-full max-w-xl space-y-2">
    <div>
      <p className="text-5xl font-bold leading-none sm:text-5xl">
      Ai Image Generate
      </p>
    </div>
    <form className="mt-8 space-y-6" action="#" method="POST">
      <input type="hidden" name="remember" defaultValue="true" />
      <div className="-space-y-px rounded-md shadow-sm">
          <p htmlFor="propmt" className="my-8 text-lg sm:my-5">
            Prompt
          </p>
          <input
            name="prompt"
            type="text"
            required
            className="relative block w-full h-20 rounded-md border border-violet-300 px-3 py-2 text-gray-600 placeholder-gray-400 focus:z-10 focus:border-violet-400 focus:outline-none focus:ring-violet-400 sm:text-sm"
            placeholder="Describe what you want to see with phrases, and separate them with commas."
          />
       </div>
       <p className="text-lg">Number Of Images</p>
       <div className="flex justify-center items-center">
      {Array.from({length:10}).map((_,key)=>{
        return(
          <div className="flex justify-center items-center flex-col">
          <span className={`flex justify-center items-center w-9 h-9 m-1 ${key+1===number ? 'bg-violet-400' : 'bg-violet-300'} rounded-full cursor-pointer text-white`} onClick={()=>{handleClickNumber(key+1)}}>{key+1}</span>
          </div>
        )
      })}
     </div>
     <p className="text-lg">Size</p>
       <div className="flex justify-center items-center gap-5">
      {sizes.map((no,key)=>{
        return(
          <div className="flex justify-center items-center flex-col">
          <span className={`flex justify-center items-center w-28 h-9 m-1 ${no===size ? 'bg-violet-400' : 'bg-violet-300'} rounded-lg cursor-pointer text-white`} onClick={()=>{handleClickSize(no)}}>{no}</span>
          </div>
        )
      })}
     </div>
      <div>
        <button
          type="submit"
          className="px-8 py-3 text-lg font-semibold rounded bg-violet-400 text-white"
        >
          Generate
        </button>
      </div>
    </form>
  </div>
</div>

		<div className="container flex items-center justify-center max-w-md">
			<Image src={require("/public/img-DCOx34g2npi0VFuIS4kh4G9k.png")} alt="image"/>
		</div>
	</section>
  )
}

import Image from "next/image";
import { useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { account } from "./config";
import { useRouter } from "next/router";
import { Configuration, OpenAIApi } from "openai";
import { saveAs } from 'file-saver'

export default function ImageGenerator() {
  const configuration = new Configuration({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  });

  const openai = new OpenAIApi(configuration);

  const sizes = ["1024x1024", "512x512", "256x256"];
  const [prompts, setPrompt] = useState("");
  const [number, setNumber] = useState(1);
  const [size, setSize] = useState("256x256");
  const [images, setImages] = useState({});
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const handleClickNumber = (key) => {
    setNumber(key);
  };
  const handleClickSize = (key) => {
    setSize(key);
  };
  const router = useRouter();

  const apiCall = async () => {
    const response = await openai.createImage({
      prompt: prompts,
      n: parseInt(number),
      size: size,
    });
    console.log(response.data.data)
    setImages(response.data.data);
    onOpenModal();
  };
  const postRequest = async (prompts, number, size) => {
    const getData = account.get();
    getData.then(
      function (response) {
        console.log(response);
        apiCall();
      },
      function (error) {
        console.log(error);
        router.push("/login");
      }
    );
  };

  const handleDownload = () =>{

   console.log(images)

    Promise.all(
      images.map((obj, index) =>
        fetch(obj)
          .then(response => {
          
  
            return response.blob()
              .then(blob => saveAs(blob,  `image_${index}_${Date.now()}.png`));
          }
          )
      )
    );
  }
  return (
    <section
      id="generate"
      className="container flex flex-col justify-between items-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:px-6 xl:px-28"
    >
      <div className="container flex items-center justify-center max-w-xl">
        <Image
          src={require("/public/img-DCOx34g2npi0VFuIS4kh4G9k.png")}
          alt="image"
        />
      </div>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-xl space-y-2">
          <div>
            <p className="text-5xl font-bold leading-none sm:text-5xl">
              Ai Image Generate
            </p>
          </div>
          <form className="mt-8 space-y-6" action="javascript:void(0);">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <p htmlFor="propmt" className="my-8 text-lg sm:my-5">
                Prompt
              </p>
              <input
                name="prompt"
                value={prompts}
                type="text"
                required
                className="relative block w-full h-20 rounded-md border border-violet-300 px-3 py-2 text-gray-600 placeholder-gray-400 focus:z-10 focus:border-violet-400 focus:outline-none focus:ring-violet-400 sm:text-sm"
                placeholder="Describe what you want to see with phrases, and separate them with commas."
                onChange={(e) => {
                  setPrompt(e.target.value);
                }}
              />
            </div>
            <p className="text-lg">Number Of Images</p>
            <div className="flex justify-center items-center">
              {Array.from({ length: 10 }).map((_, key) => {
                return (
                  <div
                    className="flex justify-center items-center flex-col"
                    key={key}
                  >
                    <span
                      className={`flex justify-center items-center w-9 h-9 m-1 ${
                        key + 1 === number ? "bg-violet-400" : "bg-violet-300"
                      } rounded-full cursor-pointer text-white`}
                      onClick={() => {
                        handleClickNumber(key + 1);
                      }}
                    >
                      {key + 1}
                    </span>
                  </div>
                );
              })}
            </div>
            <p className="text-lg">Size</p>
            <div className="flex justify-center items-center gap-5">
              {sizes.map((no, key) => {
                return (
                  <div
                    className="flex justify-center items-center flex-col"
                    key={key}
                  >
                    <span
                      className={`flex justify-center items-center w-28 h-9 m-1 ${
                        no === size ? "bg-violet-400" : "bg-violet-300"
                      } rounded-lg cursor-pointer text-white`}
                      onClick={() => {
                        handleClickSize(no);
                      }}
                    >
                      {no}
                    </span>
                  </div>
                );
              })}
            </div>
            <div>
              <button
                className="px-8 py-3 text-lg font-semibold rounded bg-violet-400 text-white"
                onClick={() => {
                  postRequest(prompts, number, size);
                }}
              >
                Generate
              </button>
            </div>
          </form>
        </div>
      </div>

      <div>
        <Modal open={open} onClose={onCloseModal} center>
          <div className="flex justify-center items-center m-10">
            <div className="flex justify-center items-center h-auto w-auto">
              <SimpleImageSlider
                width={"40em"}
                height={"40em"}
                images={images}
                showBullets={true}
                showNavs={true}
              />
            </div>
          </div>
          <div className="flex justify-end gap-10">
            <button
              className="px-8 py-3 text-lg font-semibold rounded text-violet-400 border-violet-400 border-2"
              onClick={onCloseModal}
            >
              Close
            </button>
            <button className="px-8 py-3 text-lg font-semibold rounded bg-violet-400 text-white" onClick={()=>handleDownload()}>
              Download
            </button>
          </div>
        </Modal>
      </div>
    </section>
  );
}

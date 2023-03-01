import React from 'react'
import Faq from "react-faq-component";

export default function faq() {
  const data = {
    // title: "FAQ (How it works)",
    rows: [
      {
        title: "How Long Does it takes to Generate pictures ?",
        content: `Our image genrator has been trained for a long time. Powered by AI alforithms and trained many times for super realistic images . it can give you an amazing image within 30 seconds.`,
      },
      {
        title: "Any tips to Create Better Images for Text prompts  ",
        content: `1. The more image description you input, The amazing picture you get                                                     2. Input more detail descriptions in vocabulary,Phrases, Short Sentences, and separate them with commas. Donot use long sentences  `,
      },
      {
        title: "What's the Standard Image Size Support ?",
        content: `Our AI image generator from text support 256-1024 width & length in this version`,
      },
      {
        title: "Can i create Multiple Images at Once ?",
        content: `The answer is yes. Our Ai image generator supports Multiple images created at once. You can choose the the best one from them to use. `,
      },
      {
        title: "Can You Guarantee Unique Creations? ",
        content: `The answer is yes. Our Ai image generator creates the sa,e image from the same description. Ai image creator user the algorithm to create a new image based on your description every time. And you can create unlimited images `,
      },
    ],
  };
  return (
    <div className='h-screen m-10 mt-20'>
      <Faq
          data={data}
          styles={{
            bgColor: "#ffffff",
            titleTextColor: "#000000",
            rowTitleColor: "#000000",
            rowContentColor: "#000000",
            arrowColor: "#000000",
            titleTextSize: "48px",
            rowTitleTextSize: "1.5rem",
            rowContentTextSize: "1.3rem",
            rowContentPaddingTop: "10px",
            rowContentPaddingBottom: "10px",
            rowContentPaddingLeft: "50px",
            rowContentPaddingRight: "150px",
            transitionDuration: "0.4s",
            timingFunc: "ease",
            fontstyle: "Open Sans",
          }}
        />
    </div>
  )
}

import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'

export default function HomeHero() {
	const router = useRouter();
  return (
	<section className="container flex flex-col justify-between items-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:px-6 xl:px-28">
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-5xl font-bold leading-none sm:text-6xl">Reimagine your imagination with the AI Image Generator</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12">Looking for creative ways to amplify your designs? Flex your artistic muscles with the Picsart AI image generator! 
			</p>
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				<button className="px-8 py-3 text-lg font-semibold rounded bg-violet-400 text-white" onClick={()=>router.push("#generate")}>Generate</button>
			</div>
		</div>
		<div className="container flex items-center justify-center max-w-xl">
			<Image src={require("/public/Screenshot-2023-01-23-at-171726-transformed.png")} alt="image"/>
		</div>
	</section>
  )
}

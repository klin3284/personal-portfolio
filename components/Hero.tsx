import React from "react";
import Image from "next/image";
import SocialBar from "@components/SocialBar";

const Hero = () => (
  <div className="flex py-20 px-5 rounded-2xl items-center">
    <Image
      src="/pfp.jpg"
      alt="Kenny's Hero Image"
      width={480}
      height={600}
      layout="intrinsic"
      className="rounded-3xl"
    />

    <div className="flex flex-col items-center md:items-start mt-5 md:mt-0 md:ml-20 gap-2">
      <h1 className="font-bold text-2xl md:text-6xl relative md:mb-2">
        Hi, I&apos;m <span className="text-blue-400">Kenny Lin!</span>
      </h1>
      <h2 className="font-bold text-md md:text-2xl">
        Junior Software Engineer
      </h2>
      <div className="w-64 md:min-w-full font-normal text-base md:text-xl text-slate-400 text-center md:text-left">
        I&apos;m a recent graduate from Northeastern University with a Combined
        BS in Computer Engineering and Computer Science.
      </div>
      <div className="mt-5 md:mt-10">
        <SocialBar />
      </div>
    </div>
  </div>
);

export default Hero;

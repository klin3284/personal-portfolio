import React from "react";
import SocialBar from "./socialBar";

const Hero = () => (
  <div className="flex flex-col xl:flex-row py-10 md:py-20 px-5 rounded-2xl items-center justify-center gap-20">
    <img
      src="/pfp.jpg"
      alt="Kenny's Hero Image"
      className="rounded-3xl md:max-w-xl"
    />

    <div className="flex flex-col items-center md:items-start gap-2">
      <h1 className="font-bold text-3xl sm:text-4xl lg:text-6xl relative md:mb-2">
        Hi, I&apos;m <span className="text-blue-400">Kenny Lin!</span>
      </h1>
      <h2 className="font-bold text-xl sm:text-2xl">
        Junior Software Engineer
      </h2>
      <div className="md:w-64 md:min-w-full font-normal text-base sm:text-lg lg:text-xl text-slate-400 text-center md:text-left">
        I&apos;m a recent graduate from Northeastern University with a Combined
        BS in Computer Engineering and Computer Science.
      </div>
      <div className="mt-5 md:mt-8">
        <SocialBar size={40} />
      </div>
    </div>
  </div>
);

export default Hero;

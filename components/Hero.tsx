import React from "react";
import Image from "next/image";
import SocialBar from "@components/SocialBar";

const Hero = () => {
  return (
    <div className="flex py-20 px-5 rounded-2xl items-center">
      <Image
        src="/pfp.jpg"
        alt="Kenny's Hero Image"
        width={480}
        height={600}
        style={{ borderRadius: "8%" }}
      />

      <div className="relative items-center flex flex-col ml-20 gap-2">
        <h1 className="font-bold text-6xl relative mb-2">
          Hi, I'm <span style={{ color: "lightblue" }}>Kenny Lin!</span>
        </h1>
        <h2 className="font-bold text-base text-2xl">
          Junior Software Engineer
        </h2>
        <h2 className="font-normal text-base text-slate-400 text-center text-xl">
          I am a recent graduate from Northeastern with a <br />
          Combined BS in Computer Engineering and Computer Science.
        </h2>
        <div className="mt-10">
          <SocialBar />
        </div>
      </div>
    </div>
  );
};

export default Hero;

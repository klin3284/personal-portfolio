import React from 'react'
import Image from 'next/image';
import { Meteors } from "./ui/meteors";

const Hero = () => {
    return (
        <div className="relative px-4 py-20 overflow-hidden rounded-2xl flex flex-col justify-center items-center">
            <Image src="/pfp_cropped.png" alt="Kenny's Hero Image" width={200} height={200} style={{ borderRadius: "50%" }} />

            <h1 className="font-bold text-4xl relative mb-2">
                Kenny Lin
            </h1>

            <div className="relative items-center flex flex-col">
                <h2 className="font-bold text-base mb-0">
                    Junior Software Engineer
                </h2>
                <h2 className="font-normal text-base text-slate-400 text-center">
                    Northeastern Unversity 2024<br />
                    Computer Engineering and Computer Science
                </h2>

            </div>
            <Meteors number={20} />
        </div>
    )
}

export default Hero
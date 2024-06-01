import React from 'react'
import Image from 'next/image';
import { Meteors } from "./ui/meteors";

const Hero = () => {
    return (
        <div className='relative p-0.5'>
            <div className="relative px-4 py-20 w-[50vw] h-full overflow-hidden rounded-2xl flex flex-col justify-center items-center">
                <div style={{ width: '200px', height: '200px', position: 'relative', zIndex: 1, marginBottom: 20 }}>
                    <Image src="/pfp_cropped.png" alt="Kenny's Hero Image" layout="fill" objectFit="cover" style={{ borderRadius: "50%" }} />
                </div>

                <h1 className="font-bold text-4xl text-white relative z-50 mb-2">
                    Kenny Lin
                </h1>

                <div className="relative items-center flex flex-col">
                    <h2 className="font-bold text-base text-white mb-0">
                        Junior Software Engineer
                    </h2>
                    <h2 className="font-normal text-base text-slate-400 text-center">
                        Northeastern Unversity 2024<br/>
                        Computer Engineering and Computer Science
                    </h2>

                </div>

                {/* Meaty part - Meteor effect */}
                <Meteors number={20} />
            </div>
        </div>
    )
}

export default Hero
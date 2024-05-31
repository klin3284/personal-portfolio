import React from 'react'
import { Meteors } from "./ui/meteors";

const Hero = () => {
    return (
        <div className='relative p-0.5'>
            <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
                <h1 className="font-bold text-xl text-white mb-4 relative z-50">
                    Hi, I&apos;m Kenny
                </h1>

                <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
                    Here is me experimenting with this meteor effect from Aceternity
                </p>

                {/* Meaty part - Meteor effect */}
                <Meteors number={20} />
            </div>
        </div>
    )
}

export default Hero
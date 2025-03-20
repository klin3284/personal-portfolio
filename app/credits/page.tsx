"use client";

import React from "react";
import Icon from "@components/icons";

const Credits: React.FC = () => (
  <div className="flex flex-col items-center justify-center pt-12 px-8 2xl:px-0">
    <div id="credit" className="mx-auto max-w-7xl lg:px-6 w-full">
      <div className="relative flex flex-col items-center my-14">
        <button
          onClick={() => {
            window.location.href = "/";
          }}
          className="sm:block hidden absolute left-0"
        >
          <Icon name="Home" size={45} />
        </button>
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-bold sm:text-5xl">Credits</h1>
          <h4 className="text-sm sm:text-xl font-semibold text-blue-400">
            Here are the resources I used to build it.
          </h4>
        </div>
      </div>

      <div className="flex flex-col items-center mb-10 sm:mb-20 gap-x-10 gap-y-8">
        <ul className="text-base sm:text-xl list-disc list-outside mb-14 space-y-2">
          <li>Giphy - Beemo Dancing Gif</li>
          <li>GoZwift - Lucky Cat Gif</li>
          <li>National Arts Council Singapore - DragonBoat Gif</li>
          <li>MasterChef Junior - Gordon Ramsay Gif</li>
          <li>Asian American Center Northeastern University - AAC Logo</li>
          <li>
            Massachusetts College of Pharmacy and Health Science - MCPHS Logo
          </li>
          <li>Avidyne - Avidyne Logo</li>
          <li>React Icons - Icons</li>
          <li>Ulanovsky, Matas, del Peral, Les Bailly - Montserrat Font</li>
          <li>Google Fonts - Roboto Font</li>
          <li>Vercel - Hosting and Analytics Service</li>
          <li>Resend - Contact Me Emailing Service</li>
          <li>Special thanks to my friends for their feedback and support.</li>
        </ul>
      </div>
    </div>
  </div>
);

export default Credits;

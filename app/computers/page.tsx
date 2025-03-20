"use client";

import React from "react";
import Icon from "@components/icons";

const Computers: React.FC = () => (
  <div className="flex flex-col items-center justify-center pt-12 px-8 2xl:px-0">
    <div id="computers" className="mx-auto max-w-7xl lg:px-6 w-full">
      <div className="relative flex flex-col items-center my-14">
        <button
          onClick={() => {
            window.location.href = "/";
          }}
          className="sm:block hidden absolute left-0"
        >
          <Icon name="Home" size={45} />
        </button>

        <div className="flex flex-row gap-0 sm:gap-5 items-center mb-10 sm:mb-15">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-bold sm:text-5xl">
              Computers I've Built
            </h1>
            <h4 className="text-sm sm:text-xl font-semibold text-blue-400">
              A personal hobby of mine building computers for friends and family
            </h4>
          </div>
          <img
            src="./beemo.gif"
            alt="Dancing Beemo from Adventure Time"
            className="w-20 h-20 sm:w-24 md:h-24"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row mb-10 sm:mb-20 gap-x-10 gap-y-8">
        <div className="flex flex-col md:w-2/3 pr-5">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-400 mb-2">
            My Passion for Building Computers
          </h2>
          <p className="text-md sm:text-xl mb-6">
            Over the years, I've built{" "}
            <span className="text-purple-400">
              six PCs for friends and family.{" "}
            </span>
            My passion for building computers stems from the joy of
            personalizing my own workstation and helping others create theirs.
            The first PC I built was for a friend during my sophomore year of
            high school. At the time, I couldn't afford a new PC due to the
            crypto-mining boom, which drove part prices sky-high, so I decided
            to build one for my friend instead. I spent hours researching parts
            and watching tutorials to ensure I didn't mess up.{" "}
            <span className="mt-2 block" />I adore the process of picking parts
            on{" "}
            <a
              href="https://pcpartpicker.com/user/kennylin2830/saved/#view=QvtvZL"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 underline hover:text-purple-700"
            >
              PCPartPicker
            </a>
            , harmonizing aesthetics and performance, and ensuring every build
            is tailored to the user's needs. Building PCs has become a creative
            outlet for me, combining technical knowledge with design to craft
            unique and functional machines.
          </p>
        </div>
        <div className="relative max-w-xs lg:max-w-none mx-auto lg:mx-0 md:w-1/3">
          <img
            src="./my-pc.jpg"
            alt="My Personal PC"
            className="w-full h-full rounded-3xl z-20 relative border-4 border-gray-300"
          />
          <div className="absolute inset-0 bg-purple-500/70 rotate-6 rounded-3xl z-10">
            {" "}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Computers;

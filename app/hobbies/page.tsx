"use client";

import React from "react";
import Icon from "@components/icons";

const Hobbies: React.FC = () => (
  <div className="flex flex-col items-center justify-center pt-12 px-8 2xl:px-0">
    <div id="hobbies" className="mx-auto max-w-7xl lg:px-6 w-full">
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
              What I Define as Fun
            </h1>
            <h4 className="text-sm sm:text-xl font-semibold text-blue-400">
              My hobbies and interests (excluding coding of course)
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
          <h4 className="text-2xl md:text-3xl font-bold text-blue-400 mb-6">
            When I'm not coding, you'll find me...
          </h4>
          <ul className="text-base sm:text-xl list-disc list-outside mb-14 space-y-4">
            <li>
              I love creating modern comfort food for dinner parties with
              friends. Check out my recent recipes and hosting in my{" "}
              <a
                href="/bamboo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 underline hover:text-purple-700"
              >
                food blog
              </a>
              .
            </li>
            <li>
              Tennis captured my heart a few years ago; inspired by Roger
              Federer's elegant yet aggressive style, I've developed a powerful
              serve and forehand (though my one-handed backhand is still a work
              in progress).
            </li>
            <li>
              I'm also dedicated to dragonboat racing, trying to compete
              annually at the Boston Dragonboat Festival where my team achieved
              an impressive 54-second 200m sprint!
            </li>
            <li>
              My technical side extends to building computers, having assembled
              six systems for friends and family.
            </li>
            <li>
              Basketball has been a lifelong passion. I'm a devoted NY Knicks
              fan praying for a championship in my lifetime.
            </li>
            <li>
              I love to travel and explore new cultures. My next destination is
              Japan where I plan to visit the Kitchenware District, Kappabashi
              Street, and try authentic udon noodles.
            </li>
          </ul>
        </div>
        <div className="relative max-w-xs lg:max-w-none mx-auto lg:mx-0 md:w-1/3">
          <img
            src="./tennis-wilson.jpg"
            alt="Playing tennis at SoHo Wilson Store"
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

export default Hobbies;

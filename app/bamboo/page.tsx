"use client";

import React from "react";
import Icon from "@components/icons";
import ScrollToSectionButton from "@components/layout/scrollToSectionButton";
import InfiniteMovingImages from "./infiniteMovingImages";

const FOOD_IMAGES = [
  "/foods/bb-04-24-24.jpeg",
  "/foods/braised-beef-summer-squash.jpg",
  "/foods/curry-katsu.jpeg",
  "/foods/curry-udon.jpeg",
  "/foods/dorm-dinner-22.JPG",
  "/foods/july04-prime-rib.JPG",
  "/foods/pizza.jpeg",
  "/foods/steak-spaghetti.jpeg",
];

const Bamboo: React.FC = () => (
  <div className="flex flex-col items-center justify-center pt-12 px-8 2xl:px-0">
    <div id="bamboo-bistro" className="mx-auto max-w-7xl lg:px-6 w-full">
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
            <h2 className="text-3xl font-bold sm:text-5xl">
              Welcome to Bamboo Bistro
            </h2>
            <h4 className="text-sm sm:text-xl font-semibold text-blue-400">
              A student-run dining experience at Northeastern University
            </h4>
          </div>
          <img
            src="./lucky_cat.gif"
            alt="Description of GIF"
            className="w-20 h-20 sm:w-24 md:h-24"
          />
        </div>

        <div className="flex flex-col md:flex-row mb-10 sm:mb-20 gap-x-10 gap-y-8">
          <div className="flex flex-col md:w-2/3 pr-5">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-400 mb-2">
              Our Mission
            </h2>
            <p className="text-md sm:text-xl mb-6">
              We are an{" "}
              <span className="text-purple-400">exclusive, invite-only</span>{" "}
              dining experience{" "}
              <span className="text-purple-400">
                {" "}
                hosted in yours truly College dorm.
              </span>{" "}
              We cook to appreciate our friends and share the joy of good
              company. When invited, prepare for an evening of innovative
              cuisine and warm hospitality. We prepare comforting, home-cooked
              meals and try our our hand at sophisticated, high-end dishes. At
              Bamboo Bistro,{" "}
              <span className="text-purple-400">
                friendship is our secret ingredient
              </span>
              .
            </p>
          </div>
          <div className="relative max-w-xs lg:max-w-none mx-auto lg:mx-0 md:w-1/3">
            <img
              src="./ramsay-approval.gif"
              alt="Gordon Ramsay Approval GIF"
              className="w-full h-full rounded-3xl z-20 relative border-4 border-gray-300"
            />
            <div className="absolute inset-0 bg-purple-500/70 rotate-6 rounded-3xl z-10">
              {" "}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row mb-10 sm:mb-20 gap-x-14 gap-y-8">
          <div className="relative max-w-xs lg:max-w-none mx-auto lg:mx-0 md:w-1/3">
            <img
              src="./hampton-grill.jpg"
              alt="Gordon Ramsay Approval GIF"
              className="w-full h-full rounded-3xl z-20 relative border-4 border-gray-300 object-contain"
            />
            <div className="absolute inset-0 bg-orange-500/70 rotate-6 rounded-3xl z-10"></div>
          </div>
          <div className="flex flex-col md:w-2/3 pr-5 sm:mt-14 mt-0">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-400 mb-2">
              Meet the Chef
            </h2>
            <p className="text-md sm:text-xl mb-6">
              From childhood, I would camp around in the kitchen, watching my
              family cook and grabbing a early-dinner snack. One summer,{" "}
              <span className="text-purple-400">I worked as a line cook</span>{" "}
              at my dad's restaurant. This experience gave me a taste of the
              <span className="text-purple-400">
                {" "}
                fast-paced, high-pressure environment{" "}
              </span>
              of a professional kitchen, solidifying my desire to take my
              culinary skils further. Now, as the sole chef at Bamboo Bistro, I
              draw inspiration from my favorite cuisines -{" "}
              <span className="text-purple-400">
                Chinese, Korean, and French
              </span>{" "}
              - to create unique and exciting dishes.
            </p>

            <div className="flex flex-row gap-4 mt-4">
              <a
                href="/menu_04-24-24.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg">
                  <Icon name="Bamboo" size={20} />
                  <span className="font-medium text-md">Recent Menu</span>
                </button>
              </a>
              <div className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg">
                <Icon name="Mail" size={20} />
                <ScrollToSectionButton
                  sectionId="contactMe"
                  label="Contact Me"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-xl mb-10 sm:mb-15">
          <img src="./cutlery-line.png" alt="Cutlery Divider" />
        </div>

        <InfiniteMovingImages
          images={FOOD_IMAGES}
          speed="normal"
          pauseOnHover
        />
      </div>
    </div>
  </div>
);

export default Bamboo;

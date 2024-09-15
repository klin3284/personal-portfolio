"use client";

import React, { useState, useEffect } from "react";
import Skeleton from "@mui/material/Skeleton";
import InfiniteMovingImages from "./infiniteMovingImages";

const Bamboo: React.FC = () => {
  const [foodImages, setFoodImages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchFoodImages = async () => {
      const response = await fetch("/api/foods");
      const filenames = await response.json();
      setFoodImages(filenames);
      setIsLoading(false);
    };

    fetchFoodImages();
  }, []);

  return (
    <div id="bamboo-bistro" className="mx-auto max-w-7xl lg:px-6 w-full">
      <div className="flex flex-col items-center my-14">
        <div className="flex flex-row gap-5 items-center mb-10 sm:mb-15">
          <div className="flex flex-col items-center">
            <h2 className="text-3xl font-bold sm:text-5xl">
              Welcome to Bamboo Bistro
            </h2>
            <h4 className="text-lg sm:text-xl font-semibold text-blue-400">
              A student-run dining experience at Northeastern University
            </h4>
          </div>
          <img
            src="./lucky_cat.gif"
            alt="Description of GIF"
            className="w-16 h-16 sm:w-24 md:h-24"
          />
        </div>

        <div className="flex flex-col md:flex-row mb-10 sm:mb-20 gap-x-10">
          <div className="flex flex-col md:w-2/3 pr-5">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-400 mb-2">
              Our Mission
            </h2>
            <p className="text-md sm:text-xl mb-6">
              We are an{" "}
              <span className="text-purple-500">exclusive, invite-only</span>{" "}
              dining experience hosted in yours truly College dorm. We cook to
              appreciate our friends and share the joy of good company. When
              invited, prepare for an evening of innovative cuisine and warm
              hospitality. We prepare comforting, home-cooked meals and try our
              our hand at sophisticated, high-end dishes. At Bamboo Bistro,{" "}
              <span className="text-purple-500">
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
            <div className="absolute inset-0 bg-purple-500/70 rotate-6 rounded-3xl z-10"></div>
          </div>
        </div>

        <h4 className="text-2xl md:text-3xl font-bold text-blue-400">
          Take a look at our dishes
        </h4>
        {isLoading ? (
          <div className="flex flex-row w-full items-center gap-10 p-4">
            <Skeleton
              variant="rectangular"
              width={320}
              height={320}
              className="bg-gray-500 rounded-2xl"
            />
            <Skeleton
              variant="rectangular"
              width={320}
              height={320}
              className="bg-gray-500 rounded-2xl"
            />
            <Skeleton
              variant="rectangular"
              width={320}
              height={320}
              className="bg-gray-500 rounded-2xl"
            />
            <Skeleton
              variant="rectangular"
              width={160}
              height={320}
              className="bg-gray-500 rounded-2xl"
            />
          </div>
        ) : (
          <InfiniteMovingImages
            images={foodImages}
            speed="normal"
            pauseOnHover
          />
        )}
      </div>
    </div>
  );
};

export default Bamboo;

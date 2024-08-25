import React from "react";

const Introduction = () => (
  <>
    <div className="flex flex-row gap-5 mb-8 items-center">
      <h2 className="text-4xl font-bold sm:text-6xl">Hey There!</h2>
      <img
        src="./lucky_cat.gif"
        alt="Description of GIF"
        className="w-16 h-16 sm:w-24 md:h-24"
      />
    </div>
    <p className="text-md sm:text-xl mb-6">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor
      <span className="text-purple-400"> incididunt ut labore. </span> et dolore
      magna aliqua. Ut enim ad minim veniam, quis.
    </p>
    <p className="text-md sm:text-xl mb-6">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor
      <span className="text-purple-400"> incididunt ut labore. </span>
      Ut enim ad minim veniam nostrud exercitation ullamco laboris nisi ut.
    </p>
    <p className="text-md sm:text-xl">
      Porem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labo aliquip ex ea commodo consequat.
    </p>
  </>
);

export default Introduction;

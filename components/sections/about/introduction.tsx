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
      I'm a freshly graduated Husky with a passion for building reliable and
      user-friendly software.
    </p>
    <p className="text-md sm:text-xl mb-6">
      While my expertise spans the full stack, I would say I'm a backend
      enthusiast at heart. My programming languages of choice are{" "}
      <span className="text-purple-400">TypeScript, Python, and C++</span> ,
      although I'm always eager to learn new tools and technologies.
    </p>
    <p className="text-md sm:text-xl">
      My co-op experience at MCPHS involved Postman and xUnit API testing and
      database querying, while at Avidyne, I focused on achieving high code
      coverage through unit testing in C/C++ for avionics systems
    </p>
  </>
);

export default Introduction;

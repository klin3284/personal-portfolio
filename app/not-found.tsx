import React from "react";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-5 text-center max-w-4xl mx-auto">
      <h1 className="text-6xl md:text-8xl font-bold mb-2">Oops!</h1>
      <p className="text-xl md:text-4xl mb-8 text-gray-400">
        The page you are looking for might have been removed or is temporarily
        unavailable.
      </p>

      <a href="/">
        <button className="bg-blue-500 text-md font-bold py-4 px-6 rounded-2xl hover:bg-blue-700">
          Go To Homepage
        </button>
      </a>
    </div>
  );
}

export default NotFound;

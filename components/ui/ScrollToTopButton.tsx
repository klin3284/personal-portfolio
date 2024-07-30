"use client";

import React, { useState, useEffect } from "react";
import Icon from "../icons";

const ScrollToTopButton = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 500) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    showTopBtn && (
      <button
        id="to-top-button"
        onClick={goToTop}
        title="Go To Top"
        className="fixed z-50 bottom-10 right-10 p-4 border-0 w-14 h-14 rounded-full shadow-md bg-blue-400 hover:bg-blue-400 text-white text-lg font-semibold transition-colors duration-300"
      >
        <Icon name="UpArrow" size={24} />
      </button>
    )
  );
};

export default ScrollToTopButton;

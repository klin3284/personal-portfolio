"use client";

import React, { useState, useEffect } from "react";
import ScrollToSectionButton from "./scrollToSectionButton";

const Navbar = () => {
  const [showNav, setShowNav] = useState(true);
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY || window.pageYOffset;
      setShowNav(currentScrollPos < scrollPos);
      setScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPos]);

  return (
    <nav
      className={`fixed w-full z-10 backdrop-blur-md transition-all duration-500 ease-in-out transform ${showNav ? "translate-y-0" : "-translate-y-full"} ${scrollPos > 0 ? "shadow-xl" : ""}`}
    >
      <div className="py-4 md:py-6 px-10 md:px-20 opacity-80 bg-gray-900 w-full">
        <ul className="flex justify-end gap-4 md:gap-8 text-sm md:text-base">
          <li>
            <ScrollToSectionButton sectionId="about" label="About" />
          </li>
          <li>
            <ScrollToSectionButton sectionId="experiences" label="Experience" />
          </li>
          <li>
            <ScrollToSectionButton sectionId="projects" label="Projects" />
          </li>
          <li>
            <ScrollToSectionButton sectionId="contactMe" label="Contact" />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

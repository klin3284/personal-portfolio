import React from "react";
import ScrollToSectionButton from "@components/layout/scrollToSectionButton";

const LinkGrid = () => (
  <div className="grid grid-cols-3 gap-4 w-full">
    <div className="flex flex-col">
      <p className="font-bold text-md sm:text-lg mb-6">GENERAL</p>
      <ul className="list">
        <li className="listItem">
          <ScrollToSectionButton
            sectionId="home"
            label="Home"
            className="link"
          />
        </li>
        <li className="listItem">
          <ScrollToSectionButton
            sectionId="about"
            label="About"
            className="link"
          />
        </li>
        <li className="listItem">
          <ScrollToSectionButton
            sectionId="projects"
            label="Projects"
            className="link"
          />
        </li>
        <li className="listItem">
          <ScrollToSectionButton
            sectionId="blogs"
            label="Blog"
            className="link"
          />
        </li>
      </ul>
    </div>
    <div className="flex flex-col">
      <p className="font-bold text-md sm:text-lg mb-6">SPECIFICS</p>
      <ul className="list">
        <li className="listItem">
          <a href="https://github.com/klin3284" className="link">
            Github
          </a>
        </li>
        <li className="listItem">
          <a href="https://www.linkedin.com/in/kennylin24/" className="link">
            LinkedIn
          </a>
        </li>
        <li className="listItem">
          <a
            href="/Kenny_Lin_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            Resume
          </a>
        </li>
        <li className="listItem">
          <a href="credits" className="link">
            Credits
          </a>
        </li>
      </ul>
    </div>
    <div className="flex flex-col">
      <p className="font-bold text-md sm:text-lg mb-6">EXTRA</p>
      <ul className="list">
        <li className="listItem">
          <a href="bamboo" className="link">
            Food Blog
          </a>
        </li>
        <li className="listItem">
          <a href="hobbies" className="link">
            Hobbies
          </a>
        </li>
        <li className="listItem">
          <a href="computers" className="link">
            PC Builds
          </a>
        </li>
        <li className="listItem">
          <a href="https://www.instagram.com/northeastern/" className="link">
            Go Huskies
          </a>
        </li>
      </ul>
    </div>
  </div>
);

export default LinkGrid;

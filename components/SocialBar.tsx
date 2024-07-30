import React from "react";
import Icon from "./icons";

const SocialBar = () => (
  <div className="grid grid-cols-4 gap-4">
    <div className="con-tooltip bottom">
      <a
        href="https://github.com/klin3284"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-colors duration-200 hover:text-purple-400"
      >
        <Icon name="GitHub" size={40} />
      </a>
      <div className="tooltip">
        <p>GitHub</p>
      </div>
    </div>
    <div className="con-tooltip bottom">
      <a
        href="https://www.linkedin.com/in/kennylin24/"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-colors duration-200 hover:text-purple-400"
      >
        <Icon name="LinkedIn" size={40} />
      </a>
      <div className="tooltip">
        <p>LinkedIn</p>
      </div>
    </div>
    <div className="con-tooltip bottom">
      <a
        href="public\resume_lin_brk.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-colors duration-200 hover:text-purple-400"
      >
        <Icon name="Resume" size={40} />
      </a>
      <div className="tooltip">
        <p>Resume</p>
      </div>
    </div>
    <div className="con-tooltip bottom">
      <a
        href=""
        target="_blank"
        rel="noopener noreferrer"
        className="transition-colors duration-200 hover:text-purple-400"
      >
        <Icon name="Bamboo" size={40} />
      </a>
      <div className="tooltip">
        <p>Bamboo Bistro</p>
      </div>
    </div>
  </div>
);

export default SocialBar;

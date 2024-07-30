import React from "react";
import InfiniteMovingIcons from "@components/ui/InfiniteMovingIcons";
import Section from "../index";

const Skills = () => {
  const programmingLanguages = [
    "JavaScript",
    "Python",
    "PostgreSQL",
    "TypeScript",
    "Swift",
    "C",
    "C++",
  ];

  const frameworksAndTools = [
    "React",
    "Nextjs",
    "Express",
    "Jest",
    "MySQL",
    "PostgreSQL",
  ];

  return (
    <Section id="skills" title="Tech Stack">
      <h4 className="text-3xl font-bold text-center">
        Here are my favorite languages
      </h4>
      <InfiniteMovingIcons
        items={programmingLanguages}
        direction="left"
        speed="normal"
      />
      <h4 className="text-3xl font-bold text-center">
        And frameworks and tools
      </h4>
      <InfiniteMovingIcons
        items={frameworksAndTools}
        direction="right"
        speed="normal"
      />
    </Section>
  );
};

export default Skills;

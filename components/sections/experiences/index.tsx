"use client";

import React from "react";
import ExperienceItem, { ExperienceItemProps } from "./experienceItem";

const Experiences = () => {
  const jobs: ExperienceItemProps[] = [
    {
      company: "Avidyne",
      title: "Software Engineer",
      startDate: new Date("07-01-2022"),
      endDate: new Date("12-18-2022"),
      logo: "/companyLogos/avidyne_logo_circle.png",
    },
    {
      company: "Massachusetts College of Pharmacy and Health Sciences",
      title: "Applications Developer",
      startDate: new Date("07-14-2023"),
      endDate: new Date("12-21-2023"),
      logo: "/companyLogos/mcphs_logo_circle.png",
    },
    {
      company: "Asian American Center",
      title: "Intern",
      startDate: new Date("09-02-2021"),
      endDate: new Date("05-06-2024"),
      logo: "/companyLogos/aac_logo_circle.png",
    },
  ];

  return (
    <div className="flex justify-center w-full">
      <div className="flex flex-col items-start">
        {jobs.map((job, index) => (
          <ExperienceItem key={index} {...job} />
        ))}
      </div>
    </div>
  );
};

export default Experiences;

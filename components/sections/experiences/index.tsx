"use client";

import React from "react";
import ExperienceItem, { ExperienceItemProps } from "./experienceItem";

const Experiences = () => {
  const jobs: ExperienceItemProps[] = [
    {
      company: "Avidyne",
      title: "Software Engineer",
      startDate: new Date("2022-07-01"),
      endDate: new Date("2022-12-18"),
      logo: "/companyLogos/avidyne_logo_circle.png",
    },
    {
      company: "Massachusetts College of Pharmacy and Health Sciences",
      title: "Applications Developer",
      startDate: new Date("2023-07-14"),
      endDate: new Date("2023-12-21"),
      logo: "/companyLogos/mcphs_logo_circle.png",
    },
    {
      company: "Asian American Center",
      title: "Intern",
      startDate: new Date("2021-09-02"),
      endDate: new Date("2024-05-06"),
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

"use client";

import Image from "next/image";
import React, { useState } from "react";
import Section from "../index";

interface ExperienceItemProps {
  title: string;
  location: string;
  company: string;
  startDate: Date;
  endDate: Date;
  description: string[];
  logo: string;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  title,
  location,
  company,
  startDate,
  endDate,
  description,
  logo,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const dateOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
  };

  const toggleCard = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="mb-8 p-4 cursor-pointer hover:shadow-lg hover:scale-105 transition-transform duration-300"
      onClick={toggleCard}
    >
      <div className="bg-gray-700 rounded-xl px-2 py-1 inline-block mb-4">
        <p className="text-xs font-bold text-white">
          {startDate.toLocaleDateString(undefined, dateOptions)} -{" "}
          {endDate.toLocaleDateString(undefined, dateOptions)}
        </p>
      </div>
      <h3 className="text-xl font-bold text-blue-400">
        {company.toUpperCase()}
      </h3>
      <p className="text-lg">{title}</p>
      <p className="text-sm">{location}</p>
      {isOpen && (
        <div className="mt-4 p-4 bg-white rounded-lg shadow-lg">
          <ul className="text-gray-700">
            {description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <Image src={logo} alt={company} width={100} height={100} />
        </div>
      )}
    </div>
  );
};

const Experiences = () => {
  const jobs: ExperienceItemProps[] = [
    {
      company: "Avidyne Corporation",
      location: "Concord, MA",
      title: "Software Engineer",
      startDate: new Date("07-01-2022"),
      endDate: new Date("12-18-2022"),
      description: [
        "Developed software for avionics systems",
        "Worked on a team of 5 engineers",
      ],
      logo: "/avidyne_logo.png",
    },
    {
      company: "Massachusetts College of Pharmacy and Health Sciences",
      location: "Boston, MA",
      title: "Applications Developer",
      startDate: new Date("07-14-2023"),
      endDate: new Date("12-21-2023"),
      description: [
        "Developed software for the university",
        "Worked on a team of 3 developers",
      ],
      logo: "/mcphs_logo.png",
    },
    {
      company: "Asian American Center - Northeastern",
      location: "Boston, MA",
      title: "Intern",
      startDate: new Date("09-02-2021"),
      endDate: new Date("05-06-2024"),
      description: [
        "Developed software for the university",
        "Worked on a team of 5 engineers",
      ],
      logo: "/aac_logo.png",
    },
  ];

  return (
    <Section id="experience" title="Where I've Worked">
      {jobs.map((job, index) => (
        <ExperienceItem key={index} {...job} />
      ))}
    </Section>
  );
};

export default Experiences;

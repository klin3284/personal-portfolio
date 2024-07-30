import React from "react";
import Section from "../index";

interface ExperienceItemProps {
  title: string;
  location: string;
  company: string;
  startDate: Date;
  endDate: Date;
  description: string[];
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  title,
  location,
  company,
  startDate,
  endDate,
  description,
}) => (
  <div className="mb-8 border-l-2 border-gray-200 pl-4">
    <h3 className="text-xl font-bold text-blue-400">{company}</h3>
    <p className="text-lg">{title}</p>
    <p className="text-sm">{location}</p>
    <p className="text-sm">
      {startDate.toLocaleDateString()} - {endDate.toLocaleDateString()}
    </p>
    <p className="mt-2 text-gray-700">{description}</p>
  </div>
);

const Experiences = () => {
  const jobs: ExperienceItemProps[] = [
    {
      company: "Avidyne",
      location: "Concord, MA",
      title: "Software Engineer",
      startDate: new Date("07-01-2022"),
      endDate: new Date("12-18-2022"),
      description: [
        "Developed software for avionics systems",
        "Worked on a team of 5 engineers",
      ],
    },
    {
      company: "MCPHS",
      location: "Boston, MA",
      title: "Applications Developer",
      startDate: new Date("07-14-2023"),
      endDate: new Date("12-21-2023"),
      description: [
        "Developed software for the university",
        "Worked on a team of 3 developers",
      ],
    },
    {
      company: "Asian American Center",
      location: "Boston, MA",
      title: "Intern",
      startDate: new Date("09-02-2021"),
      endDate: new Date("05-06-2024"),
      description: [
        "Developed software for the university",
        "Worked on a team of 5 engineers",
      ],
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

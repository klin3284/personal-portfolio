'use client'

import React, { useState } from "react";

interface MenuProps {
  company: string;
  location: string;
  title: string;
  startDate: Date;
  endDate: Date;
  description: string[];
}

const Menu = () => {
  const [selectedRow, setSelectedRow] = useState(0);

  const jobs: MenuProps[] = [
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
    <div className="grid grid-cols-2 gap-4 p-5 w-screen min-h-[300px] items-center">
      <div className="space-y-4">
        {jobs.map((item, index) => (
          <button
            key={index}
            className="w-full py-2"
            onClick={() => setSelectedRow(index)}
          >
            {item.company}
          </button>
        ))}
      </div>
      <div className="p-4">
        <h2>{jobs[selectedRow].company}</h2>
        <p>{jobs[selectedRow].location}</p>
        <p>
          {jobs[selectedRow].startDate.toLocaleDateString()} -{" "}
          {jobs[selectedRow].endDate.toLocaleDateString()}
        </p>
        <ul>
          {jobs[selectedRow].description.map((desc, index) => (
            <li key={index}>{desc}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;

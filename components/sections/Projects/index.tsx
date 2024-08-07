import React from "react";
import Section from "../index";

interface ProjectItemProps {
  title: string;
  description: string;
  imageUrl: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  title,
  description,
  imageUrl,
}) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
    <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  </div>
);

const Projects = () => {
  const projectItems = [
    {
      title: "Project 1",
      description: "Description for project 1",
      imageUrl: "/aac_logo.png",
    },
    {
      title: "Project 2",
      description: "Description for project 2",
      imageUrl: "/aac_logo.png",
    },
    // Add more projects here
  ];
  return (
    <Section id="projects" title="projects">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectItems.map((project, index) => (
          <ProjectItem key={index} {...project} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;

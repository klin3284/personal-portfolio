import React from "react";
import Section from "../index";
import SpotlightProjectItem, {
  SpotlightProjectItemProps,
} from "./spotlightProjectItem";
import ProjectItem, { ProjectItemProps } from "./projectItem";

const Projects = () => {
  const spotlightProjectItems: SpotlightProjectItemProps[] = [
    {
      title: "Covey Chronicals",
      description:
        "Outlet of Recent News Using APIs and Web-Scrapping in Open Source Virtual Meeting Space",
      imageUrl: [
        "/projects/town.png",
        "/projects/outlet.png",
        "/projects/article.png",
        "/projects/comments.png",
        "/projects/inbox.png",
      ],
    },
    {
      title: "LoRaWAN Rescue Device",
      description:
        "LoRa Device with Texting, SOS, and GPS Features, Streamlined by an iMessage-like iOS App",
      imageUrl: [
        "/projects/chat-screen.png",
        "/projects/messages-screen.png",
        "/projects/settings-screen.png",
        "/projects/lora-top.png",
        "/projects/lora-bottom.png",
      ],
    },
    {
      title: "Project 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
      imageUrl: [],
    },
  ];

  const projectItems: ProjectItemProps[] = [
    {
      title: "This Website",
      description:
        "Designed and developed a responsive portfolio website using NextJS and Tailwind CSS for a visually appealing interface.",
      language: "TypeScript",
      externalUrl: "https://github.com/klin3284/personal-portfolio",
    },
    {
      title: "Fitness Leaderboard",
      description:
        "Fitness competition platform integrating Strava data via REST API, featuring public/private leaderboards and trophy systems. Utilized PostgreSQL for management of user and activity data.",
      language: "TypeScript",
      externalUrl: "https://github.com/fitness-leaderboard/fitness-leaderboard",
    },
    {
      title: "Fitlink",
      description:
        "BeReal-Inspired iOS application for sharing fitness progress and workout pictures with friends. Utilized Google Firebase for user authentication and data storage.",
      language: "Swift",
      externalUrl: "https://github.com/Jaber1028/CS4520FinalProject",
    },
    {
      title: "FUSE Filesystem Driver",
      description:
        "FUSE-based filesystem driver that mounts a 1MB disk image, allowing for file creation, manipulation, and directory nesting. The filesystem supports operations on files up to 40K.",
      language: "C",
      externalUrl: "https://github.khoury.northeastern.edu/achen17/p2",
    },
    {
      title: "Appetite",
      description:
        "Application for finding recipes based on available ingredients, dietary restrictions, and prices based on nearby grocers. Utilized MySQL for data storage.",
      language: "Java",
      externalUrl: "https://github.com/klin3284/App-etite",
    },
    {
      title: "Image Processing",
      description:
        "Image processing application with support for multiple file formats (PPM, JPG, BMP, PNG) and various image operations, featuring both command-line and GUI for usability.",
      language: "Java",
      externalUrl: "https://github.com/klin3284/ImageProcessing",
    },
  ];

  return (
    <Section id="projects" title="Work I'm Proud Of">
      <div className="flex flex-col gap-4 mt-20">
        <header className="max-w-4xl">
          <div>
            <h1 className="text-4xl font-bold sm:text-5xl">
              A Peek into My Software Engineering Adventures
            </h1>
            <p className="mt-6 text-gray-400">
              Over the years, I've had the opportunity to work on a variety of
              software projects. These are the ones that I'm most proud of
              showcasing in my portfolio. Many of these projects are
              open-source, so feel free to explore the code and contribute if
              you have any ideas for enhancements or improvements.
            </p>
          </div>
        </header>
      </div>

      <div className="flex flex-col items-center mt-20 lg:mt-12">
        {spotlightProjectItems.map((project, index) => (
          <SpotlightProjectItem key={index} {...project} />
        ))}
      </div>
      <h2 className="text-3xl font-semibold ml-6 mt-14 lg:mt-28">
        List of Honorable Mentions on Github
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-6">
        {projectItems.map((project, index) => (
          <ProjectItem key={index} {...project} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;

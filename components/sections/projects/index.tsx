import React from "react";
import Section from "../index";
import SpotlightProjectItem, {
  SpotlightProjectItemProps,
} from "./spotlightProjectItem";
import ProjectItem, { ProjectItemProps } from "./projectItem";

const Projects = () => {
  const spotlightProjectItems: SpotlightProjectItemProps[] = [
    {
      title: "Project 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
      imageUrl: "aac_logo.png",
    },
    {
      title: "Project 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
      imageUrl: "aac_logo.png",
    },
    {
      title: "Project 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
      imageUrl: "aac_logo.png",
    },
  ];

  const projectItems: ProjectItemProps[] = [
    {
      title: "CoveyTown News Outlet",
      description:
        "News Outlet of recent news articles using APIs and web-scrapping supporting commenting, likes, and sharing and personal posts to open source virtual meeting space, CoveyTown.",
      imageUrl: "/aac_logo.png",
      language: "TypeScript",
    },
    {
      title: "LoRa Texting Device",
      description:
        "Utilized LoRaWAN (Low Power Wide Area Networking) to transmit SMS-like messages as an alternative to Walkie Talkies",
      imageUrl: "/aac_logo.png",
      language: "Swift",
    },
    {
      title: "Fitness Leaderboard",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac odio quis lectus fringilla condimentum non sed magna. Nam sit amet mi et diam dictum venenatis. ",
      imageUrl: "",
      language: "TypeScript",
    },
    {
      title: "Fitlink",
      description:
        "Phasellus auctor iaculis consectetur. Quisque a metus libero. Aliquam ipsum magna, consectetur sed dui egestas, pellentesque efficitur lacus. ",
      imageUrl: "",
      language: "Swift",
    },
    {
      title: "This Website!",
      description: "Integer placerat tellus sed nulla rutrum rhoncus.",
      imageUrl: "",
      language: "TypeScript",
    },
    {
      title: "Image Processing",
      description:
        "Nulla faucibus justo nec accumsan commodo. Quisque egestas non libero at pellentesque. Ut viverra arcu tellus, ut lobortis quam semper id.",
      imageUrl: "",
      language: "Java",
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

      <div className="flex flex-col items-center space-y-20 mt-20">
        {spotlightProjectItems.map((project, index) => (
          <SpotlightProjectItem key={index} {...project} />
        ))}
      </div>
      <h2 className="text-3xl font-semibold ml-6 mt-28">
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

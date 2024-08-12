import React from "react";
import Section from "../index";
import CardSlide from "./cardSlide";

const languageColorMap: { [key: string]: string } = {
  JavaScript: "#f0db4f",
  TypeScript: "#3178c6",
  Python: "#3572A5",
  Swift: "#f05138",
  "C++": "#00599C",
  Java: "#b07219",
  C: "#555555",
  Go: "#00ADD8",
  Ruby: "#701516",
  PHP: "#777BB4",
  Rust: "#dea584",
  Kotlin: "#F18E33",
};

type Language = keyof typeof languageColorMap;

interface ProjectItemProps {
  title: string;
  description: string;
  imageUrl: string;
  externalUrl?: string;
  language?: Language;
}

interface HighlightProjectItemProps {
  title: string;
  description: string;
  imageUrl: string;
}

const HighlightProjectItem: React.FC<HighlightProjectItemProps> = ({
  title,
  description,
  imageUrl,
}) => (
  <div className="highlight-project-item flex">
    <div className="card">
      <CardSlide
        slides={["/aac_logo.png", "/mcphs_logo.png", "/avidyne_logo.png"]}
      />
    </div>
    <div className="text-details">
      <div>
        <h1 className="font-bold text-blue-400 text-2xl md:text-4xl relative md:mb-4">
          {title}
        </h1>
        <h2 className="font-bold text-md md:text-2xl">{description}</h2>
      </div>
    </div>
  </div>
);

const ProjectItem: React.FC<ProjectItemProps> = ({
  title,
  description,
  imageUrl,
  language,
}) => (
  <div className="group bg-transparent rounded-lg shadow-lg overflow-hidden border-2 border-transparent hover:border-blue-400 hover:scale-105 transition-transform duration-300">
    {/* <img src={imageUrl} alt={title} className="w-full h-48 object-cover" /> */}
    <div className="flex flex-col justify-between h-full py-8 px-6">
      <div>
        <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400">
          {title}
        </h3>
        <p className="text-gray-400 text-md">{description}</p>
      </div>
      {language && (
        <div className="mt-4">
          <span className="flex items-center gap-1">
            <span
              className="h-4 w-4 rounded-full"
              style={{ backgroundColor: languageColorMap[language] || "#ddd" }}
            ></span>
            {language}
          </span>
        </div>
      )}
    </div>
  </div>
);

const Projects = () => {
  const highlightItems = [
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

  const projectItems = [
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
      <div className="flex flex-col space-y-20 px-10 mt-20">
        {highlightItems.map((project, index) => (
          <HighlightProjectItem key={index} {...project} />
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
        {projectItems.map((project, index) => (
          <ProjectItem key={index} {...project} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;

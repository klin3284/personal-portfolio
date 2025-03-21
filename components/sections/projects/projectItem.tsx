import React from "react";

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

export interface ProjectItemProps {
  title: string;
  description: string;
  externalUrl?: string;
  language?: Language;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  title,
  description,
  externalUrl,
  language,
}) => (
  <a
    href={externalUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="group bg-transparent rounded-lg shadow-lg overflow-hidden border-2 border-transparent hover:border-orange-500 hover:scale-105 transition-transform duration-300"
  >
    <div className="flex flex-col justify-between h-full py-8 px-6">
      <div>
        <p className="text-xl font-bold mb-2 group-hover:text-orange-500">
          {title}
        </p>
        <p className="text-gray-400 text-md">{description}</p>
      </div>
      {language && (
        <div className="mt-4">
          <span className="flex items-center gap-1">
            <span
              className="h-4 w-4 rounded-full"
              style={{
                backgroundColor: languageColorMap[language] || "#ddd",
              }}
            ></span>
            {language}
          </span>
        </div>
      )}
    </div>
  </a>
);

export default ProjectItem;

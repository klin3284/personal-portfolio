import React from "react";

export interface ExperienceItemProps {
  title: string;
  company: string;
  startDate: Date;
  endDate: Date;
  logo: string;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  title,
  company,
  startDate,
  endDate,
  logo,
}) => {
  const dateOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
  };

  return (
    <div className="relative flex flex-row my-4 gap-6">
      <div className="flex items-center justify-center">
        <img
          src={logo}
          alt={company}
          className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-blue-400 object-cover"
        />
      </div>
      <div className="flex-1">
        <div className="bg-gray-700 rounded-xl px-2 py-1 inline-block mb-2">
          <p className="text-xs font-bold text-white">
            {startDate.toLocaleDateString(undefined, dateOptions)} -{" "}
            {endDate.toLocaleDateString(undefined, dateOptions)}
          </p>
        </div>
        <h3 className="text-md font-bold text-blue-400">
          {company.toUpperCase()}
        </h3>
        <p className="text-sm">{title}</p>
      </div>
    </div>
  );
};

export default ExperienceItem;

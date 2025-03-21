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
    <div className="relative flex flex-row my-4 gap-4 md:gap-6">
      <div className="flex items-center justify-center">
        <img
          src={logo}
          alt={company}
          className="w-16 h-16 rounded-full border-2 border-blue-400 object-cover"
        />
      </div>
      <div className="flex-1">
        <div className="bg-gray-700 rounded-xl px-2 py-1 inline-block mb-1 md:mb-2">
          <p className="text-xs font-bold text-white">
            {startDate.toLocaleDateString(undefined, dateOptions)} -{" "}
            {endDate.toLocaleDateString(undefined, dateOptions)}
          </p>
        </div>
        <p className="text-sm md:text-base font-bold text-blue-400">
          {company.toUpperCase()}
        </p>
        <p className="text-sm">{title}</p>
      </div>
    </div>
  );
};

export default ExperienceItem;

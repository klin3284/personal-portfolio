import React from "react";

export interface SectionProps {
  id: string;
  children?: React.ReactElement | React.ReactElement[];
}

const Section: React.FC<SectionProps> = ({ id, children }) => (
  <div id={id} className="mx-auto max-w-7xl lg:px-6 w-full">
    <div className="flex items-center my-14">
      <div className="border-t border-gray-300 flex-grow mr-3"></div>
    </div>
    {children}
  </div>
);

export default Section;

import React from "react";

export interface SectionProps {
  id: string;
  title?: string;
  children?: React.ReactElement | React.ReactElement[];
}

export interface SectionHeaderProps {
  children: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  children,
}: SectionHeaderProps) => (
  <div className="flex items-center mb-8">
    <div className="border-t border-gray-300 flex-grow mr-3"></div>
    <h2 className="text-3xl font-bold text-center">{children}</h2>
    <div className="border-t border-gray-300 flex-grow ml-3"></div>
  </div>
);

const Section: React.FC<SectionProps> = ({ id, title, children }) => (
  <div id={id} className="justify-center items-center px-6 py-10 w-4/5">
    {title && <SectionHeader>{title}</SectionHeader>}
    {children}
  </div>
);

export default Section;

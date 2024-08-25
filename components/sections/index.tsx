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
  </div>
);

const Section: React.FC<SectionProps> = ({ id, title, children }) => (
  <div id={id} className="mx-auto max-w-7xl lg:px-6">
    {title && <SectionHeader>{title}</SectionHeader>}
    {children}
  </div>
);

export default Section;

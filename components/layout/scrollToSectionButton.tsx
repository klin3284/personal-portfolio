import React from "react";

interface ScrollToSectionButtonProps {
  sectionId: string;
  label: string;
  className?: string;
}

const ScrollToSectionButton: React.FC<ScrollToSectionButtonProps> = ({
  sectionId,
  label,
  className,
}) => {
  const scrollToSection = () => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = -25;
      const sectionPosition =
        section.getBoundingClientRect().top + window.pageYOffset + offset;
      window.scrollTo({ top: sectionPosition, behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={scrollToSection}
      className={className} // Apply custom class names
    >
      {label}
    </button>
  );
};

export default ScrollToSectionButton;

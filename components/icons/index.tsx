import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaFileAlt,
  FaClipboard,
  FaArrowUp,
} from "react-icons/fa";
import {
  SiExpress,
  SiJest,
  SiNextdotjs,
  SiSwift,
  SiC,
  SiCplusplus,
  SiPython,
  SiReact,
  SiMysql,
  SiPostgresql,
  SiJavascript,
  SiTypescript,
} from "react-icons/si";
import { TiArrowBack } from "react-icons/ti";
import { GiBamboo } from "react-icons/gi";
import { IoBriefcaseOutline } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";

interface IconProps {
  name: string;
  size: number;
}

const Icon: React.FC<IconProps> = ({ name, size }) => {
  switch (name) {
    case "Mail":
      return <MdMailOutline size={size} />;
    case "GitHub":
      return <FaGithub size={size} />;
    case "LinkedIn":
      return <FaLinkedin size={size} />;
    case "Resume":
      return <FaFileAlt size={size} />;
    case "Bamboo":
      return <GiBamboo size={size} />;
    case "Clipboard":
      return <FaClipboard size={size} />;
    case "Python":
      return <SiPython size={size} />;
    case "React":
      return <SiReact size={size} />;
    case "MySQL":
      return <SiMysql size={size} />;
    case "PostgreSQL":
      return <SiPostgresql size={size} />;
    case "JavaScript":
      return <SiJavascript size={size} />;
    case "TypeScript":
      return <SiTypescript size={size} />;
    case "Swift":
      return <SiSwift size={size} />;
    case "C":
      return <SiC size={size} />;
    case "C++":
      return <SiCplusplus size={size} />;
    case "Jest":
      return <SiJest size={size} />;
    case "Nextjs":
      return <SiNextdotjs size={size} />;
    case "Express":
      return <SiExpress size={size} />;
    case "UpArrow":
      return <FaArrowUp size={size} />;
    case "Briefcase":
      return <IoBriefcaseOutline size={size} />;
    case "BackArrow":
      return <TiArrowBack size={size} />;
    default:
      return <div />;
  }
};

export default Icon;

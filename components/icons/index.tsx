import React from 'react';
import { FaGithub, FaLinkedin, FaFileAlt, FaClipboard } from 'react-icons/fa';
import { GiBamboo } from "react-icons/gi";

interface IconProps {
    name: string;
    size: number;
}

const Icon: React.FC<IconProps> = ({ name, size }) => {
    switch (name) {
        case 'GitHub':
            return <FaGithub size ={size}/>;
        case 'LinkedIn':
            return <FaLinkedin size ={size}/>;
        case 'Resume':
            return <FaFileAlt size ={size}/>;
        case 'Bamboo':
            return <GiBamboo size ={size}/>;
        case 'Clipboard':
            return <FaClipboard size ={size}/>;
        default:
            return <div />;
    }
};

export default Icon;
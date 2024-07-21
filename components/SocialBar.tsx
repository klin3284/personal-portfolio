import React from 'react';
import Icon from './icons';

const SocialBar = () => {
    return (
        <div className="grid grid-cols-4 gap-4">
            <a href="https://github.com/klin4084" target="_blank" rel="noopener noreferrer" className="transition-colors duration-200 hover:text-purple-400">
                <Icon name="GitHub" size={40} />
            </a>
            <a href="https://www.linkedin.com/in/kennylin24/" target="_blank" rel="noopener noreferrer" className="transition-colors duration-200 hover:text-purple-400">
                <Icon name="LinkedIn" size={40} />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer" className="transition-colors duration-200 hover:text-purple-400">
                <Icon name="Resume" size={40} />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer" className="transition-colors duration-200 hover:text-purple-400">
                <Icon name="Bamboo" size={40} />
            </a>
        </div>
    )
};

export default SocialBar;
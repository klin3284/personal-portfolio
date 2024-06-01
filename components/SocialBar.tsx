import React from 'react';
import Icon from './icons';

const SocialBar = () => {
    return (
        <div className="grid grid-cols-4 gap-4">
            <a href="https://github.com/klin3284" target="_blank" rel="noopener noreferrer" className="transition-colors duration-200 hover:text-purple-400">
                <Icon name="GitHub" size={32} />
            </a>
            <a href="https://www.linkedin.com/in/kennylin24/" target="_blank" rel="noopener noreferrer" className="transition-colors duration-200 hover:text-purple-400">
                <Icon name="LinkedIn" size={32} />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer" className="transition-colors duration-200 hover:text-purple-400">
                <Icon name="Resume" size={32} />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer" className="transition-colors duration-200 hover:text-purple-400">
                <Icon name="Bamboo" size={32} />
            </a>
        </div>
    )
};

export default SocialBar;
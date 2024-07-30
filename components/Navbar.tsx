'use client'

import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [showNav, setShowNav] = useState(true);
    const [scrollPos, setScrollPos] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY || window.pageYOffset;
            setShowNav(currentScrollPos < scrollPos);
            setScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollPos]);

    const scrollToSection = (sectionId: string) => {
        console.log(sectionId)
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <nav className={`fixed w-full z-10 backdrop-blur-md transition-all duration-500 ease-in-out transform ${showNav ? 'translate-y-0' : '-translate-y-full'} ${scrollPos > 0 ? 'shadow-xl' : ''}`}>
            <div className="py-7 px-10 opacity-80 bg-gray-900 w-full">
                <ul className="flex justify-end space-x-5 md:gap-[8]">
                    <li><button onClick={() => scrollToSection('about')}>About</button></li>
                    <li><button onClick={() => scrollToSection('skills')}>Skills</button></li>
                    <li><button onClick={() => scrollToSection('experience')}>Experience</button></li>
                    <li><button onClick={() => scrollToSection('projects')}>Projects</button></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
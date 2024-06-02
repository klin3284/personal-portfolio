import React from 'react'
import Section from '../index'

const About = () => {
    return (
        <Section id="about" title="About Me">
            <AboutText />
        </Section>
    )
}

const AboutText = () => {
    return (
        <p>
            My journey into the world of technology began with a simple desire: to build my own PC. The experience of assembling the components and seeing the system come to life was both rewarding and eye-opening, setting the stage for my future pursuits in the world of technology.
            As a newly graduated Northeastern University student with a degree in Computer Science and Computer Engineering, I have had the opportunity to dive into various aspects of these fields.
        </p>
    )
}

export default About
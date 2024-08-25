import React from "react";
import Icon from "@components/icons";
import Section from "../index";
import Experiences from "../experiences";
import DetailsList from "./detailsList";
import Introduction from "./introduction";

const About = () => (
  <Section id="about" title="About Me">
    <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12 my-20">
      <div className="lg:pl-20">
        <div className="max-w-xs px-5 lg:max-w-none ">
          <img
            src="pfp_cropped.png"
            alt="About Me Headshot"
            className="object-contain rounded-full border-2 border-blue-400"
          />
        </div>
      </div>

      <div className="lg:order-first lg:row-span-2">
        <Introduction />
        <div className="flex justify-center items-center">
          <img
            src="./dboat.gif"
            alt="Description of GIF"
            className="w-48 h-32 sm:w-64 md:h-48"
          />
        </div>
        <DetailsList />
      </div>

      <div className="lg:pl-20 mt-8">
        <div className="flex flex-col items-start border-2 border-gray-600 rounded-2xl p-6">
          <div className="flex flex-row gap-4 items-center mb-2">
            <Icon name="Briefcase" size={28} />
            <h3 className="text-2xl font-semibold text-gray-200">Work</h3>
          </div>
          <Experiences />
          <div className="flex justify-center w-full mt-4">
            <button className="bg-gray-700 text-white py-4 px-4 w-11/12 max-w-md rounded-lg">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </div>
  </Section>
);

export default About;

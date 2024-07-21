import React from "react";
import Image from "next/image";

export interface CardProp {
  title: string;
  subtitle?: string;
  description: string;
  image?: string;
  index: number;
  url: string;
  github: string;
}

const Card: React.FC<CardProp> = ({
  title,
  subtitle,
  description,
  image,
  index,
  github,
  url,
}) => {
  return (
    <div
      className={`flex items-center relative w-full md:h-[300px] lg:h-[400px] border border-teal-400 ${
        index % 2 == 0 ? "flex-row-reverse" : "flex-row"
      }`}
    >
      <div
        className={`project-content flex flex-col space-y-3 z-10 p-6 md:w-1/2  ${
          index % 2 == 0 ? "text-right md:right-20" : "text-left md:left-40"
        }`}
      >
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-m"> {subtitle} </p>
        <div className={`flex bg-teal-900 px-6 py-2 rounded-md`}>
          {description}
        </div>
        <h2 className="text-xl font-bold">Links</h2>
        <div className="flex space-x-3">
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="text-teal-400 hover:text-teal-500"
          >
            Live
          </a>
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="text-teal-400 hover:text-teal-500"
          >
            Github
          </a>
        </div>
      </div>
      {image && (
        <div
          className={`project-image relative md:w-1/2 ${
            index % 2 == 0 ? "md:left-20" : "md:right-20"
          } z-0 overflow-hidden`}
        >
          <Image
            src={image}
            alt={title}
            layout="responsive"
            width={500}
            height={300}
            objectFit=""
            className="rounded-lg"
          />
        </div>
      )}
    </div>
  );
};

export default Card;

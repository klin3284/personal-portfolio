import React from "react";
import ImageGallery from "./imageGallery";

export interface SpotlightProjectItemProps {
  title: string;
  description: string;
  imageUrl: string[];
  url: string;
}

const SpotlightProjectItem: React.FC<SpotlightProjectItemProps> = ({
  title,
  description,
  imageUrl,
  url,
}) => (
  <div className="highlight-project-item">
    <div className="card">
      <ImageGallery slides={imageUrl} />
    </div>
    <div className="text-details">
      <div>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <h2 className="font-bold text-blue-400 text-2xl md:text-4xl relative mb-2 lg:mb-4">
            {title}
          </h2>
        </a>
        <h2 className="font-bold text-base md:text-xl xl:text-2xl">
          {description}
        </h2>
      </div>
    </div>
  </div>
);

export default SpotlightProjectItem;

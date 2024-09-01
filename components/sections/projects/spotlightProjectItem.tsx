import React from "react";
import ImageGallery from "./imageGallery";

export interface SpotlightProjectItemProps {
  title: string;
  description: string;
  imageUrl: string[];
}

const SpotlightProjectItem: React.FC<SpotlightProjectItemProps> = ({
  title,
  description,
  imageUrl,
}) => (
  <div className="highlight-project-item">
    <div className="card">
      <ImageGallery slides={imageUrl} />
    </div>
    <div className="text-details">
      <div>
        <h1 className="font-bold text-blue-400 text-3xl md:text-4xl relative mb-2 lg:mb-4">
          {title}
        </h1>
        <h2 className="font-bold text-md md:text-xl xl:text-2xl">
          {description}
        </h2>
      </div>
    </div>
  </div>
);

export default SpotlightProjectItem;

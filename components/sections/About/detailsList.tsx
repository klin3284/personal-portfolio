import React from "react";

const DetailsList = () => (
  <>
    <h4 className="text-2xl md:text-3xl font-bold text-blue-400 mb-6">
      Here's more facts about me
    </h4>
    <ul className="text-md sm:text-lg list-disc list-outside mb-14 space-y-4">
      <li>
        Lorem ipsum dolor sit amet,{" "}
        <span className="text-purple-400">consectetur</span> adipiscing elito
        nsectetur adipiscing elit
      </li>
      <li>
        Lorem ipsum dolor sit amet, consectetur{" "}
        <span className="text-purple-400">onsectetur</span> adipiscing elit
        adipiscing elit Lorem ipsum dolor sit amet, consectetur Lorem ipsum
        dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur
      </li>
      <li>
        Lorem ipsum dolor sit amet, conse
        <span className="text-purple-400">consectetur</span> adipiscing elit
        onsectetur adipiscing elit onsectetur adipiscing elittetur adipiscing
        elit
      </li>
      <li>
        Lorem ipsum dolor sit amet, conse
        <span className="text-purple-400">consectetur</span> adipiscing elit
        onsectetur adipiscing elit onsectetur adipiscing elittetur adipiscing
        elit onsectetur adipiscing elit onsectetur adipiscing elit onsectetur
      </li>
    </ul>
  </>
);

export default DetailsList;

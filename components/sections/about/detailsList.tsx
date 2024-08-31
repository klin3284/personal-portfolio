import React from "react";

const DetailsList = () => (
  <>
    <h4 className="text-2xl md:text-3xl font-bold text-blue-400 mb-6">
      Here's more facts about me
    </h4>
    <ul className="text-base sm:text-xl list-disc list-outside mb-14 space-y-4">
      <li>
        I've{" "}
        <span className="font-bold text-purple-400">built six computers </span>
        since high school, ranging from budget-friendly beasts to
        wallet-emptying wonders, for my friends and family.
      </li>
      <li>
        When I'm not racing through sprint deadlines, I'm paddling with
        <span className="font-bold text-purple-400">
          {" "}
          Northeastern CSA and Wolfpack Racing Club{" "}
        </span>
        in Boston's dragon boat festival. (Bronze medalist in 2023)
      </li>
      <li>
        On a good day, I'm a{" "}
        <span className="font-bold text-purple-400">
          4.0-4.5 USTA self-rated tennis player
        </span>{" "}
        , serving aces and ripping forehand. While Federer remains my all-time
        favorite, I'm currently rooting for Alcaraz on the tour.
      </li>
      <li>
        Welcome to{" "}
        <span className="font-bold text-purple-400">Bamboo Bistro</span>, where
        college dorm meets five-star dining. Need proof? I once prepared
        Thanksgiving dinner for my entire dorm floor (12 people) using nothing
        but dorm kitchen wizardry.
      </li>
    </ul>
  </>
);

export default DetailsList;

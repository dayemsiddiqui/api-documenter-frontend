import React from "react";
import LandingPageHeader from "../LandingPageApp/LandingPageHeader";
import { CardSelector } from "./SelectedCard";
import { VoteViewer } from "./VoteViewer";
import { VotingResult } from "./VotingResult";

export const MainApp: React.FC<{}> = () => {
  const winners = [
    {
      storyPoint: "3",
      votes: 3,
    },
    {
      storyPoint: "5",
      votes: 2,
    },
    {
      storyPoint: "?",
      votes: 2,
    },
  ];
  return (
    <div>
      <LandingPageHeader roundedHeaderButton={false} />
      <div className="max-w-xl mx-auto ">
        <VoteViewer />
        <button className=" w-full my-4 bg-brand-red hover:bg-red-500 py-2 right rounded-lg text-capitalize text-white font-bold shadow">
          Show Cards
        </button>
        {/*<button className=" w-full my-4 bg-brand-red hover:bg-red-500 py-2 right rounded-lg text-capitalize text-white font-bold shadow">*/}
        {/*  Vote on Next Issue*/}
        {/*</button>*/}
      </div>
      <div className="fixed bottom-0 w-full">
        <CardSelector />
        {/*<VotingResult winners={winners} />*/}
      </div>
    </div>
  );
};

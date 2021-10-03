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
      <VoteViewer />
      <div className="fixed bottom-0 w-full">
        {/*<CardSelector />*/}
        <VotingResult winners={winners} />
      </div>
    </div>
  );
};

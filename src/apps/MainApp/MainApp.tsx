import React from "react";
import LandingPageHeader from "../LandingPageApp/LandingPageHeader";
import { CardSelector } from "./SelectedCard";
import { VoteViewer } from "./VoteViewer";
import { ResultViewer } from "./ResultViewer";

export const MainApp: React.FC<{}> = () => {
  return (
    <div>
      <LandingPageHeader roundedHeaderButton={false} />
      <VoteViewer />
      <div className="fixed bottom-0 w-full">
        {/*<CardSelector />*/}
        <ResultViewer />
      </div>
    </div>
  );
};

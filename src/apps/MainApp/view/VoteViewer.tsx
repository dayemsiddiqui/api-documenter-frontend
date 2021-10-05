import React from "react";
import { IndividualVote } from "./IndividualVote";
import { useVoteViewer } from "../state/useVoteViewer";

export const VoteViewer: React.FC<{}> = () => {
  const { participants } = useVoteViewer();
  return (
    <>
      <div className="grid grid-cols-4 justify-items-center">
        {participants.map((participant) => (
          <IndividualVote vote={participant} />
        ))}
      </div>
    </>
  );
};

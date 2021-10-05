import React from "react";
import { IndividualVote } from "./IndividualVote";
import { usePokerRoom } from "../state/usePokerRoom";

export const PokerRoom: React.FC<{}> = () => {
  const { participants } = usePokerRoom();
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

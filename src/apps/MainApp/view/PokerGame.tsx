import React from "react";
import { Participant } from "./Participant";
import { usePokerGame } from "../state/usePokerGame";
import { ParticipantModel } from "../domain/Participant.model";
import { DisplayVote } from "./DisplayVote";

export const PokerGame: React.FC<{}> = () => {
  const { participants, isGameFinished, showVotes, hasEveryOneVoted } =
    usePokerGame();
  const displayParticipants = (participants: ParticipantModel[]) => {
    return participants.map((participant) => (
      <Participant participant={participant} />
    ));
  };

  const displayVotes = (participants: ParticipantModel[]) => {
    return participants.map((participant) => (
      <DisplayVote participant={participant} />
    ));
  };
  return (
    <>
      <div className="grid grid-cols-4 justify-items-center">
        {isGameFinished()
          ? displayVotes(participants)
          : displayParticipants(participants)}
      </div>
      <button
        onClick={showVotes}
        className=" w-full my-4 bg-brand-red hover:bg-red-500 py-2 right rounded-lg text-capitalize text-white font-bold shadow"
      >
        Show Cards
      </button>
    </>
  );
};

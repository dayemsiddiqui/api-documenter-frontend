import React from "react";
import { Participant } from "./Participant";
import { usePokerGame } from "../state/usePokerGame";
import { ParticipantModel } from "../domain/Participant.model";
import { DisplayVote } from "./DisplayVote";
import { Show } from "../../../lib/components/Logic/Show";
import { ELSE, IF, THEN } from "../../../lib/components/Logic/If";
import { PokerGameModel } from "../domain/PokerGame.model";

export const PokerGame: React.FC<{ pokerGame: PokerGameModel }> = ({
  pokerGame,
}) => {
  const { participants, isGameFinished, showVotes, everyoneHasVoted } =
    usePokerGame(pokerGame);
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
        <IF condition={isGameFinished()}>
          <THEN>{displayVotes(participants)}</THEN>
          <ELSE>{displayParticipants(participants)}</ELSE>
        </IF>
      </div>
      <Show when={everyoneHasVoted()}>
        <button
          onClick={showVotes}
          className=" w-full mt-4 bg-brand-red hover:bg-red-500 py-2 right rounded-lg text-capitalize text-white font-bold shadow"
        >
          Show Cards
        </button>
      </Show>
    </>
  );
};

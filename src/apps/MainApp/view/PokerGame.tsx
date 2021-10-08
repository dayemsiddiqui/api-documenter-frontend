import React, { useContext } from "react";
import { Participant } from "./Participant";
import { usePokerGame } from "../state/usePokerGame";
import { ParticipantModel } from "../domain/Participant.model";
import { DisplayVote } from "./DisplayVote";
import { Show } from "../../../lib/components/Logic/Show";
import { ELSE, IF, THEN } from "../../../lib/components/Logic/If";
import { PokerGameContext } from "../state/PokerGameContext";

export const PokerGame: React.FC<{}> = () => {
  const { pokerGame, isGameFinished, showVotes, everyoneHasVoted } =
    useContext(PokerGameContext);
  if (pokerGame === undefined) {
    throw Error("No Poker Game Found");
  }
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
          <THEN>{displayVotes(pokerGame.participants)}</THEN>
          <ELSE>{displayParticipants(pokerGame.participants)}</ELSE>
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

import { createContext, useContext, useEffect, useState } from "react";
import { ParticipantStatus } from "../domain/Participant.model";
import { PokerGameState } from "../domain/PokerGame.model";
import { PokerGameContext } from "./PokerGameContext";

export const usePokerGame = () => {
  const { pokerGame, setPokerGame } = useContext(PokerGameContext);
  if (pokerGame === undefined) {
    throw new Error("Use this context inside <PokerGameContext> provider");
  }

  const showVotes = () => {
    // TODO: check if all participants have already voted or not
    setPokerGame({
      ...pokerGame,
      state: PokerGameState.Visible,
    });
  };

  const isGameFinished = () => {
    return pokerGame.state === PokerGameState.Visible;
  };

  const everyoneHasVoted = () => {
    return pokerGame.participants.every(
      (participant) => participant.status === ParticipantStatus.Voted
    );
  };

  return {
    participants: pokerGame.participants,
    showVotes,
    pokerGameState: pokerGame.state,
    everyoneHasVoted,
    isGameFinished,
  };
};

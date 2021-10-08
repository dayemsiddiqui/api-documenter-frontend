import { createContext, useContext, useEffect, useState } from "react";
import { ParticipantStatus } from "../domain/Participant.model";
import { PokerGameState } from "../domain/PokerGame.model";
import { PokerGameContext } from "./PokerGameContext";

export const usePokerGame = () => {
  const pokerGame = useContext(PokerGameContext);
  if (pokerGame === undefined) {
    throw new Error("Use this context inside <PokerGameContext> provider");
  }

  const [game, setGame] = useState(pokerGame);

  useEffect(() => {
    setGame(pokerGame);
  }, [pokerGame]);

  const showVotes = () => {
    // TODO: check if all participants have already voted or not
    setGame({
      ...game,
      state: PokerGameState.Visible,
    });
  };

  const isGameFinished = () => {
    return game.state === PokerGameState.Visible;
  };

  const everyoneHasVoted = () => {
    return game.participants.every(
      (participant) => participant.status === ParticipantStatus.Voted
    );
  };

  return {
    participants: game.participants,
    showVotes,
    pokerGameState: game.state,
    everyoneHasVoted,
    isGameFinished,
  };
};

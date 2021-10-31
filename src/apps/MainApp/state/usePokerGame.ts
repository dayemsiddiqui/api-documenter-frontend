import { useEffect, useState } from "react";
import { ParticipantStatus } from "../domain/Participant.model";
import { PokerGameModel, PokerGameState } from "../domain/PokerGame.model";
import { PokerGameContextType } from "./PokerGameContext";
import { v4 } from "uuid";

export const usePokerGame = (
  initalPokerGame: PokerGameModel
): PokerGameContextType => {
  const [pokerGame, setPokerGame] = useState(initalPokerGame);

  const showVotes = () => {
    // TODO: check if all participants have already voted or not
    setPokerGame({
      ...pokerGame,
      state: PokerGameState.Visible,
    });
  };

  useEffect(() => {
    setPokerGame(initalPokerGame);
  }, [initalPokerGame]);

  const isGameFinished = () => {
    return everyoneHasVoted() && votesAreVisible();
  };

  const votesAreVisible = () => pokerGame.state === PokerGameState.Visible;

  const everyoneHasVoted = () => {
    return pokerGame.participants.every(
      (participant) => participant.status === ParticipantStatus.Voted
    );
  };

  return {
    showVotes,
    everyoneHasVoted,
    isGameFinished,
    votesAreVisible,
    pokerGame: {
      pokerGameID: v4(),
      state: pokerGame.state,
      participants: pokerGame.participants,
    },
  };
};

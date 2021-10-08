import { useEffect, useState } from "react";
import { ParticipantStatus } from "../domain/Participant.model";
import { PokerGameModel, PokerGameState } from "../domain/PokerGame.model";

export const usePokerGame = (pokerGame: PokerGameModel) => {
  const [participants, setParticipant] = useState(pokerGame.participants);
  const [pokerGameState, setPokerGameState] = useState<PokerGameState>(
    pokerGame.state
  );
  const showVotes = () => {
    // TODO: check if all participants have already voted or not
    setPokerGameState(PokerGameState.Visible);
  };

  useEffect(() => {
    setParticipant(pokerGame.participants);
    setPokerGameState(pokerGame.state);
  }, [pokerGame]);

  const isGameFinished = () => {
    return pokerGameState === PokerGameState.Visible;
  };

  const everyoneHasVoted = () => {
    return participants.every(
      (participant) => participant.status === ParticipantStatus.Voted
    );
  };

  return {
    participants,
    showVotes,
    pokerGameState,
    everyoneHasVoted,
    isGameFinished,
  };
};

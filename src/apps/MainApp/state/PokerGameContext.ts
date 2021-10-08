import { createContext } from "react";
import { PokerGameModel, PokerGameState } from "../domain/PokerGame.model";
import { ParticipantModel } from "../domain/Participant.model";

export type PokerGameContextType = {
  showVotes: () => void;
  pokerGame: PokerGameModel | undefined;
  everyoneHasVoted: () => boolean;
  isGameFinished: () => boolean;
  votesAreVisible: () => boolean;
};

export const PokerGameContext = createContext<PokerGameContextType>({
  showVotes: () => {},
  pokerGame: undefined,
  everyoneHasVoted: () => false,
  isGameFinished: () => false,
  votesAreVisible: () => false,
});

import { ParticipantModel } from "./Participant.model";
import { VoteValue } from "./VoteValue";

export enum PokerGameState {
  Visible = "Visible",
  Hidden = "Hidden",
}

// Treat this as a value object, compute this separately in the result page
export type PokerGameResult = {
  average: number;
  agreement: number;
  mostVotedCards: [
    {
      count: number;
      value: VoteValue;
    },
    {
      count: number;
      value: VoteValue;
    },
    {
      count: number;
      value: VoteValue;
    }
  ];
};

export interface PokerGameModel {
  pokerGameID: string;
  participants: ParticipantModel[];
  state: PokerGameState;
}

/**
 * Methods for PokerGameModel
 * showResult()
 */

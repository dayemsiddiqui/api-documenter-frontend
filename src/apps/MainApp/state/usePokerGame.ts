import { Factory } from "fishery";
import { v4 } from "uuid";
import { names, uniqueNamesGenerator } from "unique-names-generator";
import { useState } from "react";
import {
  ParticipantModel,
  ParticipantStatus,
} from "../domain/Participant.model";
import { PokerGameState } from "../domain/PokerGame.model";

export const participantFactory = Factory.define<ParticipantModel>(
  ({ afterBuild }) => {
    afterBuild((participant) => {
      participant.displayName = uniqueNamesGenerator({
        dictionaries: [names],
      });
      return participant;
    });
    return {
      displayName: "Ernesto",
      id: v4(),
      vote: 2,
      status: ParticipantStatus.Pending,
    };
  }
);

export const usePokerGame = () => {
  const initialParticipants: ParticipantModel[] = [
    ...participantFactory.buildList(8, {
      status: ParticipantStatus.Pending,
    }),
  ];
  // TODO: Model the participant concept properly
  /**
   * TODO: Model Poker Game state and Vote State Separately
   * Poker Game has following two states: Visible, Hidden
   * Vote Itself has two states:  Voted, Pending
   * Domain Rules:
   * - If any of the vote is Pending then the game state cannot be Visible
   */
  const [participants, setParticipant] = useState(initialParticipants);
  const [pokerGameState, setPokerGameState] = useState<PokerGameState>(
    PokerGameState.Hidden
  );
  const showVotes = () => {
    // TODO: check if all participants have already voted or not
    setPokerGameState(PokerGameState.Visible);
  };

  const isGameFinished = () => {
    return pokerGameState === PokerGameState.Visible;
  };

  const hasEveryOneVoted = () => {
    return participants.every(
      (participant) => participant.status === ParticipantStatus.Voted
    );
  };

  return {
    participants,
    showVotes,
    pokerGameState,
    hasEveryOneVoted,
    isGameFinished,
  };
};

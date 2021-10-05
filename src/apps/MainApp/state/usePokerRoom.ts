import { Factory } from "fishery";
import { VisibleVoteModel, VoteModel, VoteType } from "../domain/Vote.model";
import { v4 } from "uuid";
import { names, uniqueNamesGenerator } from "unique-names-generator";
import { useState } from "react";
import { createVisibleVote } from "../domain/CreateVisibleVote";

export const voteFactory = Factory.define<VoteModel>(
  ({ onCreate, afterBuild }) => {
    afterBuild((vote) => {
      vote.displayName = uniqueNamesGenerator({
        dictionaries: [names],
      });
      return vote;
    });
    return {
      type: VoteType.PendingVote,
      value: 2,
      displayName: "Ernesto",
      userID: v4(),
    };
  }
);

export const usePokerRoom = () => {
  const votes: VoteModel[] = [
    ...voteFactory.buildList(8, {
      type: VoteType.PendingVote,
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
  const [participants, setParticipant] = useState(votes);
  const showVotes = () => {
    const participantsWithVisibleVote = participants.map(createVisibleVote);
    setParticipant(participantsWithVisibleVote);
  };

  return {
    participants,
    showVotes,
  };
};

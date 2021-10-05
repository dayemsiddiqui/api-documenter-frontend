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

export const useVoteViewer = () => {
  const votes: VoteModel[] = [
    ...voteFactory.buildList(8, {
      type: VoteType.PendingVote,
    }),
  ];
  // TODO: Model the participant concept properly
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

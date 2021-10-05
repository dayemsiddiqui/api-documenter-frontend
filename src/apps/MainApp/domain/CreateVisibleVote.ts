import { VisibleVoteModel, VoteModel, VoteType } from "./Vote.model";

export const createVisibleVote = (vote: VoteModel): VisibleVoteModel => {
  return {
    ...vote,
    type: VoteType.VisibileVote,
  };
};

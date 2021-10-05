export type FibonacciSeries = 1 | 2 | 3 | 5 | 8 | 13 | 21 | 34 | 55;
export type Questionable = "?";

export type VoteValue = FibonacciSeries | Questionable;

export interface BaseVoteModel {
  value: VoteValue;
  userID: string;
  displayName: string;
}

export enum VoteType {
  PendingVote = "PendingVote",
  HiddenVote = "HiddenVote",
  VisibileVote = "VisibleVote",
}

export interface PendingVoteModel extends BaseVoteModel {
  type: VoteType.PendingVote;
}

export interface HiddenVoteModel extends BaseVoteModel {
  type: VoteType.HiddenVote;
}

export interface VisibleVoteModel extends BaseVoteModel {
  type: VoteType.VisibileVote;
}

export type VoteModel = PendingVoteModel | HiddenVoteModel | VisibleVoteModel;

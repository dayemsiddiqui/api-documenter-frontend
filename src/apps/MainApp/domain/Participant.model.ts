import { PersonModel } from "./PersonModel";
import { VoteValue } from "./VoteValue";

export interface ParticipantModel extends PersonModel {
  vote: VoteValue;
  status: ParticipantStatus;
}

export enum ParticipantStatus {
  Voted = "Voted",
  Pending = "Pending",
}

import React from "react";
import {
  HiddenVoteModel,
  PendingVoteModel,
  VisibleVoteModel,
  VoteModel,
  VoteType,
} from "../domain/Vote.model";

export const VisibleVote: React.FC<{ vote: VisibleVoteModel }> = ({ vote }) => {
  return (
    <div>
      <div className="w-16 p-xl h-24 bg-gray-50 my-2 rounded text-center shadow text-brand-red cursor-pointer">
        <p className="py-8 font-bold text-3xl ">{vote.value}</p>
      </div>
      <span className=" font-bold text-capitalize">{vote.displayName}</span>
    </div>
  );
};
export const HiddenVote: React.FC<{ vote: HiddenVoteModel }> = ({ vote }) => {
  return (
    <div>
      <div className="w-16 p-xl p-1.5 h-24 bg-gray-50 my-2 rounded text-center shadow bg-brand-green  hover:text-white cursor-pointer" />
      <span className=" font-bold text-capitalize">{vote.displayName}</span>
    </div>
  );
};
export const PendingVote: React.FC<{ vote: PendingVoteModel }> = ({ vote }) => {
  return (
    <div>
      <div className="w-16 p-xl p-1.5 h-24 bg-gray-50 my-2 rounded text-center shadow bg-gray-300  hover:text-white cursor-pointer" />
      <span className=" font-bold text-capitalize">{vote.displayName}</span>
    </div>
  );
};

export const IndividualVote: React.FC<{ vote: VoteModel }> = ({ vote }) => {
  switch (vote.type) {
    case VoteType.VisibileVote:
      return <VisibleVote vote={vote} />;
    case VoteType.HiddenVote:
      return <HiddenVote vote={vote} />;
    case VoteType.PendingVote:
      return <PendingVote vote={vote} />;
  }
};

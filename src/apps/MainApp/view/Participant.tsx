import React from "react";
import {
  ParticipantModel,
  ParticipantStatus,
} from "../domain/Participant.model";

export const HiddenVote: React.FC<{ participant: ParticipantModel }> = ({
  participant,
}) => {
  return (
    <div>
      <div className="w-16 p-xl p-1.5 h-24 bg-gray-50 my-2 rounded text-center shadow bg-brand-green  hover:text-white cursor-pointer" />
      <span className=" font-bold text-capitalize">
        {participant.displayName}
      </span>
    </div>
  );
};
export const PendingVote: React.FC<{ participant: ParticipantModel }> = ({
  participant,
}) => {
  return (
    <div>
      <div className="w-16 p-xl p-1.5 h-24 bg-gray-50 my-2 rounded text-center shadow bg-gray-300  hover:text-white cursor-pointer" />
      <span className=" font-bold text-capitalize">
        {participant.displayName}
      </span>
    </div>
  );
};

export const Participant: React.FC<{
  participant: ParticipantModel;
}> = ({ participant }) => {
  switch (participant.status) {
    case ParticipantStatus.Pending:
      return <PendingVote participant={participant} />;
    case ParticipantStatus.Voted:
      return <HiddenVote participant={participant} />;
  }
};

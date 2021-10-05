import React from "react";
import { ParticipantModel } from "../domain/Participant.model";

export const DisplayVote: React.FC<{ participant: ParticipantModel }> = ({
  participant,
}) => {
  return (
    <div>
      <div className="w-16 p-xl h-24 bg-gray-50 my-2 rounded text-center shadow text-brand-red cursor-pointer">
        <p className="py-8 font-bold text-3xl ">{participant.vote}</p>
      </div>
      <span className=" font-bold text-capitalize">
        {participant.displayName}
      </span>
    </div>
  );
};

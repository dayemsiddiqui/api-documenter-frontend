import React from "react";
import { motion } from "framer-motion";

export interface VotingResultProps {
  winners: Array<{
    storyPoint: string;
    votes: number;
  }>;
}

export const GameResult: React.FC<VotingResultProps> = ({ winners }) => {
  return (
    <div className=" bg-brand-blue p-4">
      <div className="flex space-x-3 justify-center">
        {winners.map((card) => {
          return (
            <div>
              <div className="w-32 h-46  rounded text-center shadow bg-brand-yellow  text-white cursor-pointer">
                <p className="py-16 font-bold text-6xl ">{card.storyPoint}</p>
              </div>
              <div className="text-white text-center py-2 font-bold">
                Votes: {card.votes}
              </div>
            </div>
          );
        })}
        <div>
          <div className="w-auto h-46 flex  rounded text-center shadow   bg-gray-50 text-brand-green-dark cursor-pointer">
            <div className="px-14 py-16 font-bold">
              <div className="text-4xl">0</div>
              <div className="text-sm">Average</div>
            </div>
            <div className="w-0.5 h-32 my-6 bg-gray-300"></div>
            <div className="px-12 py-16 font-bold">
              <div className="text-3xl">100%</div>
              <div className="text-sm">Agreement</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

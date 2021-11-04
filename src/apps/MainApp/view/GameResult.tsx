import React from "react";
import { useGameResult } from "../state/useGameResult";

export const GameResult: React.FC<{}> = () => {
  const { gameResult } = useGameResult();
  if (gameResult === undefined) {
    return (
      <div className=" bg-brand-blue p-4">
        <div className="flex space-x-3 justify-center">Loading....</div>
      </div>
    );
  }
  return (
    <div className=" bg-brand-blue p-4">
      <div className="flex space-x-3 justify-center">
        {gameResult.mostVotedCards.map((card) => {
          return (
            <div key={card.value}>
              <div className="w-32 h-46  rounded text-center shadow bg-brand-yellow  text-white cursor-pointer">
                <p className="py-16 font-bold text-6xl ">{card.value}</p>
              </div>
              <div className="text-white text-center py-2 font-bold">
                Votes: {card.count}
              </div>
            </div>
          );
        })}
        <div>
          <div className="w-auto h-46 flex  rounded text-center shadow   bg-gray-50 text-brand-green-dark cursor-pointer">
            <div className="px-14 py-16 font-bold">
              <div className="text-4xl">{gameResult.average}</div>
              <div className="text-sm">Average</div>
            </div>
            <div className="w-0.5 h-32 my-6 bg-gray-300"></div>
            <div className="px-12 py-16 font-bold">
              <div className="text-3xl">{gameResult.std_deviation}</div>
              <div className="text-sm">Standard Deviation</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

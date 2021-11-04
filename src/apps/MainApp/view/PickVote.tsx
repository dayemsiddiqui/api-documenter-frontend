import React, { useEffect } from "react";
import classNames from "classnames";
import { motion } from "framer-motion";
import { useVotePicker } from "../state/useVotePicker";
import { useParams } from "react-router-dom";
import { useVoteApi } from "../infra/useVoteApi";

export const PickVote: React.FC<{}> = () => {
  const { cards, isSelectedCard, pickCard, selectedCard } = useVotePicker();
  const { roomID } = useParams<{ roomID: string }>();
  const { mutate: vote } = useVoteApi(roomID);
  useEffect(() => {
    vote(selectedCard ? selectedCard.value : "NotVoted");
  }, [selectedCard]);

  return (
    <div className=" bg-brand-blue p-4">
      <div className="flex space-x-3 justify-center">
        {cards.map((card, index) => {
          const selectedCardClass = classNames(
            { "bg-brand-green text-white": isSelectedCard(card) },
            { "bg-gray-50 text-brand-red": !isSelectedCard(card) }
          );
          return (
            <motion.div
              className={`w-32 p-xl h-46 rounded text-center shadow hover:bg-brand-yellow  hover:text-white cursor-pointer ${selectedCardClass}`}
              whileHover={{
                y: -50,
              }}
              onClick={() => pickCard(card)}
            >
              <p className="py-16 font-bold text-6xl ">{card.value}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

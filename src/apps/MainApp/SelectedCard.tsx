import React from "react";
import classNames from "classnames";
import { motion } from "framer-motion";

export const CardSelector: React.FC<{}> = () => {
  const fibionnaci = ["1", "2", "3", "5", "8", "13", "21", "34", "55", "?"];
  const selectedCard = (index: number) => index == 3;

  return (
    <div className=" bg-brand-blue p-4">
      <div className="flex space-x-3 justify-center">
        {fibionnaci.map((card, index) => {
          const selectedCardClass = classNames(
            { "bg-brand-green text-white": selectedCard(index) },
            { "bg-gray-50 text-brand-red": !selectedCard(index) }
          );
          return (
            <motion.div
              className={`w-32 p-xl h-46 rounded text-center shadow hover:bg-brand-yellow  hover:text-white cursor-pointer ${selectedCardClass}`}
              whileHover={{
                y: -50,
              }}
            >
              <p className="py-16 font-bold text-6xl ">{card}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

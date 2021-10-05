import { useState } from "react";
import { CardModel } from "../domain/Card.model";

export const useCardSelector = () => {
  const cards: CardModel[] = [
    {
      value: 1,
    },
    {
      value: 2,
    },
    {
      value: 3,
    },
    {
      value: 5,
    },
    {
      value: 8,
    },
    {
      value: 13,
    },
    {
      value: 21,
    },
    {
      value: 34,
    },
    {
      value: 55,
    },
    {
      value: "?",
    },
  ];

  const [selectedCard, setSelectedCard] = useState<CardModel | undefined>(
    undefined
  );
  const pickCard = (card: CardModel) => {
    setSelectedCard(card);
  };
  const isSelectedCard = (card: CardModel) => {
    if (selectedCard === undefined) {
      return false;
    }
    return card.value === selectedCard.value;
  };
  return {
    cards,
    pickCard,
    isSelectedCard,
  };
};

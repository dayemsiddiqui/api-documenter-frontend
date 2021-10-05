import { useState } from "react";

export type FibonacciSeries = 1 | 2 | 3 | 5 | 8 | 13 | 21 | 34 | 55;
export type Questionable = "?";

export type Card = {
  value: FibonacciSeries | Questionable;
};

export const useCardSelector = () => {
  const cards: Card[] = [
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

  const [selectedCard, setSelectedCard] = useState<Card | undefined>(undefined);
  const pickCard = (card: Card) => {
    setSelectedCard(card);
  };
  const isSelectedCard = (card: Card) => {
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

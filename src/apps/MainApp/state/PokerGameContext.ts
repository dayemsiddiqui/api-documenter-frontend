import { createContext } from "react";
import { PokerGameModel } from "../domain/PokerGame.model";

export type PokerGameContextType = {
  pokerGame: PokerGameModel | undefined;
  setPokerGame: (game: PokerGameModel) => void;
};

export const PokerGameContext = createContext<PokerGameContextType>({
  pokerGame: undefined,
  setPokerGame: () => {},
});

import { createContext } from "react";
import { PokerGameModel } from "../domain/PokerGame.model";

export const PokerGameContext = createContext<PokerGameModel | undefined>(
  undefined
);

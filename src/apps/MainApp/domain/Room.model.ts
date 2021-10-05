import { PokerGameModel } from "./PokerGame.model";
import { PersonModel } from "./PersonModel";

export interface RoomModel {
  roomID: string;
  games: PokerGameModel[];
  currentGame: PokerGameModel | undefined;
  persons: PersonModel[];
}

/**
 * Methods for the RoomModel
 * createRoom()
 * joinRoom()
 * createPokerGame()
 */

export type createPokerGame = (
  room: RoomModel,
  participants: PersonModel[]
) => PokerGameModel;

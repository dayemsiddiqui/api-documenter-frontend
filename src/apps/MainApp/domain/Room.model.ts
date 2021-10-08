import { PokerGameModel } from "./PokerGame.model";
import { PersonModel } from "./PersonModel";

export interface RoomModel {
  roomID: string;
  game: PokerGameModel;
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

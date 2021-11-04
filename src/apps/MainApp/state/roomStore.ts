import create from "zustand";
import { CurrentParticipantModel } from "../domain/CurrentParticipant.model";
import { PokerGameResult } from "../domain/PokerGame.model";

export interface RoomStoreState {
  room:
    | {
        roomID: string;
        gameID: string;
      }
    | undefined;
  currentParticipant: CurrentParticipantModel | undefined;
  gameResult: PokerGameResult | undefined;
  setRoom: (params: { roomID: string; gameID: string }) => any;
  setCurrentParticipant: (participant: CurrentParticipantModel) => void;
  setGameResult: (result: PokerGameResult | undefined) => void;
}

export const useRoomStore = create<RoomStoreState>((set) => ({
  room: undefined,
  currentParticipant: undefined,
  gameResult: undefined,
  setRoom: ({ roomID, gameID }) =>
    set({
      room: {
        roomID,
        gameID,
      },
    }),
  setCurrentParticipant: (participant) =>
    set({ currentParticipant: participant }),
  setGameResult: (result) => set({ gameResult: result }),
}));

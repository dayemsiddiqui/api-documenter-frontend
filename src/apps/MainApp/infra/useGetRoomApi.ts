import { useBackendApi } from "../shared/useBackendApi";
import { useQuery } from "react-query";
import { PokerGameModel, PokerGameState } from "../domain/PokerGame.model";
import { ParticipantResponse } from "planning-poker-client-sdk/api/api";
import {
  ParticipantModel,
  ParticipantStatus,
} from "../domain/Participant.model";
import { VoteValue } from "../domain";

const toParticipantModel = (
  response: ParticipantResponse
): ParticipantModel => {
  return {
    id: response.id,
    status:
      response.vote === "NotVoted"
        ? ParticipantStatus.Pending
        : ParticipantStatus.Voted,
    vote: response.vote as VoteValue,
    displayName: response.displayName,
  };
};

export const useGetRoomApi = (roomID: string) => {
  const { getRoom } = useBackendApi();

  return useQuery("getRoom", () => getRoom(roomID), {
    refetchInterval: 3000,
    select: (data): PokerGameModel => {
      // TODO: Do data transformations here if you want
      const { game } = data.data;
      return {
        participants: game.participants.map(toParticipantModel),
        pokerGameID: game.id,
        state: game.participants.some(
          (participant) => participant.vote === "NotVoted"
        )
          ? PokerGameState.Hidden
          : PokerGameState.Visible,
      };
    },
  });
};

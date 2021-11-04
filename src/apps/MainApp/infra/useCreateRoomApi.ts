import { useBackendApi } from "../shared/useBackendApi";
import { useMutation } from "react-query";
import { CreateRoomRequest } from "planning-poker-client-sdk/api/api";
import { useRoomStore } from "../state/roomStore";

export const useCreateRoomApi = () => {
  const { createRoom } = useBackendApi();
  const { setRoom } = useRoomStore();
  return {
    ...useMutation("createRoom", async (request: CreateRoomRequest) => {
      const response = await createRoom(request);
      setRoom({
        roomID: response.data.id,
        gameID: response.data.game.id,
      });
      return response.data;
    }),
  };
};

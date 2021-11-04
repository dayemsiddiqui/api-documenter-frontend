import { useBackendApi } from "../shared/useBackendApi";
import { useQuery } from "react-query";
import { useRoomStore } from "../state/roomStore";

export const useGetRoomApi = (roomID: string) => {
  const { getRoom } = useBackendApi();
  const { setRoom } = useRoomStore();
  return useQuery("getRoom", () => getRoom(roomID), {
    refetchInterval: 3000,
    onSuccess: (data) => {
      setRoom({
        roomID: data.data.id,
        gameID: data.data.game.id,
      });
    },
  });
};

import { useBackendApi } from "../shared/useBackendApi";
import { useQuery } from "react-query";

export const useGetRoomApi = (roomID: string) => {
  const { getRoom } = useBackendApi();

  return useQuery("getRoom", () => getRoom(roomID), {
    refetchInterval: 3000,
    select: (data) => {
      // TODO: Do data transformations here if you want
      return data.data.game;
    },
  });
};

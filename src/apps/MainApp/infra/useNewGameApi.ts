import { useBackendApi } from "../shared/useBackendApi";
import { useMutation, useQueryClient } from "react-query";

export const useNewGameApi = (roomID: string) => {
  const { newGame } = useBackendApi();
  const queryClient = useQueryClient();
  return {
    ...useMutation("newGame", () => newGame(roomID), {
      onSuccess: async () => {
        await queryClient.invalidateQueries("getRoom");
      },
    }),
  };
};

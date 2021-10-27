import { useBackendApi } from "../shared/useBackendApi";
import { useMutation } from "react-query";
import { CreateRoomRequest } from "planning-poker-client-sdk/api/api";

export const useCreateRoomApi = () => {
  const { createRoom } = useBackendApi();
  return useMutation("createRoom", (request: CreateRoomRequest) =>
    createRoom(request)
  );
};

import { useBackendApi } from "../shared/useBackendApi";
import { useMutation } from "react-query";
import { useLocalStorage } from "../../../hooks/useLocalStorage";
import { LocalstorageItems } from "./localstorage";
import { CurrentParticipantModel } from "../domain/CurrentParticipant.model";

export const useJoinRoomApi = () => {
  const { joinRoom } = useBackendApi();
  const [currentParticipant, setCurrentParticipant] = useLocalStorage<
    CurrentParticipantModel | undefined
  >(LocalstorageItems.CurrentParticipant, undefined);
  return {
    ...useMutation(
      "joinRoom",
      (params: { roomID: string; displayName: string }) => {
        return joinRoom(params.roomID, {
          displayName: params.displayName,
        });
      },
      {
        onSuccess: (data) => {
          setCurrentParticipant({
            id: data.data.id,
            displayName: data.data.displayName,
            vote: data.data.vote,
          });
        },
      }
    ),
    currentParticipant,
  };
};

import { useBackendApi } from "../shared/useBackendApi";
import { useMutation } from "react-query";
import { CreateRoomRequest } from "planning-poker-client-sdk/api/api";
import { useLocalStorage } from "../../../hooks/useLocalStorage";
import {
  ParticipantModel,
  ParticipantStatus,
} from "../domain/Participant.model";
import { LocalstorageItems } from "./localstorage";
import { names, uniqueNamesGenerator } from "unique-names-generator";

export interface ApplicationUser extends ParticipantModel {}

export const useJoinRoomApi = (roomID: string) => {
  const { joinRoom } = useBackendApi();
  const [currentParticipant] = useLocalStorage<ParticipantModel | undefined>(
    LocalstorageItems.CurrentParticipant,
    undefined
  );
  const displayName = currentParticipant
    ? currentParticipant.displayName
    : uniqueNamesGenerator({
        dictionaries: [names],
      });
  return useMutation("joinRoom", () =>
    joinRoom(roomID, {
      displayName,
    })
  );
};

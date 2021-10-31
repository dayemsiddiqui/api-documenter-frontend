import { useBackendApi } from "../shared/useBackendApi";
import { useMutation } from "react-query";
import { CreateRoomRequest } from "planning-poker-client-sdk/api/api";
import { useLocalStorage } from "../../../hooks/useLocalStorage";
import {
  ParticipantModel,
  ParticipantStatus,
} from "../domain/Participant.model";
import { LocalstorageItems } from "./localstorage";
import { VoteValue } from "../domain";

export interface ApplicationUser extends ParticipantModel {}

export const useCreateRoomApi = () => {
  const { createRoom } = useBackendApi();
  const [currentParticipant, setCurrentParticipant] = useLocalStorage<
    ParticipantModel | undefined
  >(LocalstorageItems.CurrentParticipant, undefined);
  return useMutation(
    "createRoom",
    (request: CreateRoomRequest) => createRoom(request),
    {
      onSuccess: (data) => {
        // TODO: store PersonID information in the localstorage
        const { currentParticipant } = data.data;
        setCurrentParticipant({
          id: currentParticipant.id,
          displayName: currentParticipant.displayName,
          vote: currentParticipant.vote as VoteValue, // TODO: Add proper mapping using ts-pattern-matching
          status:
            currentParticipant.vote === "NotVoted"
              ? ParticipantStatus.Pending
              : ParticipantStatus.Pending,
        });
      },
    }
  );
};

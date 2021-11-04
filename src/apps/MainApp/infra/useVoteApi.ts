import { useBackendApi } from "../shared/useBackendApi";
import { useMutation, useQueryClient } from "react-query";
import { useLocalStorage } from "../../../hooks/useLocalStorage";
import { LocalstorageItems } from "./localstorage";
import { ParticipantModel } from "../domain/Participant.model";
import { VoteValue } from "../domain";

export const useVoteApi = (roomID: string) => {
  const { vote } = useBackendApi();
  const [currentParticipant] = useLocalStorage<ParticipantModel | undefined>(
    LocalstorageItems.CurrentParticipant,
    undefined
  );
  const queryClient = useQueryClient();
  return {
    ...useMutation(
      "vote",
      (voteValue: VoteValue) => {
        if (currentParticipant === undefined) {
          throw new Error("Participant Not Found or has invalid ID");
        }
        return vote(roomID, currentParticipant.id, {
          vote: voteValue,
        });
      },
      {
        onSuccess: async () => {
          await queryClient.invalidateQueries("getRoom");
        },
      }
    ),
  };
};

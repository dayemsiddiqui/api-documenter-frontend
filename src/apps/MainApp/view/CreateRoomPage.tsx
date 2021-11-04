import React, { useEffect, useState } from "react";
import { PageDialog } from "../../../lib/components/PageDialog/PageDialog";
import { Redirect, useHistory } from "react-router-dom";
import { PageDialogContent } from "../../../lib/components/PageDialog/PageDialogContent";
import { PageDialogActions } from "../../../lib/components/PageDialog/PageDialogActions";
import { PageDialogButton } from "../../../lib/components/PageDialog/PageDialogButton";
import { useCreateRoomApi } from "../infra/useCreateRoomApi";
import { useForm } from "react-hook-form";
import { useJoinRoomApi } from "../infra/useJoinRoomApi";

export const CreateRoomPage = () => {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let form: HTMLFormElement | null = null;
  const {
    mutate: createRoom,
    isSuccess: roomCreated,
    isLoading,
    data: room,
  } = useCreateRoomApi();
  const [displayName, setDisplayName] = useState<string | undefined>(undefined);
  const onSubmit = (formData: { name: string; displayName: string }) => {
    createRoom({
      name: formData.name,
    });
    setDisplayName(formData.displayName);
  };

  const navigateToHomePage = () => {
    history.push("/");
  };
  const navigateToApp = () => {
    form!.dispatchEvent(
      new Event("submit", { cancelable: true, bubbles: true })
    );
  };
  const { mutate: joinRoom, isSuccess: roomJoined } = useJoinRoomApi();
  useEffect(() => {
    if (roomCreated && displayName !== undefined && room) {
      joinRoom({
        roomID: room.id,
        displayName,
      });
    }
  }, [roomCreated]);

  return (
    <PageDialog title="Create Room">
      {roomJoined && <Redirect to={`/room/${room?.id}`} />}
      <PageDialogContent>
        <form onSubmit={handleSubmit(onSubmit)} ref={(ref) => (form = ref)}>
          <input
            defaultValue="SomeUniqueRoomName"
            {...register("name")}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
            placeholder="Room Name"
          />
          <input
            {...register("displayName", { required: true })}
            className="appearance-none border rounded w-full py-2 px-3 my-2 text-gray-700 leading-tight focus:outline-none"
            placeholder="Your Name"
          />
          {errors.exampleRequired && <span>This field is required</span>}
        </form>
      </PageDialogContent>
      <PageDialogActions>
        <PageDialogButton
          isLoading={isLoading}
          onClick={navigateToApp}
          className="success-btn"
        >
          Create
        </PageDialogButton>
        <PageDialogButton onClick={navigateToHomePage} className="cancel-btn">
          Cancel
        </PageDialogButton>
      </PageDialogActions>
    </PageDialog>
  );
};

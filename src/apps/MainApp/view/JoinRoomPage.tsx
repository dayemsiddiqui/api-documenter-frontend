import React from "react";
import { PageDialog } from "../../../lib/components/PageDialog/PageDialog";
import { Redirect, useHistory, useParams } from "react-router-dom";
import { PageDialogActions } from "../../../lib/components/PageDialog/PageDialogActions";
import { PageDialogContent } from "../../../lib/components/PageDialog/PageDialogContent";
import { PageDialogButton } from "../../../lib/components/PageDialog/PageDialogButton";
import { useForm } from "react-hook-form";
import { useJoinRoomApi } from "../infra/useJoinRoomApi";

export const JoinRoomPage = () => {
  const history = useHistory();
  let form: HTMLFormElement | null = null;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { mutate: joinRoom, isSuccess: joinedTheRoom } = useJoinRoomApi();
  const { roomID } = useParams<{ roomID: string }>();
  const onSubmit = async (formData: { displayName: string }) => {
    joinRoom({ roomID, displayName: formData.displayName });
  };

  const navigateToHomePage = () => {
    history.push("/");
  };
  const onFormSubmit = () => {
    form!.dispatchEvent(
      new Event("submit", { cancelable: true, bubbles: true })
    );
  };
  if (joinedTheRoom) {
    return <Redirect to={`/room/${roomID}`} />;
  }
  return (
    <PageDialog title="Join Room">
      <PageDialogContent>
        <form onSubmit={handleSubmit(onSubmit)} ref={(ref) => (form = ref)}>
          <input
            {...register("displayName")}
            className="appearance-none border rounded w-full py-2 px-3 my-2 text-gray-700 leading-tight focus:outline-none"
            placeholder="Your Name"
          />
        </form>
      </PageDialogContent>
      <PageDialogActions>
        <PageDialogButton onClick={onFormSubmit} className="success-btn">
          Join
        </PageDialogButton>
        <PageDialogButton onClick={navigateToHomePage} className=" cancel-btn">
          Cancel
        </PageDialogButton>
      </PageDialogActions>
    </PageDialog>
  );
};

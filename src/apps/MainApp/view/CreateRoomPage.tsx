import React, { useState } from "react";
import { PageDialog } from "../../../lib/components/PageDialog/PageDialog";
import { Redirect, useHistory } from "react-router-dom";
import { PageDialogContent } from "../../../lib/components/PageDialog/PageDialogContent";
import { PageDialogActions } from "../../../lib/components/PageDialog/PageDialogActions";
import { PageDialogButton } from "../../../lib/components/PageDialog/PageDialogButton";
import { useCreateRoomApi } from "../infra/useCreateRoomApi";
import { useForm } from "react-hook-form";
import { CreateRoomRequest } from "planning-poker-client-sdk/api/api";

export const CreateRoomPage = () => {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  console.log(watch("example")); // watch input value by passing the name of it
  let form: HTMLFormElement | null = null;
  const { mutate, isSuccess, data } = useCreateRoomApi();
  const onSubmit = async (data: CreateRoomRequest) => {
    await mutate(data);
  };

  const navigateToHomePage = () => {
    history.push("/");
  };
  const navigateToApp = () => {
    form!.dispatchEvent(
      new Event("submit", { cancelable: true, bubbles: true })
    );
    // history.push("/app");
  };
  // console.log("Response from server", isSuccess data);
  return (
    <PageDialog title="Create Room">
      {isSuccess && <Redirect to={`/room/${data?.data.id}`} />}
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
        <PageDialogButton onClick={navigateToApp} className="success-btn">
          Create
        </PageDialogButton>
        <PageDialogButton onClick={navigateToHomePage} className="cancel-btn">
          Cancel
        </PageDialogButton>
      </PageDialogActions>
    </PageDialog>
  );
};

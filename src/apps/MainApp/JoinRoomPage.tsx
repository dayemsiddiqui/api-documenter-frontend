import React, { useState } from "react";
import { PageDialog } from "../../lib/components/PageDialog/PageDialog";
import { useHistory } from "react-router-dom";

export const JoinRoomPage = () => {
  const history = useHistory();
  const navigateToHomePage = () => {
    history.push("/");
  };
  const navigateToApp = () => {
    history.push("/app");
  };
  return (
    <PageDialog title="Join Room">
      <div>
        <form>
          <input
            className="appearance-none border rounded w-full py-2 px-3 my-2 text-gray-700 leading-tight focus:outline-none"
            placeholder="Your Name"
          />
        </form>
      </div>
      {/**
       * TODO:  Refactor these into sub components like PageDialogActionContainer, PageDialogSubmitButton, PageDialogCancelButton
       */}
      <div className="flex space-x-3 justify-end ">
        <button
          onClick={navigateToApp}
          className="py-2 my-6 px-3 w-auto right-0 text-sm text-white rounded-md bg-brand-green shadow-md block md:inline-block active:bg-brand-green-light hover:bg-brand-green-dark focus:outline-none focus:shadow-outline-green"
        >
          Join
        </button>
        <button
          onClick={navigateToHomePage}
          className="py-2  my-6 px-3 w-auto right-0 text-sm text-white rounded-md bg-brand-red shadow-md block md:inline-block active:bg-red-400 hover:bg-red-500 focus:outline-none focus:shadow-outline-red"
        >
          Cancel
        </button>
      </div>
    </PageDialog>
  );
};

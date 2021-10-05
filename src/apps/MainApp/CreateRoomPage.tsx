import React, { useState } from "react";
import { PageDialog } from "../../lib/components/PageDialog/PageDialog";
import { useHistory } from "react-router-dom";
import { PageDialogContent } from "../../lib/components/PageDialog/PageDialogContent";
import { PageDialogActions } from "../../lib/components/PageDialog/PageDialogActions";
import { PageDialogButton } from "../../lib/components/PageDialog/PageDialogButton";

export const CreateRoomPage = () => {
  const history = useHistory();
  const navigateToHomePage = () => {
    history.push("/");
  };
  const navigateToApp = () => {
    history.push("/app");
  };
  return (
    <PageDialog title="Create Room">
      <PageDialogContent>
        <form>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
            placeholder="Room Name"
          />
          <input
            className="appearance-none border rounded w-full py-2 px-3 my-2 text-gray-700 leading-tight focus:outline-none"
            placeholder="Your Name"
          />
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

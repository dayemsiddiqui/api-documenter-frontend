import { useServerApi } from "../../shared/infra/useServerApi";
import { auth } from "../../../../Authentication";
import { useEffect, useState } from "react";

export const useYoutubeConnect = () => {
  const { apiClient } = useServerApi();
  const connect = async () => {
    const idToken = await auth().currentUser?.getIdToken(true);
    const response = await apiClient.get("auth/connect", {
      headers: {
        "x-id-token": idToken,
      },
    });
    const url = response.data.url;
    window.location.replace(url + `&state=${idToken}`);
    console.log({ response });
  };

  return {
    connect,
  };
};

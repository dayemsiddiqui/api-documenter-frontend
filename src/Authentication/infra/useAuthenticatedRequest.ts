import { useEffect, useState } from "react";
import { AxiosPromise } from "axios";
import { auth } from "../index";

export const useAuthenticatedRequest = <T>(
  fetchData: (options?: any) => AxiosPromise<T>
) => {
  async function makeAuthenticatedRequest() {
    const idToken = await auth().currentUser?.getIdToken(true);
    const response = await fetchData({
      headers: {
        "x-id-token": idToken,
      },
    });
    return response;
  }

  return makeAuthenticatedRequest;
};

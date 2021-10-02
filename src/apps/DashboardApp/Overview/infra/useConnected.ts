import { useServerApi } from "../../shared/infra/useServerApi";
import { useEffect, useState } from "react";
import { auth } from "../../../../Authentication";
import { useAuthenticatedRequest } from "../../../../Authentication/infra/useAuthenticatedRequest";
import { useQuery } from "react-query";

export const useConnected = () => {
  const { isUserConnected } = useServerApi();
  const { data: response, isLoading } = useQuery(
    "isUserConnected",
    isUserConnected
  );

  return {
    isConnected: response ? response.data.connected : false,
    isLoading,
  };
};

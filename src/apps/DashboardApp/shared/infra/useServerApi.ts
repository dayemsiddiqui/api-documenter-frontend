import { DefaultApiFactory } from "smart-youtuber-client-sdk/api/api";
import axios from "axios";
import { useAuthenticatedRequest } from "../../../../Authentication/infra/useAuthenticatedRequest";
export const useServerApi = () => {
  // Updated the backend server
  if (!process.env.REACT_APP_SERVER_BASE_URL) {
    throw new Error("Server Base URL undefined");
  }
  const baseURL: string = process.env.REACT_APP_SERVER_BASE_URL;

  const apiClient = axios.create({
    baseURL: baseURL,
  });
  const { channelList, spamList, videoList, isUserConnected, analyseVideo } =
    DefaultApiFactory(
      {
        isJsonMime(mime: string): boolean {
          return true;
        },
      },
      baseURL,
      apiClient
    );

  return {
    channelList: useAuthenticatedRequest(channelList),
    spamList: useAuthenticatedRequest(spamList),
    videoList: useAuthenticatedRequest(videoList),
    isUserConnected: useAuthenticatedRequest(isUserConnected),
    analyseVideo: analyseVideo,
    apiClient,
  };
};

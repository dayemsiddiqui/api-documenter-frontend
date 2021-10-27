import axios from "axios";
import { DefaultApiFactory } from "planning-poker-client-sdk/api/api";

export const useBackendApi = () => {
  // Updated the backend server
  if (!process.env.REACT_APP_SERVER_BASE_URL) {
    throw new Error("Server Base URL undefined");
  }
  const baseURL: string = process.env.REACT_APP_SERVER_BASE_URL;

  const apiClient = axios.create({
    baseURL: baseURL,
  });
  const {
    roomsVote,
    roomsCreateRoom,
    roomsGetRoom,
    roomsJoinRoom,
    roomsNewGame,
  } = DefaultApiFactory(
    {
      isJsonMime(mime: string): boolean {
        return true;
      },
    },
    baseURL,
    apiClient
  );

  return {
    createRoom: roomsCreateRoom,
    vote: roomsVote,
    getRoom: roomsGetRoom,
    joinRoom: roomsJoinRoom,
    newGame: roomsNewGame,
    apiClient,
  };
};

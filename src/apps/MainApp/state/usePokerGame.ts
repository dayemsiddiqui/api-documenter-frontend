import { useEffect, useState } from "react";
import {
  ParticipantModel,
  ParticipantStatus,
} from "../domain/Participant.model";
import { PokerGameModel, PokerGameState } from "../domain/PokerGame.model";
import { PokerGameContextType } from "./PokerGameContext";
import { v4 } from "uuid";
import {
  ParticipantResponse,
  RoomResponse,
} from "planning-poker-client-sdk/api/api";
import { VoteValue } from "../domain";

const toParticipantModel = (
  response: ParticipantResponse
): ParticipantModel => {
  return {
    id: response.id,
    status:
      response.vote === "NotVoted"
        ? ParticipantStatus.Pending
        : ParticipantStatus.Voted,
    vote: response.vote as VoteValue,
    displayName: response.displayName,
  };
};

export const usePokerGame = (
  room: RoomResponse | undefined
): PokerGameContextType => {
  const [pokerGame, setPokerGame] = useState<PokerGameModel | undefined>(
    undefined
  );
  const [isLoading, setIsLoading] = useState(!!pokerGame);
  const showVotes = () => {
    if (pokerGame) {
      // TODO: check if all participants have already voted or not
      setPokerGame({
        ...pokerGame,
        state: PokerGameState.Visible,
      });
    }
  };

  useEffect(() => {
    const getPokerGameState = () => {
      if (pokerGame && room && pokerGame.pokerGameID === room?.game.id) {
        return pokerGame.state;
      }
      return PokerGameState.Hidden;
    };
    const initialPokerGame: PokerGameModel | undefined = room
      ? {
          pokerGameID: room.game.id,
          state: getPokerGameState(),
          participants: room.game.participants.map(toParticipantModel),
        }
      : undefined;

    setPokerGame(initialPokerGame);
  }, [room]);

  const isGameFinished = () => {
    return pokerGame !== undefined && everyoneHasVoted() && votesAreVisible();
  };

  const votesAreVisible = () =>
    pokerGame !== undefined && pokerGame.state === PokerGameState.Visible;

  const everyoneHasVoted = () => {
    if (!pokerGame) {
      return false;
    }
    return pokerGame.participants.every(
      (participant) => participant.status === ParticipantStatus.Voted
    );
  };

  return {
    showVotes,
    everyoneHasVoted,
    isGameFinished,
    votesAreVisible,
    isLoading,
    pokerGame: {
      pokerGameID: v4(),
      state: pokerGame ? pokerGame.state : PokerGameState.Hidden,
      participants: pokerGame ? pokerGame.participants : [],
    },
  };
};

import { Factory } from "fishery";
import {
  ParticipantModel,
  ParticipantStatus,
} from "../domain/Participant.model";
import { names, uniqueNamesGenerator } from "unique-names-generator";
import { v4 } from "uuid";
import { PokerGameModel, PokerGameState } from "../domain/PokerGame.model";
import { useState } from "react";

export const participantFactory = Factory.define<ParticipantModel>(
  ({ afterBuild }) => {
    afterBuild((participant) => {
      participant.displayName = uniqueNamesGenerator({
        dictionaries: [names],
      });
      return participant;
    });
    return {
      displayName: "Ernesto",
      id: v4(),
      vote: 2,
      status: ParticipantStatus.Pending,
    };
  }
);

export const useRoom = () => {
  const initialParticipants: ParticipantModel[] = [
    ...participantFactory.buildList(8, {
      status: ParticipantStatus.Pending,
    }),
  ];
  const [pokerGame, setPokerGame] = useState<PokerGameModel>({
    participants: initialParticipants,
    state: PokerGameState.Hidden,
    pokerGameID: v4(),
  });

  const newPokerGame = () => {
    console.log("Creating new Poker Game");
    setPokerGame({
      participants: participantFactory.buildList(8, {
        status: ParticipantStatus.Pending,
      }),
      state: PokerGameState.Hidden,
      pokerGameID: v4(),
    });
  };

  return {
    pokerGame,
    newPokerGame,
    setPokerGame,
  };
};

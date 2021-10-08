import { Factory } from "fishery";
import {
  ParticipantModel,
  ParticipantStatus,
} from "../domain/Participant.model";
import { names, uniqueNamesGenerator } from "unique-names-generator";
import { v4 } from "uuid";
import { PokerGameModel, PokerGameState } from "../domain/PokerGame.model";
import { useEffect, useState } from "react";
import { sample } from "lodash";
import { VoteValue } from "../domain";

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

  useEffect(() => {
    setInterval(mockWebSocketVoting, 3000);
  }, []);

  const mockWebSocketVoting = () => {
    const allParticipantAlreadyVoted = pokerGame.participants.every(
      (participant) => participant.status === ParticipantStatus.Voted
    );
    if (allParticipantAlreadyVoted) {
      return;
    }
    let oneParticipantAlreadyVoted = false;
    console.log("Participant is voting...");
    const updatedParticipants = pokerGame.participants.map((participant) => {
      if (
        participant.status === ParticipantStatus.Pending &&
        oneParticipantAlreadyVoted === false
      ) {
        participant.vote = sample<VoteValue>([
          "?",
          1,
          2,
          3,
          5,
          8,
          13,
        ]) as VoteValue;
        participant.status = ParticipantStatus.Voted;
        oneParticipantAlreadyVoted = true;
      }

      return participant;
    });
    setPokerGame({
      ...pokerGame,
      participants: updatedParticipants,
    });
  };

  return {
    pokerGame,
    newPokerGame,
  };
};

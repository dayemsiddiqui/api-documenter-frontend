import { useContext, useEffect } from "react";
import { PokerGameContext } from "./PokerGameContext";
import { PokerGameResult } from "../domain/PokerGame.model";
import { countBy, meanBy, round } from "lodash";
import { VoteValue } from "../domain";
import { ParticipantModel } from "../domain/Participant.model";
import { std } from "mathjs";
import { useRoomStore } from "./roomStore";

export const useGameResult = () => {
  const { pokerGame, isGameFinished } = useContext(PokerGameContext);
  const { gameResult, setGameResult, gameID } = useRoomStore((state) => ({
    gameResult: state.gameResult,
    setGameResult: state.setGameResult,
    gameID: state.room?.gameID,
  }));

  if (pokerGame === undefined) {
    throw new Error("Poker Game Not Found");
  }

  useEffect(() => {
    if (pokerGame.participants.length === 0) {
      return;
    }
    if (isGameFinished()) {
      const participantsWithLegalVote = pokerGame.participants.filter(
        (participant) =>
          participant.vote !== "?" && participant.vote !== "NotVoted"
      );
      const result: PokerGameResult = {
        average: average(participantsWithLegalVote),
        mostVotedCards: topVotedCards(),
        std_deviation: std_deviation(participantsWithLegalVote),
      };
      setGameResult(result);
    }
  }, [gameID]);

  const average = (participants: ParticipantModel[]) => {
    const average = meanBy(participants, (participant) =>
      parseInt(participant.vote)
    );
    return round(average, 1);
  };

  const std_deviation = (participants: ParticipantModel[]) => {
    const votes = participants.map((participant) => parseInt(participant.vote));
    const std_div = std(votes);
    return round(std_div, 1);
  };

  const topVotedCards = () => {
    const vote = countBy(pokerGame.participants, "vote");
    const votes = Object.entries(vote).map(([voteValue, count]) => {
      return {
        count,
        value: voteValue as VoteValue,
      };
    });
    return votes.sort((a, b) => b.count - a.count).slice(0, 3);
  };

  return {
    gameResult,
  };
};

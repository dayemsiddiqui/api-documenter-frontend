import React, { useContext, useEffect } from "react";
import LandingPageHeader from "../../LandingPageApp/LandingPageHeader";
import { PickVote } from "./PickVote";
import { PokerGame } from "./PokerGame";
import { PrimaryLink } from "../../../lib/components/misc/Links";
import Swal from "sweetalert2";
import { PokerGameContext } from "../state/PokerGameContext";
import { GameResult } from "./GameResult";
import { usePokerGame } from "../state/usePokerGame";
import { useGetRoomApi } from "../infra/useGetRoomApi";
import { useHistory, useParams } from "react-router-dom";
import { useJoinRoomApi } from "../infra/useJoinRoomApi";
import { useNewGameApi } from "../infra/useNewGameApi";

function RoomBottomSection() {
  const winners = [
    {
      storyPoint: "3",
      votes: 3,
    },
    {
      storyPoint: "5",
      votes: 2,
    },
    {
      storyPoint: "?",
      votes: 2,
    },
  ];
  const { votesAreVisible } = useContext(PokerGameContext);
  return (
    <div className="fixed bottom-0 w-full">
      {votesAreVisible() ? <GameResult /> : <PickVote />}
    </div>
  );
}

export const Room: React.FC<{}> = () => {
  /**
   * TODO: How to find out in a new user is joining an exisitng room or someone joined an exisiting room
   * Solution: Update the backend, always create an empty room and then call a separate api for joining the room
   */

  const showInviteLink = () => {
    Swal.fire({
      title: "Share Invitation Link",
      text: window.location.href,
      icon: "success",
      confirmButtonColor: "#59C9A5",
    });
  };
  const { roomID } = useParams<{ roomID: string }>();
  const { mutate: newPokerGame } = useNewGameApi(roomID);
  const { isSuccess, data: response, isLoading } = useGetRoomApi(roomID);
  const pokerGameContext = usePokerGame(response ? response.data : undefined);
  const { isLoading: isJoining, currentParticipant } = useJoinRoomApi();
  const history = useHistory();
  useEffect(() => {
    if (!currentParticipant) {
      history.push(`/joinRoom/${roomID}`);
      return;
    }
  }, [currentParticipant]);
  const startNewGame = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Estimation is still in progress!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, start a new game!",
    }).then((result) => {
      if (result.isConfirmed) {
        newPokerGame();
      }
    });
  };

  return (
    <PokerGameContext.Provider value={pokerGameContext}>
      <div>
        <LandingPageHeader roundedHeaderButton={false} />
        <div className="max-w-2xl mx-auto ">
          {isJoining ? <div>Loading...</div> : <PokerGame />}
          <div className="flex-col justify-center pt-1 text-center">
            <button
              disabled={!pokerGameContext.isGameFinished()}
              onClick={startNewGame}
              className=" w-full my-4 bg-brand-red hover:bg-red-500 py-2 right rounded-lg text-capitalize text-white font-bold shadow disabled:opacity-50"
            >
              New Game
            </button>
            <PrimaryLink className="mx-auto" onClick={showInviteLink}>
              Invite Team Members
            </PrimaryLink>
          </div>
        </div>
        <RoomBottomSection />
      </div>
    </PokerGameContext.Provider>
  );
};

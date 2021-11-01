import React, { useContext } from "react";
import LandingPageHeader from "../../LandingPageApp/LandingPageHeader";
import { PickVote } from "./PickVote";
import { PokerGame } from "./PokerGame";
import { PrimaryLink } from "../../../lib/components/misc/Links";
import Swal from "sweetalert2";
import { useRoom } from "../state/useRoom";
import { PokerGameContext } from "../state/PokerGameContext";
import { GameResult } from "./GameResult";
import { usePokerGame } from "../state/usePokerGame";
import { useGetRoomApi } from "../infra/useGetRoomApi";
import { useParams } from "react-router-dom";

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
  const showInviteLink = () => {
    Swal.fire({
      title: "Share Invitation Link",
      text: window.location.href,
      icon: "success",
      confirmButtonColor: "#59C9A5",
    });
  };
  const { roomID } = useParams<{ roomID: string }>();
  const { pokerGame, newPokerGame } = useRoom();
  // TODO: Get room ID via react-router
  const { isSuccess, data, isLoading } = useGetRoomApi(roomID);
  const pokerGameContext = usePokerGame(data ? data : pokerGame);

  const startNewGame = () => {
    if (!pokerGameContext.isGameFinished()) {
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
      return;
    }
    newPokerGame();
  };

  return (
    <PokerGameContext.Provider value={pokerGameContext}>
      <div>
        <LandingPageHeader roundedHeaderButton={false} />
        <div className="max-w-2xl mx-auto ">
          <PokerGame />
          <div className="flex-col justify-center pt-1 text-center">
            <button
              onClick={startNewGame}
              className=" w-full my-4 bg-brand-red hover:bg-red-500 py-2 right rounded-lg text-capitalize text-white font-bold shadow"
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

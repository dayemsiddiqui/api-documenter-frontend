import React from "react";
import LandingPageHeader from "../../LandingPageApp/LandingPageHeader";
import { CardSelector } from "./CardSelector";
import { PokerGame } from "./PokerGame";
import { PrimaryLink } from "../../../lib/components/misc/Links";
import Swal from "sweetalert2";
import { useRoom } from "../state/useRoom";

export const Room: React.FC<{}> = () => {
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
  const showInviteLink = () => {
    Swal.fire({
      title: "Share Invitation Link",
      text: "https://planning-poker-game.netlify.app/",
      icon: "success",
      confirmButtonColor: "#59C9A5",
    });
  };

  const { pokerGame, newPokerGame } = useRoom();

  return (
    <div>
      <LandingPageHeader roundedHeaderButton={false} />
      <div className="max-w-2xl mx-auto ">
        <PokerGame pokerGame={pokerGame} />
        <div className="flex-col justify-center pt-1 text-center">
          <button
            onClick={newPokerGame}
            className=" w-full my-4 bg-brand-red hover:bg-red-500 py-2 right rounded-lg text-capitalize text-white font-bold shadow"
          >
            New Game
          </button>
          <PrimaryLink className="mx-auto" onClick={showInviteLink}>
            Invite Team Members
          </PrimaryLink>
        </div>
        {/*<button className=" w-full my-4 bg-brand-red hover:bg-red-500 py-2 right rounded-lg text-capitalize text-white font-bold shadow">*/}
        {/*  VoteModel on Next Issue*/}
        {/*</button>*/}
      </div>
      <div className="fixed bottom-0 w-full">
        <CardSelector />
        {/*<VotingResult winners={winners} />*/}
      </div>
    </div>
  );
};

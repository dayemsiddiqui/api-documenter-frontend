import React from "react";

function VisibleVote(props: { vote: number }) {
  return (
    <div>
      <div className="w-16 p-xl h-24 bg-gray-50 my-2 rounded text-center shadow text-brand-red cursor-pointer">
        <p className="py-8 font-bold text-3xl ">{props.vote}</p>
      </div>
      <span className=" font-bold text-capitalize">Ernesto</span>
    </div>
  );
}

function HiddenVote() {
  return (
    <div>
      <div className="w-16 p-xl p-1.5 h-24 bg-gray-50 my-2 rounded text-center shadow bg-brand-green  hover:text-white cursor-pointer"></div>
      <span className=" font-bold text-capitalize">Ernesto</span>
    </div>
  );
}

function PendingVote() {
  return (
    <div>
      <div className="w-16 p-xl p-1.5 h-24 bg-gray-50 my-2 rounded text-center shadow bg-gray-300  hover:text-white cursor-pointer"></div>
      <span className=" font-bold text-capitalize">Ernesto</span>
    </div>
  );
}

export const VoteViewer: React.FC<{}> = () => {
  const vote = 3;
  return (
    <>
      <div className="grid grid-cols-4 justify-items-center">
        <HiddenVote />
        <VisibleVote vote={vote} />
        <HiddenVote />
        <VisibleVote vote={vote} />
        <HiddenVote />
        <VisibleVote vote={vote} />
        <VisibleVote vote={vote} />
        <PendingVote />
      </div>
    </>
  );
};

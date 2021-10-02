import React from "react";
import { OverviewPage, ConnectYoutubeAccount } from "../index";
import { useConnected } from "../infra/useConnected";

const Dashboard: React.FC<{}> = () => {
  const { isConnected } = useConnected();
  if (isConnected) {
    return <OverviewPage />;
  }
  return <ConnectYoutubeAccount />;
};

export default Dashboard;

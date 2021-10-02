import React from "react";
import { PulsingPost } from "./PulsingPost";

export const Loader: React.FC<{ isLoading: boolean; children: JSX.Element }> =
  ({ isLoading, children }): JSX.Element => {
    if (isLoading) {
      return (
        <>
          <PulsingPost />
          <PulsingPost />
          <PulsingPost />
        </>
      );
    }
    return children;
  };

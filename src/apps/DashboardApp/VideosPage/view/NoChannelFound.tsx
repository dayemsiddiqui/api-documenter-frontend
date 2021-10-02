import React from "react";
import { ReactComponent as NoVideosFound } from "../../../../assets/illustrations/noVideosFound.svg";

import { Button } from "@windmill/react-ui";
import { ApplicationHero } from "../../../../lib/components/ApplicationHero";

export const NoChannelFound: React.FC<{ connectAccount: () => void }> = ({
  connectAccount,
}) => (
  <ApplicationHero
    title="No Videos Found"
    description="It turns out you have not added any channel to Smart Youtube for analysis.
     Or your connected channels does not have any published videos.
     Click on the button below enable monitoring for your youtube channels"
  >
    <Button onClick={connectAccount} className="max-w-xs mx-auto">
      Add Channels
    </Button>
    <NoVideosFound className="mx-auto" />
  </ApplicationHero>
);

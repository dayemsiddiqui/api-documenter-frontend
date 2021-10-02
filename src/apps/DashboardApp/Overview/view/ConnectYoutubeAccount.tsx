import React from "react";
import { ReactComponent as AccountSetupIllustraion } from "../../../../assets/illustrations/accountSetup.svg";

import { Button } from "@windmill/react-ui";
import { ApplicationHero } from "../../../../lib/components/ApplicationHero";
import { useYoutubeConnect } from "../infra/useYoutubeConnect";
import { LandingPageIllustration } from "../../../../assets/images/LandingPageIllustration";
import { IllustrationContainer } from "../../../../lib/components/IllustrationContainer";
import { ConnectAccountIllustration } from "../../../../assets/illustrations/ConnectAccountIllustration";

export const ConnectYoutubeAccount: React.FC<{}> = ({}) => {
  const { connect } = useYoutubeConnect();
  return (
    <ApplicationHero
      title="Get Started With Smart Youtuber"
      description="Setup your account to learn what your subscribers are demanding.
            Identify feedback and suggestions from your subscribers and filter
            out the spam."
    >
      <Button onClick={connect} className="max-w-xs mx-auto">
        Connect to Youtube
      </Button>
      <IllustrationContainer className="mx-auto">
        <ConnectAccountIllustration />
      </IllustrationContainer>
    </ApplicationHero>
  );
};

export default ConnectYoutubeAccount;

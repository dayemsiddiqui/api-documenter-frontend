import React, { useContext, useState } from "react";
import tw from "twin.macro";
import { useHistory, withRouter } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { PrimaryButton } from "../../lib/components/misc/Buttons";
import LandingPageHeader from "./LandingPageHeader";
import { useTitle } from "../../hooks/useTitle";
import { LandingPageIllustration } from "../../assets/images/LandingPageIllustration";
import { IllustrationContainer } from "../../lib/components/IllustrationContainer";
import {
  Container,
  LeftColumn,
  RightColumn,
  TwoColumn,
} from "../../lib/components/misc/Layouts";
import { Heading } from "../../lib/components/misc/Typography";

const LandingPage: React.FC<any> = () => {
  const history = useHistory();

  const navigateToCreateRoomPage = () => {
    history.push("/dashboard");
  };

  useTitle("API Documenter");

  return (
    <>
      <div className="bg-brand-yellow">
        <LandingPageHeader roundedHeaderButton={false} />
        <Container>
          <TwoColumn>
            <LeftColumn className="text-white">
              <Heading className="text-brand-red">
                Simple <span className="text-brand-blue">documentation</span> for
                <span className="text-brand-blue"> agile</span> teams.
              </Heading>
              <PrimaryButton
                onClick={navigateToCreateRoomPage}
                className="my-6"
              >
                Upload API Docs
              </PrimaryButton>
            </LeftColumn>
            <RightColumn>
              <IllustrationContainer className="text-right flex justify-center lg:justify-end items-center z-2 absolute">
                <LandingPageIllustration />
              </IllustrationContainer>
            </RightColumn>
          </TwoColumn>
        </Container>
      </div>
      <motion.div
        className="w-auto h-32 bg-brand-yellow relative"
        initial={{ rotate: 2.5, y: -50, zIndex: -10 }}
      />
    </>
  );
};

export default LandingPage;

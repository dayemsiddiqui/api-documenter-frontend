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
    history.push("/createRoom");
  };

  useTitle("Poker Planning");

  return (
    <>
      <div className="bg-brand-yellow">
        <LandingPageHeader roundedHeaderButton={false} />
        <Container>
          <TwoColumn>
            <LeftColumn className="text-white">
              <Heading className="text-brand-red">
                Easy <span className="text-brand-blue">estimates</span> for
                <span className="text-brand-blue"> efficient</span> teams.
              </Heading>
              <PrimaryButton
                onClick={navigateToCreateRoomPage}
                className="my-6"
              >
                Create A New Room
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

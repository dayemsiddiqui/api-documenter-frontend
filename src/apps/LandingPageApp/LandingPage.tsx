import React, { useContext } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { withRouter } from "react-router-dom";
import { motion } from "framer-motion";
import { ReactComponent as SvgDecoratorBlob1 } from "../../assets/images/svg-decorator-blob-1.svg";
import DesignIllustration from "../../assets/images/design-illustration-2.svg";
import { PrimaryButton } from "../../lib/components/misc/Buttons";
import LandingPageHeader from "./LandingPageHeader";
import { useAuthentication } from "../../Authentication";
import { googleProvider } from "../../Authentication/infra/authMethod";
import { AuthContext } from "../../Authentication/state/Auth";
import { Redirect } from "react-router-dom";
import { useTitle } from "../../hooks/useTitle";
import { LandingPageIllustration } from "../../assets/images/LandingPageIllustration";
import { IllustrationContainer } from "../../lib/components/IllustrationContainer";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col lg:flex-row lg:items-center max-w-screen-xl mx-auto py-20 md:py-24`;
const LeftColumn = tw.div`relative lg:w-5/12 text-center max-w-lg mx-auto lg:max-w-none lg:text-left`;
const RightColumn = tw.div`relative mt-12 lg:mt-0 flex-1 flex flex-col justify-center lg:self-end`;

const Heading = tw.h1`font-bold text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-brand-red leading-tight`;
const Paragraph = tw.p`my-5 lg:my-8 text-base text-white xl:text-lg font-bold`;

const LandingPage: React.FC<any> = ({ history }) => {
  const { signIn } = useAuthentication(googleProvider);
  const authenticate = async () => {
    await signIn();
    history.push("/app");
  };

  useTitle("Smart Youtuber");

  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    return <Redirect to="/app" />;
  }

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
              <PrimaryButton onClick={authenticate} className="my-6">
                Create A New Room
              </PrimaryButton>
            </LeftColumn>
            <RightColumn>
              <IllustrationContainer className="text-right flex justify-center lg:justify-end items-center z-2 absolute">
                <LandingPageIllustration />
              </IllustrationContainer>
            </RightColumn>
          </TwoColumn>
          {/*<DecoratorBlob1 />*/}
        </Container>
      </div>
      <motion.div
        className="w-auto h-32 bg-brand-yellow relative"
        initial={{ rotate: 2.5, y: -50, zIndex: -10 }}
      ></motion.div>
    </>
  );
};

export default withRouter(LandingPage);

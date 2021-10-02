import React, { useContext } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { withRouter } from "react-router-dom";
import { ReactComponent as SvgDecoratorBlob1 } from "../../assets/images/svg-decorator-blob-1.svg";
import DesignIllustration from "../../assets/images/design-illustration-2.svg";
import { PrimaryButton } from "../components/misc/Buttons";
import SmartYoutuberHeader from "../components/headers/SmartYoutuberHeader";
import { useAuthentication } from "../../Authentication";
import { googleProvider } from "../../Authentication/infra/authMethod";
import { AuthContext } from "../../Authentication/state/Auth";
import { Redirect } from "react-router-dom";
import { useTitle } from "../../hooks/useTitle";
import { LandingPageIllustration } from "../../assets/images/LandingPageIllustration";
import { IllustrationContainer } from "../components/IllustrationContainer";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col lg:flex-row lg:items-center max-w-screen-xl mx-auto py-20 md:py-24`;
const LeftColumn = tw.div`relative lg:w-5/12 text-center max-w-lg mx-auto lg:max-w-none lg:text-left`;
const RightColumn = tw.div`relative mt-12 lg:mt-0 flex-1 flex flex-col justify-center lg:self-end`;

const Heading = tw.h1`font-bold text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-900 leading-tight`;
const Paragraph = tw.p`my-5 lg:my-8 text-base xl:text-lg`;

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
      <SmartYoutuberHeader roundedHeaderButton={false} />
      <Container>
        <TwoColumn>
          <LeftColumn>
            <Heading>
              Remove <span className="text-purple-700">spam</span> from{" "}
              <span className="text-purple-700">Youtube</span> videos.
            </Heading>
            <Paragraph>
              Use smart youtuber to automatically remove spam comments from your
              youtube videos using Machine Learning and AI.
            </Paragraph>
            <PrimaryButton onClick={authenticate}>
              Login With Google
            </PrimaryButton>
          </LeftColumn>
          <RightColumn>
            <IllustrationContainer className="text-right flex justify-center lg:justify-end items-center">
              {/*<img*/}
              {/*  tw="min-w-0 w-full max-w-lg xl:max-w-3xl"*/}
              {/*  src={DesignIllustration}*/}
              {/*  alt="Design Illustration"*/}
              {/*/>*/}
              <LandingPageIllustration />
            </IllustrationContainer>
          </RightColumn>
        </TwoColumn>
        {/*<DecoratorBlob1 />*/}
      </Container>
    </>
  );
};

export default withRouter(LandingPage);

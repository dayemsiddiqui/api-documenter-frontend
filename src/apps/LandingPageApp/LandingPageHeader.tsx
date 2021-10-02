import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import logo from "../../images/logo.svg";
import { ReactComponent as MenuIcon } from "feather-icons/dist/icons/menu.svg";
import { ReactComponent as CloseIcon } from "feather-icons/dist/icons/x.svg";

const Header = tw.header`
  flex justify-between items-center
  max-w-screen-xl mx-auto
`;

export const NavLinks = tw.div`inline-block py-10`;

/* hocus: stands for "on hover or focus"
 * hocus:bg-purple-700 will apply the bg-purple-700 class on hover or focus
 */
export const NavLink = tw.a`
  text-lg my-2 lg:text-sm lg:mx-6 lg:my-0
  font-semibold tracking-wide transition duration-300
  pb-1 border-b-2 border-transparent hover:border-purple-500 hocus:text-purple-500
`;

export const PrimaryLink = tw(NavLink)`
  lg:mx-0
  px-8 py-3 rounded bg-purple-500 text-gray-100
  hocus:bg-purple-700 hocus:text-gray-200 focus:shadow
  border-b-0
`;

export const LogoLink = styled(NavLink)`
  ${tw`flex items-center font-black border-b-0 text-2xl! ml-0!`};

  img {
    ${tw`w-10 mr-3`}
  }
`;

export const DesktopNavLinks = tw.nav`
  hidden lg:flex flex-1 justify-between items-center py-10
`;

const LandingPageHeader: React.FC<any> = ({ logoLink, links, className }) => {
  /*
   * This header component accepts an optionals "links" prop that specifies the links to render in the navbar.
   * This links props should be an array of "NavLinks" components which is exported from this file.
   * Each "NavLinks" component can contain any amount of "NavLink" component, also exported from this file.
   * This allows this Header to be multi column.
   * So If you pass only a single item in the array with only one NavLinks component as root, you will get 2 column header.
   * Left part will be LogoLink, and the right part will be the the NavLinks component you
   * supplied.
   * Similarly if you pass 2 items in the links array, then you will get 3 columns, the left will be "LogoLink", the center will be the first "NavLinks" component in the array and the right will be the second "NavLinks" component in the links array.
   * You can also choose to directly modify the links here by not passing any links from the parent component and
   * changing the defaultLinks variable below below.
   * If you manipulate links here, all the styling on the links is already done for you. If you pass links yourself though, you are responsible for styling the links or use the helper styled components that are defined here (NavLink)
   */
  const defaultLinks = [
    <NavLinks key={1}>
      <PrimaryLink href="https://smart-youtuber.surge.sh/login">
        Login
      </PrimaryLink>
    </NavLinks>,
  ];

  const defaultLogoLink = (
    <LogoLink tw="text-brand-blue hover:text-brand-blue" href="/">
      <span tw="text-brand-red">Poker</span> Planning
    </LogoLink>
  );

  logoLink = logoLink || defaultLogoLink;

  return (
    <Header className={className || "header-light"}>
      <DesktopNavLinks>{logoLink}</DesktopNavLinks>
    </Header>
  );
};

export default LandingPageHeader;

import { NavLink } from "react-router-dom";
import styled from "styled-components";
import FlexContainer from "../design-system/FlexContainer";
import logo from "../../assets/logo.svg";
import { useState } from "react";

const routes = [
  { name: "About", path: "about" },
  { name: "Tokenomics", path: "tokenomics" },
  { name: "Vesting", path: "vesting" },
  { name: "Meetups", path: "meetups" },
  { name: "Team", path: "team" },
];

export default function Navbar() {
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <SNavbarContainer>
      <SHomeLink href="/">
        <SLogo src={logo} />
        ForcedHodl
      </SHomeLink>

      <SHiddenFlexContainer gap={10}>
        {routes.map((route) => {
          return (
            <SNavLink
              key={route.path}
              to={route.path}
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              {route.name}
            </SNavLink>
          );
        })}
      </SHiddenFlexContainer>

      <SHiddenFlexContainer>
        <SLanguageButton>EN</SLanguageButton>
        <SButtonToDapp>Dapp</SButtonToDapp>
      </SHiddenFlexContainer>
      <SMenuTrigger onClick={() => setMenuOpened((previous) => !previous)}>
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 512 512"
          height="2rem"
          width="2rem"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"></path>
        </svg>
      </SMenuTrigger>
      <SPhoneMenu style={{ width: menuOpened ? "100vw" : 0 }}>
        <SPhoneMenuItems isColumn gap={2}>
          {routes.map((route) => {
            return (
              <SNavLink
                onClick={() => setMenuOpened(false)}
                key={route.path}
                to={route.path}
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                {route.name}
              </SNavLink>
            );
          })}
        </SPhoneMenuItems>
        <SButtonToDapp>Dapp</SButtonToDapp>
      </SPhoneMenu>
    </SNavbarContainer>
  );
}

const SNavbarContainer = styled.div`
  display: flex;
  height: 4rem;
  justify-content: space-between;
  align-items: center;
  max-width: 90rem;
  margin: 0 auto;
  width: 100%;
  padding: ${(props) => props.theme.getSpacing(0, 3)};
`;

const SHiddenFlexContainer = styled(FlexContainer)`
  @media screen and (max-width: 900px) {
    display: none;
  }
`;

const SNavLink = styled(NavLink)`
  text-decoration: none;
  color: #1bee21;
  padding: 0.625rem 0.75rem;
  border-radius: 8px;
  transition: background 200ms ease-in-out;
  background: none;

  :hover,
  &.active {
    background: #1b1b1b;
  }

  @media screen and (max-width: 900px) {
    margin: ${(props) => props.theme.getSpacing(0, 6)};
  }
`;

// todo: Refacto those buttons to button component

const SLanguageButton = styled.button`
  border: 2px solid #1bee21;
  border-radius: 50px;
  background: none;
  color: #1bee21;
  padding: 0.5rem;
  margin-right: ${(props) => props.theme.getSpacing(2)};
`;

const SButtonToDapp = styled.button`
  border: 2px solid #1bee21;
  border-radius: 6px;
  background: none;
  color: #1bee21;
  padding: 0.5rem;
  cursor: pointer;

  @media screen and (max-width: 900px) {
    margin: ${(props) => props.theme.getSpacing(6)};
    width: calc(100% - 48px);
  }
`;

const SHomeLink = styled.a`
  color: inherit;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.getSpacing(2)};
  font-size: 1.25rem;
  z-index: 11;
`;

const SLogo = styled.img`
  height: 50px;
  width: 50px;
`;

const SMenuTrigger = styled.button`
  border: none;
  background: none;
  color: inherit;
  cursor: pointer;
  z-index: 11;

  @media screen and (min-width: 901px) {
    display: none;
  }
`;

const SPhoneMenu = styled.div`
  position: fixed;
  top: 5rem;
  bottom: 0;
  right: 0;
  background: black;
  z-index: 10;
  transition: width 300ms ease-in-out;

  @media screen and (min-width: 901px) {
    display: none;
  }
`;

const SPhoneMenuItems = styled(FlexContainer)``;

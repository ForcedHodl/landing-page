import React from "react";
import styled from "styled-components";
import FlexContainer from "../design-system/FlexContainer";
import github from "../../assets/github.svg";
import medium from "../../assets/medium.svg";
import instagram from "../../assets/instagram.svg";
import youtube from "../../assets/youtube.svg";
import discord from "../../assets/discord.svg";
import reddit from "../../assets/reddit.svg";
import telegram from "../../assets/telegram.svg";
import twitter from "../../assets/twitter.svg";

export default function Footer() {
  return (
    <SFooter>
      <FlexContainer gap={6}>
        <SFooterItem>Email</SFooterItem>
        <SFooterItem>Terms</SFooterItem>
        <SFooterItem>Privacy</SFooterItem>
      </FlexContainer>
      <FlexContainer gap={6}>
        <SFooterItem>
          <SIcon src={github} />
        </SFooterItem>
        <SFooterItem>
          <SIcon src={medium} />
        </SFooterItem>
        <SFooterItem>
          <SIcon src={instagram} />
        </SFooterItem>
        <SFooterItem>
          <SIcon src={youtube} />
        </SFooterItem>
        <SFooterItem>
          <SIcon src={discord} />
        </SFooterItem>
        <SFooterItem>
          <SIcon src={reddit} />
        </SFooterItem>
        <SFooterItem>
          <SIcon src={telegram} />
        </SFooterItem>
        <SFooterItem>
          <SIcon src={twitter} />
        </SFooterItem>
      </FlexContainer>
    </SFooter>
  );
}

const SFooter = styled.footer`
  position: fixed;
  /* max-width: 80rem; */
  bottom: 0;
  background: black;
  width: 100vw;
  margin: 0 auto;
  padding: ${(props) => props.theme.getSpacing(4, 0, 4, 10)};
  display: flex;
  justify-content: space-between;

  ::before {
    content: "";
    position: fixed;
    left: 0;
    width: 100vw;
    height: 2px;
    background: #1bee21;
  }

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const SFooterItem = styled.div`
  position: relative;
  transform: translateX(-50%);
  margin-top: 1.325rem;

  ::before {
    content: "";
    position: absolute;
    left: 50%;
    top: -75%;
    height: 0.75rem;
    width: 2px;
    background: #1bee21;
  }
`;

const SIcon = styled.img`
  height: 22px;
  width: 22px;
`;

import React from "react";
import styled from "styled-components";
import moon from "../assets/moon.mp4";

export default function HomePage() {
  return (
    <SMainContainer>
      <SMoon src={moon} autoPlay muted loop controls={false} />
    </SMainContainer>
  );
}

const SMainContainer = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const SMoon = styled.video`
  max-width: 100%;
  max-height: 90vh;
  pointer-events: none;
`;

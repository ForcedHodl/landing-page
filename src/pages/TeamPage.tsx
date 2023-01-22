import Reacrt from "react";
import styled from "styled-components";
import worldmap from "../assets/worldmap.svg";
import rocket from "../assets/rocket.svg";
import FlexContainer from "../components/design-system/FlexContainer";

export default function TeamPage() {
  return (
    <SMainContainer>
      <STitle>THE FORCED HODL FAMILY</STitle>
      <p style={{ textAlign: "center" }}>
        We're a decentralized community helping others to learn about
        cryptocurrency and investing.
      </p>
      <img src={worldmap} style={{ width: "100%", maxWidth: "35rem" }} />
      <SFlexContainer childrenHorizontalAlign="spaced" gap={4}>
        <SContentContainer>
          <STitle style={{ marginTop: 0 }}>OPENSOURCE</STitle>
          <p style={{ textAlign: "center" }}>
            <SGreenSpan>Forced Hodl</SGreenSpan> is an open source project
            <br />
            <br />
            The source code can be found on our <SGreenSpan>GitHub</SGreenSpan>
          </p>
        </SContentContainer>
        <SContentContainer>
          <STitle style={{ marginTop: 0 }}>DECENTRALIZED</STitle>
          <p style={{ textAlign: "center" }}>
            <SGreenSpan>Forced Hodl</SGreenSpan> has no central authority or CEO
            <br />
            <br />
            <SGreenSpan>$HODL</SGreenSpan> is a vesting token on the Binance
            smart chain
          </p>
        </SContentContainer>
      </SFlexContainer>
      <FlexContainer
        fullWidth
        childrenHorizontalAlign="center"
        gap={4}
        margin={[4, 0, 2, 0]}
      >
        <SRocket src={rocket} />
        <SBigTitle>TO THE MOON</SBigTitle>
        <SRocket src={rocket} />
      </FlexContainer>
      <p>Join the Forced Hodl Family</p>
    </SMainContainer>
  );
}

const SMainContainer = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: white;
`;

const STitle = styled.h2`
  font-size: 2.125rem;
  text-align: center;
  margin: ${(props) => props.theme.getSpacing(8, 0)};
  color: #70ea4e;
`;

const SContentContainer = styled.div`
  width: 100%;
  border: 5px solid #70ea4e;
  border-radius: 12px;
  padding: 1.25rem;
`;

const SFlexContainer = styled(FlexContainer)`
  @media screen and (max-width: 680px) {
    flex-direction: column;
  }
`;

const SBigTitle = styled.h2`
  font-size: 3rem;
  text-align: center;
  margin: ${(props) => props.theme.getSpacing(4, 0)};
  color: #70ea4e;
`;

const SGreenSpan = styled.span`
  color: #70ea4e;
`;

const SRocket = styled.img`
  max-width: 5rem;
`;

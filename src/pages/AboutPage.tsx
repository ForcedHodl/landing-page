import Reacrt from "react";
import styled from "styled-components";
import FlexContainer from "../components/design-system/FlexContainer";
import lockWaves from "../assets/lock_waves.svg";
import rocket from "../assets/rocket.svg";
import candles from "../assets/candles.svg";

export default function AboutPage() {
  return (
    <SMainContainer>
      <STitle>
        DECENTRALIZED AND OPEN SOURCE
        <br />
        CRYPTOCURRENCY AND TOKEN
      </STitle>

      <SParagraph>
        Think like a long term investor and find a better way to save by vesting
      </SParagraph>

      {/* ICONS */}
      <SLockWaves src={lockWaves} />

      <SParagraph>
        $HODL earns a top tier interest rate in a long term vesting account on
        the Binance Smart Chain.
      </SParagraph>

      <STitle>
        FORCED HODL IS A COMMUNITY OF LONG TERM
        <br />
        INVESTORS CREATING A FUN NEW WAY TO SAVE
      </STitle>

      <FlexContainer
        margin={[6, 0, 6, 0]}
        fullWidth
        childrenHorizontalAlign="center"
      >
        <SParagraphContainer>
          <SParagraph style={{ textAlign: "left" }}>
            Community Driven marketing by the Forced Hodl Family
          </SParagraph>
          <br />
          <SParagraph style={{ textAlign: "left" }}>
            Fair Launch announced to social media
          </SParagraph>
          <br />
          <SParagraph style={{ textAlign: "left" }}>
            Interest earning vesting options
          </SParagraph>
        </SParagraphContainer>

        <SCandles src={candles} />
      </FlexContainer>

      <br />

      <SParagraph>Join the Forced Hodl family</SParagraph>
      <FlexContainer fullWidth childrenHorizontalAlign="center" gap={4}>
        <SRocket src={rocket} />
        <SBigTitle>TO THE MOON</SBigTitle>
        <SRocket src={rocket} />
      </FlexContainer>
    </SMainContainer>
  );
}

const SMainContainer = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const STitle = styled.h2`
  font-size: 2.125rem;
  text-align: center;
  margin: ${(props) => props.theme.getSpacing(8, 0)};
`;

const SBigTitle = styled.h2`
  font-size: 3rem;
  text-align: center;
  margin: ${(props) => props.theme.getSpacing(4, 0, 8, 0)};
`;

const SParagraph = styled.p`
  color: white;
  text-align: center;
  font-size: 1.25rem;
`;

const SLockWaves = styled.img`
  max-width: 22rem;
  margin: ${(props) => props.theme.getSpacing(4, 0)};
`;

const SRocket = styled.img`
  max-width: 5rem;
`;

const SCandles = styled.img`
  max-width: 10rem;
  @media screen and (max-width: 475px) {
    display: none;
  }
`;

const SParagraphContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media screen and (max-width: 475px) {
    > p {
      text-align: center !important;
    }
  }
`;

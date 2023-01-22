import Reacrt from "react";
import styled from "styled-components";
import unlocked from "../assets/unlocked.svg";
import FlexContainer from "../components/design-system/FlexContainer";
import hodl from "../assets/HODL.svg";
import veHodl from "../assets/veHODL.svg";

export default function VestingPage() {
  return (
    <SMainContainer>
      <SUnlockedImage src={unlocked} />
      <STitle>CHOOSE A PERIOD TO LOCK YOUR TOKENS</STitle>
      <SGrid>
        <SGridItem>1 month</SGridItem>
        <SGridItem>6 months</SGridItem>
        <SGridItem>1 year</SGridItem>
        <SGridItem>2 years</SGridItem>
      </SGrid>
      <p>Earn a higher APR by choosing the longer vesting term</p>
      <STitle>WHAT HAPPENS WHEN I VEST MY TOKENS ?</STitle>
      <p style={{ textAlign: "center" }}>
        The <SGreenSpan>$HODL </SGreenSpan>tokens is swapped for{" "}
        <SGreenSpan>$veHODL </SGreenSpan>tokens at{" "}
        <SGreenSpan>the current ratio</SGreenSpan>
        <br />
        Rewards are earned in <SGreenSpan>$HODL </SGreenSpan> and can be
        reinvested to <SGreenSpan>$veHODL</SGreenSpan>
      </p>

      <FlexContainer
        childrenVerticalAlign="center"
        gap={4}
        margin={[8, 0, 0, 0]}
      >
        <FlexContainer isColumn childrenHorizontalAlign="center" gap={2}>
          <img src={hodl} style={{ width: "5rem" }} />
          <SGreenSpan>$HODL</SGreenSpan>
        </FlexContainer>
        <FlexContainer childrenVerticalAlign="center">
          <SGreenArrow />
          <SGreenStick />
          <SGreenArrow rotate />
        </FlexContainer>
        <FlexContainer isColumn childrenHorizontalAlign="center" gap={2}>
          <img src={veHodl} style={{ width: "5rem" }} />
          <SGreenSpan>$veHODL</SGreenSpan>
        </FlexContainer>
      </FlexContainer>
      <STitle>WHAT IS THE $veHODL TOKEN ?</STitle>
      <p style={{ textAlign: "center" }}>
        <SGreenSpan>$HODL</SGreenSpan> is swapped for the vesting token{" "}
        <SGreenSpan>$veHODL</SGreenSpan> when deposited onto the Forced Hodl
        Dapp.
        <br />
        The <SGreenSpan>$veHODL</SGreenSpan> token will earn an APR interest
        received in $HODL
      </p>

      <SUnlockedImage src={unlocked} />
      <STitle>UNLOCK YOUR TOKENS</STitle>

      <p style={{ textAlign: "center", marginBottom: "32px" }}>
        Once your vesting period is over, you can claim and swap back your{" "}
        <SGreenSpan>$veHODL </SGreenSpan>tokens for{" "}
        <SGreenSpan>$HODL </SGreenSpan>tokens at the current{" "}
        <SGreenSpan>$veHODL - $HODL </SGreenSpan>ratio
      </p>
    </SMainContainer>
  );
}

const SUnlockedImage = styled.img`
  width: 4rem;
  margin-top: ${(props) => props.theme.getSpacing(8)};
`;

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
  color: #1bee21;
`;

const SGrid = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  margin-bottom: ${(props) => props.theme.getSpacing(8)};
`;

const SGridItem = styled.div`
  padding: 0.5rem;
  border: 2px solid white;
  border-radius: 6px;
`;

const SGreenSpan = styled.span`
  color: #1bee21;
`;

const SGreenArrow = styled.div<{ rotate?: boolean }>`
  border: solid #1bee21;
  border-width: 0 3px 3px 0;
  border-radius: 2px;
  display: inline-block;
  padding: ${(props) => props.theme.getSpacing(1.5)};
  transform: rotate(${(props) => (props.rotate ? "-45deg" : "135deg")});
`;

const SGreenStick = styled.div`
  height: 3px;
  width: 1.5rem;
  background-color: #1bee21;
`;

import Reacrt from "react";
import styled from "styled-components";
import FlexContainer from "../components/design-system/FlexContainer";
import tokenomics from "../assets/tokenomics.jpg";

export default function TokenomicsPage() {
  return (
    <SMainContainer>
      <STitle>THE $HODL TOKEN</STitle>
      <SFlexContainer gap={12}>
        <SChart src={tokenomics} />
        <SDetails>
          <SSmall>MAX SUPPLY : 21 MILLION</SSmall>
        </SDetails>
      </SFlexContainer>
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
  color: #1bee21;
`;

const SDetails = styled.div`
  padding: 1rem;
  border: 4px solid #1bee21;
  border-radius: 6px;
  align-self: center;
`;

const SSmall = styled.div`
  font-size: 1.5rem;
  color: #1bee21;
`;

const SChart = styled.img`
  width: 100%;
  max-width: 35rem;
`;

const SFlexContainer = styled(FlexContainer)`
  @media screen and (max-width: 930px) {
    flex-direction: column;
  }
`;

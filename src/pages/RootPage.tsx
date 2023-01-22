import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Footer from "../components/forced-hodl/Footer";
import Navbar from "../components/forced-hodl/Navbar";

export default function RootPage() {
  return (
    <>
      <Navbar />
      <SContainer>
        {/* Outlet is needed to determine where the children route will be rendered */}
        <Outlet />
      </SContainer>
      <Footer></Footer>
    </>
  );
}

const SContainer = styled.div`
  max-width: 90rem;
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
  margin-bottom: 81px;
`;

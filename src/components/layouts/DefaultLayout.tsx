// import Header from "components/header/Header";
import Sidebar from "components/sidebar/Sidebar";
import React from "react";
import styled from "styled-components";

const DefaultLayout: React.FC = ({ children }) => (
  <StyledWrapper>
    {/* <Header /> */}
    <Sidebar>{children}</Sidebar>
  </StyledWrapper>
);

export default DefaultLayout;

const StyledWrapper = styled.div`
  // display: flex;
  // flex-direction: column;
  // height: 100vh;
`;

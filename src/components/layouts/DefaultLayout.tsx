import Sidebar from "components/sidebar/Sidebar";
import React from "react";
import { styled } from "@mui/material/styles";

const DefaultLayout: React.FC = () => (
  <StyledWrapper>
    <Sidebar />
  </StyledWrapper>
);

const StyledWrapper = styled("div")({});

export default DefaultLayout;

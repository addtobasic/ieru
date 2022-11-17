import { styled } from "@mui/material/styles";
import React from "react";

import Sidebar from "components/sidebar/Sidebar";

const DefaultLayout: React.FC = () => (
  <StyledWrapper>
    <Sidebar />
  </StyledWrapper>
);

const StyledWrapper = styled("div")({});

export default DefaultLayout;

import React from "react";
import styled from "styled-components";
import COLORS from "./styles/COLORS";
import Sidebar from "./scenes/global/Sidebar";
import Header from "./scenes/global/Header";

const Layout = ({ children, tab }) => {
  return (
    <StyledDashboard>
      <Sidebar />
      <StyledMain>
        <Header tab={tab} />
        {children}
      </StyledMain>
    </StyledDashboard>
  );
};

export default Layout;

const StyledDashboard = styled.section`
  display: flex;
  min-height: 100vh;
  /* overflow: hidden; */

  background-color: beige;
`;

const StyledMain = styled.main`
  background-color: ${COLORS.secondary};
  flex: 1;
  padding: 1.5rem;

  section {
    height: 100%;
  }
`;

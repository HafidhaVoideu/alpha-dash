import Title from "@/components/Title";
import COLORS from "@/styles/COLORS";
import React from "react";

import styled from "styled-components";

const SessionItem = ({ session }) => {
  return (
    <StyledSessionItem>
      <span>{session}</span>
    </StyledSessionItem>
  );
};

const Sessions = () => {
  return (
    <StyledSession>
      <Title title="session" />
      <StyledContainer>
        {Array.from(Array(14).keys()).map((i) => (
          <SessionItem key={i} session="Session 25"></SessionItem>
        ))}
      </StyledContainer>
    </StyledSession>
  );
};

export default Sessions;

const StyledSessionItem = styled.div`
  background-color: ${COLORS.tertiary};
  margin-bottom: 1rem;
  padding: 0.6rem;
  border-radius: 8px;
  font-weight: 400;

  color: ${COLORS.greyWhite};
`;

const StyledSession = styled.section`
  grid-row: 1/-1;
  grid-column: 3/-1;
  background-color: ${COLORS.primary};
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
`;

const StyledContainer = styled.div``;

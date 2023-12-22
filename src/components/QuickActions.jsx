import COLORS from "@/styles/COLORS";
import React from "react";
import styled from "styled-components";
import Button from "./Button";
import Title from "./Title";

const QuickActions = ({ isVertical = false, columnspan, rowspan }) => {
  return (
    <StyledQuickActions columnspan={columnspan} rowspan={rowspan}>
      <Title title="Quick actions" />

      <StyledButtonGroup vertical={isVertical}>
        <Button text="Create Session"></Button>
        <Button text="Create Admin"></Button>
        <Button text="Session History"></Button>
      </StyledButtonGroup>
    </StyledQuickActions>
  );
};

export default QuickActions;

const StyledQuickActions = styled.article`
  background-color: ${COLORS.primary};
  padding: 2rem 1rem;
  grid-column: ${(props) => props.columnspan};
  grid-row: ${(props) => props.rowspan};
`;

const StyledButtonGroup = styled.div`
  display: flex;
  gap: 2rem;
  padding: 0 2rem;
  align-items: flex-start;
  flex-direction: ${(props) => (props.vertical ? "column" : "row")};

  & > * {
    flex: 1;
  }
`;

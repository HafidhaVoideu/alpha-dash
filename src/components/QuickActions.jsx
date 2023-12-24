import COLORS from "@/styles/COLORS";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Title from "./Title";
import Modal from "./modal/Modal";

import CreateAdmin from "./createAdmin/CreateAdmin";
import CreateSession from "@/scenes/pages/session/create-session/CreateSession";
import UpdateAdmin from "./updateAdmin/UpdateAdmin";
import { StyledPrimaryButton } from "@/styles/globalStyledCompoents";

const QuickActions = ({ isVertical = "no", columnspan, rspan }) => {
  const [modal, setModal] = useState({ isModal: false, popup: "" });

  const handleOpen = (popup) => {
    setModal({ isModal: true, popup });
  };

  const handleClose = () => {
    setModal({ isModal: false, window: "" });
  };

  return (
    <StyledQuickActions columnspan={columnspan} rspan={rspan}>
      <CreateAdmin isModal={modal.isModal} handleClose={handleClose} />

      <Title title="Quick actions" />

      <StyledButtonGroup vertical={isVertical}>
        <StyledPrimaryButton onClick={() => handleOpen("create session")}>
          Create Session
        </StyledPrimaryButton>
        <StyledPrimaryButton onClick={() => handleOpen("create admin")}>
          Create Admin
        </StyledPrimaryButton>
        <StyledPrimaryButton onClick={() => handleOpen("session history")}>
          Session History
        </StyledPrimaryButton>
      </StyledButtonGroup>
    </StyledQuickActions>
  );
};

export default QuickActions;

const StyledQuickActions = styled.article`
  background-color: ${COLORS.primary};
  padding: 2rem 1rem;
  grid-column: ${(props) => props.columnspan};
  grid-row: ${(props) => props.rspan};
`;

const StyledButtonGroup = styled.div`
  display: flex;
  gap: 2rem;
  padding: 0 2rem;
  align-items: flex-start;
  flex-direction: ${(props) => (props.vertical === "yes" ? "column" : "row")};

  & > * {
    flex: 1;
  }
`;

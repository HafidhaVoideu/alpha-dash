import React from "react";
import styled from "styled-components";
import COLORS from "@/styles/COLORS";
import Modal from "@/components/modal/Modal";
import {
  StyledPrimaryButton,
  StyledSecondaryButton,
} from "@/styles/globalStyledCompoents";
const Confirmation = ({ isModal, handleClose }) => {
  return (
    isModal && (
      <Modal close={handleClose} bg={COLORS.tertiary}>
        <StyledConfirmation>
          <StyledConfirmationContent>
            <h1>Are you sure you want to close the session?</h1>
            <span> Are you sure you want to accept this</span>
          </StyledConfirmationContent>

          <StyledConfirmationBtnGroup>
            <StyledSecondaryButton>No, cancel</StyledSecondaryButton>
            <StyledPrimaryButton color={COLORS.primary}>
              Yes, Confirm
            </StyledPrimaryButton>
          </StyledConfirmationBtnGroup>
        </StyledConfirmation>
      </Modal>
    )
  );
};

export default Confirmation;

const StyledConfirmation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 550px;
`;

const StyledConfirmationContent = styled.div`
  text-align: center;
  h1 {
    font-size: 1.4rem;
    font-weight: 600;
    margin-bottom: 1.2rem;
  }

  span {
    color: ${COLORS.greyWhite};
  }
`;
const StyledConfirmationBtnGroup = styled.div`
  display: flex;

  justify-content: space-between;
  gap: 2rem;
  align-items: center;
  margin: 2.5rem 0 2.5rem;
`;

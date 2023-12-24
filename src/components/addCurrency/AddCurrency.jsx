import React from "react";

import styled from "styled-components";
import Checkbox from "../checkbox/Checkbox";
import COLORS from "@/styles/COLORS";
import { StyledPrimaryButton } from "@/styles/globalStyledCompoents";
import Modal from "../modal/Modal";

// Currency Item

const CurrencyItem = ({ label, amount }) => {
  return (
    <StyledCurrencyItem>
      <Checkbox label={label} checked={true} />

      <StyledCurrencyItemDiv>
        <span>Core</span>

        <input name="currency" type="text" />
      </StyledCurrencyItemDiv>
    </StyledCurrencyItem>
  );
};

// Add Currency

const AddCurrency = ({ isModal, handleClose }) => {
  return (
    isModal && (
      <Modal close={handleClose} title="Add Currency" width="350px">
        <StyledAddCurrency>
          <StyledAddCurrencyContainer>
            {Array.from(Array(4).keys()).map((i) => (
              <CurrencyItem key={i} label="USD/DZD" />
            ))}
          </StyledAddCurrencyContainer>

          <StyledPrimaryButton type="button"> Add Currency</StyledPrimaryButton>
        </StyledAddCurrency>
      </Modal>
    )
  );
};

export default AddCurrency;

const StyledCurrencyItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4rem;
  color: ${COLORS.greyWhite};
`;

const StyledCurrencyItemDiv = styled.div`
  display: flex;

  align-items: center;
  gap: 1rem;

  input {
    border-radius: 8px;
    width: 95px;
    padding: 0.4rem;
    border: solid 1px #d0d5dd;
  }

  span {
    color: white;
  }
`;
const StyledAddCurrency = styled.div`
  /* padding: 1rem; */
  button {
    display: block;
    margin: 2rem auto;
    width: 80%;
  }
`;

const StyledAddCurrencyContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

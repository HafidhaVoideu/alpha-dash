import React, { useState } from "react";
import styled from "styled-components";
import Checkbox from "../checkbox/Checkbox";
import COLORS from "@/styles/COLORS";
import { StyledPrimaryButton } from "@/styles/globalStyledCompoents";

import Modal from "../modal/Modal";
import Success from "../alerts/success/Success";
import Confirmation from "../alerts/confirmation/Confirmation";
import Input from "../input/Input";

const CreateAdmin = ({ isModal, handleClose }) => {
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSuccess(true);
    handleClose();
  };

  const handleCloseSuccess = () => {
    setIsSuccess(false);
  };

  return isModal ? (
    <Modal title="create New Admin" close={handleClose} bg={COLORS.tertiary}>
      <StyledAdminForm onSubmit={handleSubmit}>
        {/* Admin Name */}

        <Input label="admin name" name="name" type="text" />

        {/* Admin Email*/}

        <Input label="admin Email" name="email" type="email" />

        {/* Admin Phone number */}

        <Input label="Admin Phone Number" name="phone" type="text" />

        {/* Admin password */}

        <Input label="New Admin Password" name="password" type="password" />

        <StyledAdminBtnGroup>
          <Checkbox label="viewer" />
          <Checkbox label="creator" checked={false} />
        </StyledAdminBtnGroup>

        <StyledPrimaryButton type="submit" color={COLORS.primary}>
          Create New Admin
        </StyledPrimaryButton>
      </StyledAdminForm>
    </Modal>
  ) : isSuccess ? (
    <Confirmation isModal={isSuccess} handleClose={handleCloseSuccess} />
  ) : undefined;
};

export default CreateAdmin;

export const StyledAdminForm = styled.form`
  width: 100%;
  padding: 1rem;
  display: grid;
  gap: 1.2rem 4rem;

  grid-template-columns: repeat(2, 1fr);

  button {
    grid-column: 2/-1;
    justify-self: end;
  }
`;

export const StyledAdminBtnGroup = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 2rem;
  margin-top: 0.5rem;
  grid-column: 1/-1;
`;

export const StyledAdminDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  input {
    padding: 1rem;
    border-radius: 8px;
    font-size: 1rem;
    box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
  }
`;

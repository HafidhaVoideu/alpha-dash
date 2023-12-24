import React, { useState } from "react";
import {
  StyledAdminForm,
  StyledAdminBtnGroup,
} from "../createAdmin/CreateAdmin";

import Checkbox from "../checkbox/Checkbox";

import { StyledPrimaryButton } from "@/styles/globalStyledCompoents";
import Input from "../input/Input";

import COLORS from "@/styles/COLORS";
import Modal from "../modal/Modal";

const UpdateAdmin = ({ isModal, handleClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    isModal && (
      <Modal title="create New Admin" close={handleClose} bg={COLORS.tertiary}>
        <StyledAdminForm onSubmit={handleSubmit}>
          {/* Admin Name */}

          <Input label="admin name" name="name" type="text" />

          {/* Admin Phone number */}

          <Input label="Admin Phone Number" name="phone" type="text" />

          {/* Admin password */}

          <Input label="New Admin Password" name="password" type="password" />

          <StyledAdminBtnGroup>
            <Checkbox label="viewer" />
            <Checkbox label="creator" checked={false} />
          </StyledAdminBtnGroup>
          <StyledAdminBtnGroup>
            <Checkbox label="session 2" />
            <Checkbox label="session 2" disabled checked={false} />
            <Checkbox label="session 3" disabled checked={false} />
          </StyledAdminBtnGroup>

          <StyledPrimaryButton type="submit" color={COLORS.primary}>
            Update Admin
          </StyledPrimaryButton>
        </StyledAdminForm>
      </Modal>
    )
  );
};

export default UpdateAdmin;

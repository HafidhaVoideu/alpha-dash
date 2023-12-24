import { StyledIconButton } from "@/styles/globalStyledCompoents";
import React from "react";
import styled from "styled-components";
import { IoMdCloseCircle } from "react-icons/io";
import COLORS from "@/styles/COLORS";
const Modal = ({
  children,
  title,
  close,
  width = "800px",
  bg = COLORS.primary,
}) => {
  return (
    <StyledModal>
      <StyledModalContent width={width} bg={bg}>
        <StyledContentHeader>
          <h1>{title}</h1>
          <StyledIconButton onClick={close}>
            <IoMdCloseCircle />
          </StyledIconButton>
        </StyledContentHeader>

        {children}
      </StyledModalContent>
    </StyledModal>
  );
};

export default Modal;

const StyledModal = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: rgba(10, 9, 9, 0.45);
  z-index: 99;
`;

const StyledContentHeader = styled.div`
  display: flex;
  width: 100%;

  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  button {
    color: white;
    font-size: 2rem;
  }
  button:hover {
    color: ${COLORS.lighterGrey};
  }

  h1 {
    font-size: 1.4rem;
    font-weight: 400;
    text-transform: capitalize;
    text-align: center;
  }
`;

const StyledModalContent = styled.div`
  transform: translateY(-80px);
  width: 100%;
  background-color: ${(props) => props.bg};
  border-radius: 6px;
  max-width: ${(props) => props.width};
  min-height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
  color: white;
  margin: 10px;
  z-index: 30;
`;

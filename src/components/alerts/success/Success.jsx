import Modal from "@/components/modal/Modal";
import COLORS from "@/styles/COLORS";
import React from "react";
import styled from "styled-components";
import checkmark from "../../../assets/checkmark.svg";

import Image from "next/image";

const Success = ({ isModal, handleClose }) => {
  return (
    isModal && (
      <Modal close={handleClose} bg={COLORS.tertiary}>
        <StyledSuccess>
          <StyledSuccessDiv>
            <Image height={36} width={36} alt="checkmark" src={checkmark} />

            <StyledSuccessContent>
              <h1>Successfully Created Admin !</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                pariatur ullam illo deserunt sapiente consectetur totam error
                velit vero ea sit esse, numquam repudiandae.
              </p>
            </StyledSuccessContent>
          </StyledSuccessDiv>
        </StyledSuccess>
      </Modal>
    )
  );
};

export default Success;

const StyledSuccess = styled.article`
  max-width: 650px;
  /* background-color: ${COLORS.tertiary}; */

  img {
    margin-top: 2rem;
  }
`;

const StyledSuccessDiv = styled.div`
  display: flex;
  align-items: start;
  gap: 3rem;
`;

const StyledSuccessContent = styled.div`
  color: white;

  h1 {
    font-size: 1.4rem;
    margin-bottom: 1.5rem;
    font-weight: 600;
  }

  p {
    font-size: 1rem;
    color: ${COLORS.greyWhite};
    line-height: 1.6;
  }
`;

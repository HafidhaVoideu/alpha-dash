import React from "react";
import styled from "styled-components";
import COLORS from "@/styles/COLORS";

const SmallButton = ({ text }) => {
  return <StyledSmallButton>{text}</StyledSmallButton>;
};

export default SmallButton;

const StyledSmallButton = styled.button`
  border-radius: 8px;
  background-color: ${COLORS.tertiary};
  color: white;
  border-radius: 8px;
  text-align: center;
  font-size: 1rem;
  font-weight: 500;
  padding: 0.5rem 0.9rem;

  &:hover {
    background-color: white;
    color: ${COLORS.primary};
    transition: all 0.2s ease-in-out;
  }
`;

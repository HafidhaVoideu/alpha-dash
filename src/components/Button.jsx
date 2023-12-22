import COLORS from "@/styles/COLORS";
import React from "react";
import styled from "styled-components";
const Button = ({ text, type }) => {
  return <StyledButton type={type}>{text || "placeholder"}</StyledButton>;
};

export default Button;

const StyledButton = styled.button`
  border-radius: 8px;
  background-color: ${COLORS.tertiary};
  color: white;
  border-radius: 8px;
  text-align: center;
  font-size: 1.3rem;
  font-weight: 500;
  width: 240px;
  padding: 0.8rem;
  margin-top: 1rem;
  text-transform: capitalize;
  &:hover {
    background-color: white;
    color: ${COLORS.primary};
    transition: all 0.2s ease-in-out;
  }
`;

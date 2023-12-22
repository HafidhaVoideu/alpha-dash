import React from "react";
import styled from "styled-components";

const Title = ({ title }) => {
  return <StyledTitle>{title}</StyledTitle>;
};

export default Title;

const StyledTitle = styled.h1`
  color: white;
  font-weight: 500;
  font-size: 1.4rem;
  margin-bottom: 2rem;
  text-transform: capitalize;
`;

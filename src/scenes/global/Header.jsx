import Dropdown from "@/components/Dropdown";
import React from "react";
import styled from "styled-components";

const Header = ({ tab }) => {
  return (
    <StyledHeader>
      <StyledHeaderTitle>{tab}</StyledHeaderTitle>
      <Dropdown />
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledHeaderTitle = styled.h1`
  color: white;
  font-size: 1.8rem;
  font-weight: 500;
  text-transform: capitalize;
`;

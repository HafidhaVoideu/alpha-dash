import COLORS from "@/styles/COLORS";
import React from "react";
import styled from "styled-components";

const InfoItem = ({ header, subHeader }) => {
  return (
    <StyledInfoItem>
      <h1>{header}</h1>
      <h2>{subHeader}</h2>
    </StyledInfoItem>
  );
};

const Info = () => {
  return (
    <StyledContainer>
      <InfoItem header="Traders Number" subHeader="23" />
      <InfoItem header=" Session Number" subHeader="23" />
      <InfoItem header="Last Update" subHeader="07/09/2023" />
      <InfoItem header="Last Update" subHeader="67" />
    </StyledContainer>
  );
};

// **************************** STYLED COMPONENETS ***************************************

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;

  grid-column: 1/3;
  gap: 2rem;
`;

const StyledInfoItem = styled.article`
  color: white;
  background-color: ${COLORS.primary};
  border-radius: 8px;
  flex: 1;
  padding: 1rem;

  h1 {
    font-size: 1.1rem;
    margin-bottom: 1.3rem;
    font-weight: 400;
  }

  h2 {
    font-size: 1.6rem;
    text-align: center;
    font-weight: 500;
  }
`;

export default Info;

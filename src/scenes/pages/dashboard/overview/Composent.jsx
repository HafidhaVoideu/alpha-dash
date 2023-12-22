import Title from "@/components/Title";
import COLORS from "@/styles/COLORS";
import React, { useState } from "react";
import Button from "@/components/Button";
import styled from "styled-components";
import SmallButton from "@/components/SmallButton";
const Composent = () => {
  const [value, setValue] = useState();
  const handleSubmit = () => {
    e.preventDefault();
  };
  return (
    <StyledComposent>
      <Title title="composent"></Title>

      <StyledForm onSubmit={handleSubmit}>
        <input
          type="text"
          name="currency"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="EURO"
        />

        <StyledContainer>
          {Array.from(Array(7).keys()).map((i) => (
            <SmallButton text="USD" key={i} />
          ))}
        </StyledContainer>
        <Button type="submit" text="add"></Button>
      </StyledForm>
    </StyledComposent>
  );
};

export default Composent;

const StyledComposent = styled.div`
  background-color: ${COLORS.primary};
  padding: 2rem 1rem;

  grid-column: 1/2;
  grid-row: 4/-1;
`;

const StyledContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  input {
    width: 100%;
    padding: 0.8rem;
    border-radius: 8px;
    font-size: 1.3rem;
  }
`;

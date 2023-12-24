import React, { useState } from "react";
import styled from "styled-components";

import COLORS from "@/styles/COLORS";

const Input = ({ label, name, type }) => {
  const [value, setValue] = useState("");
  return (
    <StyledDiv>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={name}
      />
    </StyledDiv>
  );
};

export default Input;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  text-transform: capitalize;
  gap: 0.8rem;
  color: white;

  input {
    padding: 1rem;
    border-radius: 8px;
    font-size: 1rem;
    border: solid 1px #d0d5dd;

    box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
  }
`;

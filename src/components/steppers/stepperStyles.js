import styled from "styled-components";

export const StyledStepperContainer = styled.div`
  display: flex;
  align-items: center;
  min-height: 100px;
`;

export const StyledStep = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid white;
  height: 55px;
  background-color: ${(props) => props.bg};
  color: ${(props) => (props.color ? props.color : "white")};
  width: 55px;
  border-radius: 100%;

  span {
    font-weight: 900;
    font-size: 1.7rem;
  }
`;

export const StyledDivider = styled.div`
  width: 100%;
  background-color: white;
  width: 170px;
  height: 1px;
`;

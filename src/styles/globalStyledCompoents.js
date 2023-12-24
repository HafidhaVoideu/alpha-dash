import styled from "styled-components";
import COLORS from "./COLORS";

export const StyledIconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

// Button Style

const StyledButton = styled.button`
  color: white;
  border-radius: 8px;
  text-align: center;
  font-size: 1.1rem;
  font-weight: 500;
  width: 200px;
  padding: 1rem;
  text-transform: capitalize;
  border-radius: 8px;
  border: 1px solid ${COLORS.primary};
`;

// Primary Button Style

export const StyledPrimaryButton = styled(StyledButton)`
  background-color: ${(props) => (props.color ? props.color : COLORS.tertiary)};

  &:hover {
    background-color: white;
    color: ${COLORS.primary};
    transition: all 0.2s ease-in-out;
  }
`;

// Secondary Button Style

export const StyledSecondaryButton = styled(StyledButton)`
  border-color: white;
  &:hover {
    border-color: ${COLORS.underline};
    color: ${COLORS.underline};
    transition: all 0.2s ease-in-out;
  }
`;

export const StyledTable = styled.table`
  color: white;
  width: 100%;
`;

export const StyledTableHeader = styled.thead`
  display: block;
  font-size: 17px;
  margin-bottom: 17px;

  th {
    font-weight: 500;
    flex: 1;
    text-transform: capitalize;
  }

  tr {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const StyledRow = styled.tr`
  display: flex;
  align-items: center;
  justify-content: center;

  th {
    font-weight: 400;
    margin-bottom: 1rem;
    background-color: ${COLORS.primary};
    padding: 6px;
    flex: 1;
    text-transform: capitalize;
    cursor: pointer;
  }
`;

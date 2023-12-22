import styled from "styled-components";
import COLORS from "./COLORS";

export const StyledIconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
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

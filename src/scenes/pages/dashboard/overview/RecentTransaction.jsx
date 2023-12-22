import Title from "@/components/Title";
import COLORS from "@/styles/COLORS";
import React from "react";
import styled from "styled-components";

import {
  StyledTable,
  StyledTableHeader,
  StyledRow,
} from "@/styles/globalStyledCompoents";

const TransactionItem = ({ dealer, currency, action, amount }) => {
  return (
    <StyledRow>
      <th>{dealer}</th>
      <th>{currency}</th>

      <StyledAction action={action}>{action} </StyledAction>
      <th>{amount}</th>
    </StyledRow>
  );
};

const RecentTransaction = () => {
  return (
    <StyledRecentTransactions>
      <Title title="recent transactions" />

      <StyledTable>
        <StyledTableHeader>
          <tr>
            <th>Dealer</th>
            <th>Currency</th>
            <th>Action</th>
            <th>Amount</th>
          </tr>
        </StyledTableHeader>

        <tbody>
          {Array.from(Array(5).keys()).map((i) => (
            <TransactionItem
              key={i}
              dealer="ahmed"
              action="Ask"
              amount={44445}
              currency="USD"
            ></TransactionItem>
          ))}
        </tbody>
      </StyledTable>
    </StyledRecentTransactions>
  );
};

export default RecentTransaction;

const StyledRecentTransactions = styled.section`
  grid-column: 2/3;
  grid-row: 4/-1;
  background-color: ${COLORS.primary};
  padding: 2rem 1rem;
`;

const StyledAction = styled.th`
  color: ${(props) => (props.action === "ask" ? COLORS.buy : COLORS.sell)};
`;

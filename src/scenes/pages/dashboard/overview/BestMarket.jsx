import React from "react";

import styled from "styled-components";
import COLORS from "@/styles/COLORS";
import Title from "@/components/Title";

import { TENORS } from "@/constants/constants";
import SmallButton from "@/components/SmallButton";
import {
  StyledTable,
  StyledTableHeader,
  StyledRow,
} from "@/styles/globalStyledCompoents";

const BestMarketItem = ({ currency, ask, dealer, bid }) => {
  return (
    <StyledBestMarketRow>
      <th>{currency}</th>
      <th>{ask}</th>
      <th>{dealer}</th>
      <th>{bid}</th>
      <th>{dealer}</th>
    </StyledBestMarketRow>
  );
};

const BestMarket = () => {
  return (
    <StyledBestMarket>
      <Title title="best market place" />

      <StyledContainer>
        {TENORS.map(({ tenorId, tenor }) => (
          <SmallButton key={tenorId} text={tenor} />
        ))}
      </StyledContainer>

      <StyledTable>
        <StyledBestMarketTableHeeder>
          <tr>
            <th>Cur</th>
            <th>ASK</th>
            <th>Dealer</th>
            <th>BID</th>
            <th>Dealer</th>
          </tr>
        </StyledBestMarketTableHeeder>

        <tbody>
          {Array.from(Array(3).keys()).map((i) => (
            <BestMarketItem
              key={i}
              dealer="Danny Jones"
              currency="USD"
              ask={220.22}
              bid={241.22}
            />
          ))}
        </tbody>
      </StyledTable>
    </StyledBestMarket>
  );
};

export default BestMarket;

const StyledBestMarket = styled.div`
  grid-column: 1/3;
  grid-row: 2/3;
  background-color: ${COLORS.primary};
  padding: 1rem;
`;

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const StyledBestMarketTableHeeder = styled(StyledTableHeader)`
  margin-bottom: 2rem;
  th:nth-child(1) {
    flex: 0.2;
  }

  th:nth-child(2) {
    color: ${COLORS.sell};
  }
  th:nth-child(4) {
    color: ${COLORS.buy};
  }
`;

const StyledBestMarketRow = styled(StyledRow)`
  th {
    background-color: ${COLORS.tertiary};
    padding: 0.4rem 0;
  }
  th:nth-child(1) {
    color: white;
    margin-right: 0.8rem;
    border-radius: 6px;
    background-color: ${COLORS.tertiary};
    flex: 0.2;
  }

  th:nth-child(2) {
    border-radius: 6px 0 0 6px;
  }

  th:last-child {
    border-radius: 0px 6px 6px 0px;
  }
  th:nth-child(2) {
    color: ${COLORS.sell};
  }
  th:nth-child(4) {
    color: ${COLORS.buy};
  }
`;

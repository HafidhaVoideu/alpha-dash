"use client";
import Layout from "@/Layout";
import React from "react";
import styled from "styled-components";
import Info from "./Info";
import Sessions from "./Sessions";
import BestMarket from "./BestMarket";
import QuickActions from "@/components/QuickActions";
import RecentTransaction from "./RecentTransaction";
import Composent from "./Composent";

const Overview = () => {
  return (
    <Layout tab="Alpha+ Dashboard">
      <StyledOverview>
        <Info />
        <Sessions />
        <BestMarket />
        <QuickActions columnspan="1/3" rowspan="3/4" />
        <Composent />
        <RecentTransaction />
      </StyledOverview>
    </Layout>
  );
};

export default Overview;

const StyledOverview = styled.section`
  display: grid;
  align-items: start;
  grid-template-columns: 34% 37% 22.5%;
  grid-template-rows: 9% 31% 18% 15% 25%;
  margin-top: 2rem;

  gap: 1rem 2rem;
`;

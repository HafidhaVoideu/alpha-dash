"use client";

import Layout from "@/Layout";

import React from "react";
import styled from "styled-components";
import Info from "../../dashboard/overview/Info";
import RecentTransaction from "../../dashboard/overview/RecentTransaction";
import Sessions from "../../dashboard/overview/Sessions";
import Modal from "@/components/modal/Modal";

const Overview = () => {
  return (
    <Layout tab="overview">
      <StyledOverview>
        <Info />
        <Sessions />

        <RecentTransaction />
      </StyledOverview>
    </Layout>
  );
};

const StyledOverview = styled.section`
  min-height: 100vh;
  margin-top: 0.5rem;
`;

export default Overview;

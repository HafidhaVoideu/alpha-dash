"use client";
import Layout from "@/Layout";
import StepperFour from "@/components/steppers/StepperFour";
import StepperFourComplete from "@/components/steppers/StepperFourComplete";
import StepperOne from "@/components/steppers/StepperOne";
import StepperThree from "@/components/steppers/StepperThree";
import StepperTwo from "@/components/steppers/StepperTwo";
import COLORS from "@/styles/COLORS";
import React, { useState } from "react";
import styled from "styled-components";

import Input from "../../../../components/input/Input";
import {
  StyledPrimaryButton,
  StyledSecondaryButton,
} from "@/styles/globalStyledCompoents";
import Dropdown from "@/components/dropdowns/Dropdown";
import { MARKETS } from "@/constants/constants";
import Success from "@/components/alerts/success/Success";
import AddCurrency from "@/components/addCurrency/AddCurrency";

// ************ Information Page *************

const Information = ({ setPage }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setPage((prev) => prev + 1);
  };

  return (
    <StyledCreateSessionContent>
      <h1>Information</h1>
      <StyledCreateSessionForm onSubmit={handleSubmit}>
        {/* Session Name */}
        <Input label="session name" name="session name" type="text" />

        {/*Limit Amount*/}
        <Input label="limit amount" name="limit amount" type="text" />
        {/*Number of Traders*/}
        <Input label="number traders" name="traders number" type="text" />

        {/*Starting Date*/}

        <Input label="strating date" name="starting date" type="date" />
        {/*Closing Date*/}

        <Input label="closing date" name="closing date" type="date" />

        <StyledPrimaryButton type="submit"> Continue</StyledPrimaryButton>
      </StyledCreateSessionForm>
    </StyledCreateSessionContent>
  );
};

// ************ Parameters Page *************

const Parameters = ({ setPage }) => {
  const [isAddCurrency, setIsAddCurrency] = useState();

  // open/close AddCurrenct Popup

  const handleOpen = () => {
    setIsAddCurrency(true);
  };
  const handleClose = () => {
    setIsAddCurrency(false);
  };

  // Submit Information

  const handleSubmit = (e) => {
    e.preventDefault();
    setPage((prev) => prev + 1);
  };

  //Previous Page

  const previousPage = (e) => {
    setPage((prev) => prev - 1);
  };

  return (
    <StyledCreateSessionContent>
      {/* Add Currency Popup */}

      <AddCurrency handleClose={handleClose} isModal={isAddCurrency} />

      <h1>Parameters</h1>
      <StyledCreateSessionForm onSubmit={handleSubmit}>
        {/* Spread */}
        <Input label="spread" name="spread" type="text" />

        {/* Direct Amount */}
        <Input label="direct Amount" name="direct Amount" type="text" />

        {/*Starting Date*/}

        <Input label="strating date" name="starting date" type="date" />
        {/*Closing Date*/}

        <Input label="closing date" name="closing date" type="date" />
        {/*Starting Date*/}

        <Input label="strating date" name="starting date" type="date" />
        {/*Closing Date*/}

        <Input label="closing date" name="closing date" type="date" />

        {/*Starting Date*/}

        <Input label="strating date" name="starting date" type="date" />

        <StyledCreateSessionDiv>
          <Dropdown list={MARKETS} ListName="Market" />
          <StyledPrimaryButton type="button" onClick={handleOpen}>
            {" "}
            Add Currency
          </StyledPrimaryButton>
        </StyledCreateSessionDiv>

        <StyledCreateSessionBtnGroup>
          <StyledSecondaryButton onClick={previousPage} type="button">
            Return
          </StyledSecondaryButton>
          <StyledPrimaryButton type="submit"> Continue</StyledPrimaryButton>
        </StyledCreateSessionBtnGroup>
      </StyledCreateSessionForm>
    </StyledCreateSessionContent>
  );
};

// *************** Details Page ****************

// Dummy Data

const information = [
  " Session Name",
  "Session Code",
  "Currency",
  "Session Limit",
  " Session Rate",
  "Traders Nmb",
];

const informationDetails = [
  "imane Session",
  "IKNHGRTH",
  "EURO",
  200000,
  275000,
  4,
];

const parameters = [
  "Start Date",
  "start Spread",
  "graph",
  "end date",
  "start position",
  "Chart name",
];

const parametersDetails = [
  "12/5/2023",
  200000,
  "sessXel.xcls",
  "12/6/2023",
  200000,
  "Chart",
];

// *************** Detail Item ****************

const DetailItem = ({ title, subtitle }) => {
  return (
    <StyledDetailItem>
      <span>{title}:</span>
      <span>{subtitle}</span>
    </StyledDetailItem>
  );
};

const InformationDetails = ({ setPage }) => {
  const [isSuccess, setIsSucess] = useState(false);

  // open/close success Popup

  const handleOpen = () => {
    setIsSucess(true);
  };
  const handleClose = () => {
    setIsSucess(false);
  };

  //Previous Page

  const previousPage = (e) => {
    setPage((prev) => prev - 1);
  };

  return (
    <StyledCreateSessionContent>
      {/* Success Popup */}

      <Success isModal={isSuccess} handleClose={handleClose} />

      {/* Information Container */}

      <StyledCreateSessionDetails>
        <h1>Information</h1>
        <StyledCreateSessionDetailsContainer>
          {information.map((info, index) => (
            <DetailItem
              key={index}
              title={info}
              subtitle={informationDetails[index]}
            />
          ))}
        </StyledCreateSessionDetailsContainer>
      </StyledCreateSessionDetails>

      {/*Parameters Container */}

      <StyledCreateSessionDetails>
        <h1>Parameters</h1>
        <StyledCreateSessionDetailsContainer>
          {parameters.map((info, index) => (
            <DetailItem
              key={index}
              title={info}
              subtitle={parametersDetails[index]}
            />
          ))}
        </StyledCreateSessionDetailsContainer>
      </StyledCreateSessionDetails>

      {/* Group Button */}
      <StyledCreateSessionBtnGroup>
        <StyledSecondaryButton onClick={previousPage} type="button">
          Return
        </StyledSecondaryButton>
        <StyledPrimaryButton type="button" onClick={handleOpen}>
          Continue
        </StyledPrimaryButton>
      </StyledCreateSessionBtnGroup>
    </StyledCreateSessionContent>
  );
};

// *********************** Create Session **************************

const CreateSession = () => {
  const [page, setPage] = useState(1);

  let stepper;

  // decide which stepper to render

  switch (page) {
    case 1:
      stepper = <StepperOne />;
      break;
    case 2:
      stepper = <StepperTwo />;
      break;
    case 3:
      stepper = <StepperThree />;
      break;
  }

  return (
    <Layout tab="create new session">
      <StyledCreateSessionContainer>
        {stepper}
        {page === 1 && <Information setPage={setPage} />}
        {page === 2 && <Parameters setPage={setPage} />}
        {page === 3 && <InformationDetails setPage={setPage} />}
      </StyledCreateSessionContainer>
    </Layout>
  );
};

export default CreateSession;

// ************************ Create Session Styles *************************

const StyledCreateSessionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 2rem;
  justify-content: center;

  padding: 2rem;
  color: white;
`;

const StyledCreateSessionContent = styled.div`
  background-color: ${COLORS.primary};
  width: 62%;
  padding: 2rem;
  border-radius: 8px;

  h1 {
    margin-bottom: 2rem;

    font-size: 2rem;
  }
`;

const StyledCreateSessionDiv = styled.div`
  display: flex;
  align-items: end;
  gap: 2rem;
`;
const StyledCreateSessionForm = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  gap: 2rem 6rem;

  button {
    grid-column: 2/-2;
    justify-self: end;
    align-self: end;
    flex: 1;
  }
`;

const StyledCreateSessionBtnGroup = styled.div`
  display: flex;
  grid-column: 1/-1;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  padding: 0 3rem;
  margin-top: 1.5rem;

  button {
    flex: 0.2;
  }
`;

// Styled Details Item

const StyledDetailItem = styled.div`
  display: flex;
  flex: 1 1 188px;
  align-items: center;
  justify-content: flex-start;
  text-transform: capitalize;

  span:first-child {
    flex: 0.5;
    color: ${COLORS.greyWhite};
  }
  span:last-child {
    flex: 0.5;
    font-weight: 500;
  }
`;

const StyledCreateSessionDetails = styled.div`
  margin-bottom: 4rem;
`;

const StyledCreateSessionDetailsContainer = styled.div`
  display: flex;
  column-gap: 4rem;
  row-gap: 2rem;
  flex-wrap: wrap;
`;

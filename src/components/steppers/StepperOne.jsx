import React from "react";

import COLORS from "@/styles/COLORS";
import { FaCheck } from "react-icons/fa6";
import {
  StyledDivider,
  StyledStepperContainer,
  StyledStep,
} from "./stepperStyles";

const StepperOne = () => {
  return (
    <StyledStepperContainer>
      <StyledStep color={COLORS.primary} bg="white">
        <span>01</span>
      </StyledStep>

      <StyledDivider />

      <StyledStep>
        <span>02</span>
      </StyledStep>
      <StyledDivider />

      <StyledStep>
        <span>03</span>
      </StyledStep>
    </StyledStepperContainer>
  );
};

export default StepperOne;

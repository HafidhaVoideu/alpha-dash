import React from "react";

import COLORS from "@/styles/COLORS";
import { FaCheck } from "react-icons/fa6";
import {
  StyledDivider,
  StyledStepperContainer,
  StyledStep,
} from "./stepperStyles";

const StepperThree = () => {
  return (
    <StyledStepperContainer>
      <StyledStep color={COLORS.primary} bg="white">
        <FaCheck fontSize={32} color={COLORS.primary} />
      </StyledStep>

      <StyledDivider />

      <StyledStep color={COLORS.primary} bg="white">
        <FaCheck fontSize={32} color={COLORS.primary} />
      </StyledStep>
      <StyledDivider />

      <StyledStep bg="white" color={COLORS.primary}>
        <span>03</span>
      </StyledStep>
    </StyledStepperContainer>
  );
};

export default StepperThree;

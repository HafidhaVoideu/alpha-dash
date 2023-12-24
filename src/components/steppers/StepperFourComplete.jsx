import React from "react";

import COLORS from "@/styles/COLORS";
import { FaCheck } from "react-icons/fa6";
import {
  StyledDivider,
  StyledStepperContainer,
  StyledStep,
} from "./stepperStyles";

const StepperFourComplete = () => {
  return (
    <StyledStepperContainer>
      <StyledStep>
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

      <StyledDivider />

      <StyledStep color={COLORS.primary} bg="white">
        <FaCheck fontSize={32} color={COLORS.primary} />
      </StyledStep>
    </StyledStepperContainer>
  );
};

export default StepperFourComplete;

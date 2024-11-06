import React from 'react';
import { Stepper, Step, StepLabel, StepContent, StepperProps } from '@mui/material';

export interface CustomStepperProps extends StepperProps {
  steps: { label: string; content: React.ReactNode }[];
  backgroundColor?: string;
  textColor?: string;
  size?: 'small' | 'medium' | 'large';
  orientation?: 'vertical' | 'horizontal';
}

const CustomStepper: React.FC<CustomStepperProps> = ({
  steps,
  backgroundColor = 'white',
  textColor = 'black',
  size = 'medium',
  orientation = 'horizontal',
  ...rest
}) => {
  return (
    <Stepper orientation={orientation} {...rest} style={{ backgroundColor, color: textColor }}>
      {steps.map((step, index) => (
        <Step key={index}>
          <StepLabel>{step.label}</StepLabel>
          <StepContent>{step.content}</StepContent>
        </Step>
      ))}
    </Stepper>
  );
};

export default CustomStepper;
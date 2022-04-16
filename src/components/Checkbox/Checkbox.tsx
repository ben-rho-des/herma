import React from 'react';
import { StyledCheckbox } from './checkbox.style';

export interface CheckboxProps {
  active?: boolean | undefined;
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean | undefined;
}

export const Checkbox: React.FC<CheckboxProps> = ({ active, children, className, disabled }) => {
  return <StyledCheckbox>{children}</StyledCheckbox>;
};

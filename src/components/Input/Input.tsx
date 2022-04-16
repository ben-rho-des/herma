import React from 'react';
import { StyledInput } from './input.style';

export interface InputProps {
  active?: boolean | undefined;
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean | undefined;
}

export const Input: React.FC<InputProps> = ({ active, children, className, disabled }) => {
  return <StyledInput>{children}</StyledInput>;
};

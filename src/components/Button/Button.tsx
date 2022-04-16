import React from 'react';
import { StyledButton } from './button.style';

export interface ButtonProps {
  active?: boolean | undefined;
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean | undefined;
}

export const Button: React.FC<ButtonProps> = ({ active, children, className, disabled }) => {
  return <StyledButton>{children}</StyledButton>;
};

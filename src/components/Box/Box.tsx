import React from 'react';
import { StyledBox } from './box.style';

export interface BoxProps {
  active?: boolean | undefined;
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean | undefined;
}

export const Box: React.FC<BoxProps> = ({ active, children, className, disabled }) => {
  return <StyledBox>{children}</StyledBox>;
};

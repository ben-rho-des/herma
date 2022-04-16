import React from 'react';
import { StyledGrid } from './grid.style';

export interface GridProps {
  active?: boolean | undefined;
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean | undefined;
}

export const Grid: React.FC<GridProps> = ({ active, children, className, disabled }) => {
  return <StyledGrid>{children}</StyledGrid>;
};

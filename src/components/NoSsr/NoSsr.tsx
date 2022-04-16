import React from 'react';
import { StyledNoSsr } from './noSsr.style';

export interface NoSsrProps {
  active?: boolean | undefined;
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean | undefined;
}

export const NoSsr: React.FC<NoSsrProps> = ({ active, children, className, disabled }) => {
  return <StyledNoSsr>{children}</StyledNoSsr>;
};

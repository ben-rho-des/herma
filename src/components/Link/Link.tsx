import React from 'react';
import { StyledLink } from './link.style';

export interface LinkProps {
  active?: boolean | undefined;
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean | undefined;
}

export const Link: React.FC<LinkProps> = ({ active, children, className, disabled }) => {
  return <StyledLink>{children}</StyledLink>;
};

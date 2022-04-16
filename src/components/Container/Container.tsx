import React from 'react';
import { StyledContainer } from './container.style';

export interface ContainerProps {
  active?: boolean | undefined;
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean | undefined;
}

export const Container: React.FC<ContainerProps> = ({ active, children, className, disabled }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

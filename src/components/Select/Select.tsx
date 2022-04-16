import React from 'react';
import {StyledSelect} from './select.style';

export interface SelectProps {
  active?: boolean | undefined;
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean | undefined; 
}

export const Select: React.FC<SelectProps> = ({
  active,
  children,
  className,
  disabled,
}) => {
  return (
    <StyledSelect>{ children }</StyledSelect>
  );
}

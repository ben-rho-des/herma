import React from 'react';
import {StyledRadio} from './radio.style';

export interface RadioProps {
  active?: boolean | undefined;
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean | undefined; 
}

export const Radio: React.FC<RadioProps> = ({
  active,
  children,
  className,
  disabled,
}) => {
  return (
    <StyledRadio>{ children }</StyledRadio>
  );
}

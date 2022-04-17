import React from 'react';
import { CommonProps } from '../../utils/commonProps';
import { StyledBox } from './box.style';

export interface BoxProps extends CommonProps {
  children?: React.ReactNode;
}

export const Box: React.FC<BoxProps> = ({ children, className, ...rest }) => {
  return <StyledBox {...rest}>{children}</StyledBox>;
};

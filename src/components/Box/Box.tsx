import classnames from 'classnames';
import React from 'react';
import { CommonProps } from '../../utils/commonProps';
import { StyledBox } from './box.style';

export interface BoxProps extends CommonProps {
  children?: React.ReactNode;
}

export const Box: React.FC<BoxProps> = ({ children, className, ...rest }) => {
  const classes = classnames('box', className);
  return (
    <StyledBox data-test='herma-box' className={classes} {...rest}>
      {children}
    </StyledBox>
  );
};

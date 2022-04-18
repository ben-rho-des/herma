import React from 'react';
import { StyledContainer } from './container.style';
import classnames from 'classnames';
import { CommonProps } from '../../utils/commonProps';

export interface IContainerProps extends CommonProps {
  children?: React.ReactNode;
  background?: string;
  padding?: string;
}

type ContainerBreakpointType = {
  padding: string;
};

export type ContainerThemeType = {
  sm: ContainerBreakpointType;
  md: ContainerBreakpointType;
  lg: ContainerBreakpointType;
  xl: ContainerBreakpointType;
  xxl: ContainerBreakpointType;
};

export const Container: React.FC<IContainerProps> = ({
  children,
  background,
  className,
  padding,
  ...rest
}) => {
  const classes = classnames('container', className, [{ 'container--background': !!background }]);
  return (
    <StyledContainer
      data-test='container'
      className={classes}
      background={background}
      padding={padding}
      {...rest}
    >
      {children}
    </StyledContainer>
  );
};

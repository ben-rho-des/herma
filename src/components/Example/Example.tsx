import React from 'react';
import classnames from 'classnames';
import { StyledExample } from './example.style';

export interface ExampleProps {
  active?: boolean | undefined;
  disabled?: boolean | undefined;
  children?: any;
  className?: string;
}

export const Example: React.FC<ExampleProps> = ({
  active,
  disabled,
  className,
  children,
  ...rest
}) => {
  const classes = classnames(
    'example',
    active && `example--active`,
    disabled && `example--disabled`,
    className
  );

  return (
    <StyledExample {...rest} className={classes}>
      {children}
    </StyledExample>
  );
};

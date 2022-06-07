import React from 'react';
import classnames from 'classnames';
import { StyledButton } from './button.style';

export interface ButtonProps {
  label: string;
  className?: string | undefined;
  disabled?: boolean | undefined;
  isLoading?: boolean;
  as?: 'a' | 'button';
  buttonType?: 'submit' | 'reset' | 'button'; // TODO: verify button types...
  iconToRight?: boolean;
  icon?: React.ReactNode;
  href?: string;
  onClick?(): void;
}

export const Button: React.FC<ButtonProps> = ({
  className,
  disabled,
  label,
  as = 'button',
  buttonType = 'submit',
  isLoading = false,
  iconToRight,
  icon,
  href,
  onClick
}) => {
  const classes = classnames('button', className);

  return (
    <StyledButton
      data-test='herma-button'
      as={as}
      className={classes}
      onClick={() => onClick && !disabled && onClick()}
      {...(href && as === 'a' && !disabled ? { href } : {})}
      {...(as === 'button' ? { type: buttonType } : {})}
      {...(disabled ? { disabled } : {})}
    >
      {icon && !iconToRight && !isLoading && icon}
      {isLoading && !iconToRight && <>🎡</>}
      {label}
      {icon && iconToRight && !isLoading && icon}
      {isLoading && iconToRight && <>🎡</>}
    </StyledButton>
  );
};

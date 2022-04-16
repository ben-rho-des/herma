import React from 'react';
import { StyledTypography } from './typography.style';

export interface TypographyProps {
  active?: boolean | undefined;
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean | undefined;
}

export const Typography: React.FC<TypographyProps> = ({
  active,
  children,
  className,
  disabled
}) => {
  return <StyledTypography>{children}</StyledTypography>;
};

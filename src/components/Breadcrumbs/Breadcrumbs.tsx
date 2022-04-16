import React from 'react';
import { StyledBreadcrumbs } from './breadcrumbs.style';

export interface BreadcrumbsProps {
  active?: boolean | undefined;
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean | undefined;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  active,
  children,
  className,
  disabled
}) => {
  return <StyledBreadcrumbs>{children}</StyledBreadcrumbs>;
};

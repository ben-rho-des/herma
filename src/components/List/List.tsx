import React from 'react';
import { StyledList } from './list.style';

export interface ListProps {
  active?: boolean | undefined;
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean | undefined;
}

export const List: React.FC<ListProps> = ({ active, children, className, disabled }) => {
  return <StyledList>{children}</StyledList>;
};

import React from 'react';
import { StyledListItem } from './listItem.style';

export interface ListItemProps {
  active?: boolean | undefined;
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean | undefined;
}

export const ListItem: React.FC<ListItemProps> = ({ active, children, className, disabled }) => {
  return <StyledListItem>{children}</StyledListItem>;
};

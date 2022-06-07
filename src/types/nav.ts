import React from 'react';

export interface INav {
  label: string;
  href: string;
  linker?: unknown;
  active?: boolean;
  icon?: React.ReactNode;
  to?: 'internal' | 'external';
  nav?: INav;
  isInFooter?: boolean;
  isInMobileNav?: boolean;
}

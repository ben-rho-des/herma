import React, { createContext, useState, FC } from 'react';
import { INav } from '../types/nav';
import { NavContextType, NavProps } from './navContext.types';

export const NavContext = createContext<NavContextType | null>(null);

const NavProvider: FC<NavProps> = ({ sitemap, children }) => {
  const [nav, setNav] = useState<INav[]>(sitemap);

  const updateSitemap = (href: string) => {
    nav.filter((navItem: INav) => {
      if (navItem.href === href) {
        navItem.active = true;
        setNav([...nav]);
      }
    });
  };

  return (
    <NavContext.Provider value={{ sitemap: nav, updateSitemap }}>{children}</NavContext.Provider>
  );
};

export default NavProvider;

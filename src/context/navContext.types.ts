import React from 'react';
import { INav } from '../types/nav';

export type NavContextType = {
  sitemap: INav[];
  updateSitemap: (href: string) => void;
};

export type NavProps = {
  sitemap: INav[];
  children: React.ReactElement;
};

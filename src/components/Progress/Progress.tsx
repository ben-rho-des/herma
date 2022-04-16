import React from 'react';
import {StyledProgress} from './progress.style.ts';

export interface ProgressProps {}

export const Progress: React.FC<ProgressProps> = ({ children }) => {
  return (
    <StyledProgress>{ children }</StyledProgress>
  );
}

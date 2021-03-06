import * as React from 'react';
import '../assets/css/normalize.css';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { DeveloperHUD } from '../src/components/DeveloperHUD';

const withBreakpointHUD = (Story, context) => {
  return (
    <DeveloperHUD on>
      <Story {...context} />
    </DeveloperHUD>
  );
};

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    disabled: false,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  options: { showPanel: true },
  viewport: {
    viewports: INITIAL_VIEWPORTS
  }
};

export const globalTypes = {};

export const decorators = [withBreakpointHUD];

import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from '@emotion/styled';
import { ThemeProvider } from '@emotion/react';
import GlobalStyles from './GlobalStyles';
import theme from '../Theme/Theme';

export const Swatch = styled.span<{ bg: string }>`
  background: ${({ bg }) => bg};
  padding: 2rem;
`;

storiesOf('Global/Styles', module).add('/w Theme', () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Swatch bg='var(--c-primary-base)' />
    <Swatch bg='var(--c-secondary-base)' />
    <Swatch bg='var(--c-tertiary-base)' />
    <Swatch bg='var(--c-quaternary-base)' />
    <Swatch bg='var(--c-shadow)' />
    <Swatch bg='var(--c-neutral-1)' />
    <Swatch bg='var(--c-danger)' />
  </ThemeProvider>
));

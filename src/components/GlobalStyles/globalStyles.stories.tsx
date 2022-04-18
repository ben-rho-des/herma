import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from '@emotion/styled';
import { ThemeProvider } from '@emotion/react';
import GlobalStyles from './GlobalStyles';
import theme from '../Theme/Theme';

export const Thingymabob = styled.span<{ bg: string }>`
  background: ${({ bg }) => bg};
  padding: 2rem;
`;

storiesOf('GlobalStyles', module).add('/w Theme', () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Thingymabob bg='var(--c-primary-base)' />
    <Thingymabob bg='var(--c-secondary-base)' />
    <Thingymabob bg='var(--c-tertiary-base)' />
    <Thingymabob bg='var(--c-quaternary-base)' />
    <Thingymabob bg='var(--c-shadow)' />
    <Thingymabob bg='var(--c-neutral-1)' />
    <Thingymabob bg='var(--c-danger)' />
  </ThemeProvider>
));

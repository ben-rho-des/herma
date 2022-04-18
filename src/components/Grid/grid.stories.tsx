import React from 'react';
import styled from '@emotion/styled';
import { ThemeProvider } from '@emotion/react';
import { storiesOf } from '@storybook/react';
import { Grid } from './';
import theme from '../Theme/Theme';

const Div = styled.div`
  border-left: 1px solid #84847b;
  border-right: 1px solid #84847b;
  font-size: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
`;

storiesOf('Grid', module).add('Default', () => (
  <Grid columns={10} gap='1rem'>
    <Div>🗿</Div>
    <Div>🗿</Div>
    <Div>🗿</Div>
    <Div>🗿</Div>
    <Div>🗿</Div>
    <Div>🗿</Div>
    <Div>🗿</Div>
    <Div>🗿</Div>
    <Div>🗿</Div>
    <Div>🗿</Div>
    <Div>🗿</Div>
    <Div>🗿</Div>
  </Grid>
));

storiesOf('Grid', module).add('/w Theme', () => (
  <ThemeProvider theme={theme}>
    <Grid columns={10} gap='1rem'>
      <Div>🗿</Div>
      <Div>🗿</Div>
      <Div>🗿</Div>
      <Div>🗿</Div>
      <Div>🗿</Div>
      <Div>🗿</Div>
      <Div>🗿</Div>
      <Div>🗿</Div>
      <Div>🗿</Div>
      <Div>🗿</Div>
      <Div>🗿</Div>
      <Div>🗿</Div>
    </Grid>
  </ThemeProvider>
));

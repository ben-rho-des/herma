import React from 'react';
import styled from '@emotion/styled';
import { storiesOf } from '@storybook/react';
import { Grid } from './';

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
  </Grid>
));

import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from '@emotion/react';
import { Container } from './';
import theme from '../Theme/Theme';

storiesOf('Container', module).add('Default', () => (
  <Container background='red' padding='0 5rem'>
    <div style={{ background: 'blue' }}>🗿</div>
  </Container>
));
storiesOf('Container', module).add('/w Theme', () => (
  <ThemeProvider theme={theme}>
    <Container background='red'>
      <div style={{ background: 'blue' }}>🗿</div>
    </Container>
  </ThemeProvider>
));

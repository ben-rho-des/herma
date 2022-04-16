import React from 'react';
import { storiesOf } from '@storybook/react';
import { Container } from './';

storiesOf('Container', module)
  .add('Default', () => <Container>🗿</Container>)
  .add('Active', () => <Container active>🗿</Container>)
  .add('Disabled', () => <Container disabled>🗿</Container>);

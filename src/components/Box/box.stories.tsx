import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from './';

storiesOf('Box', module)
  .add('Default', () => <Box>🗿</Box>)
  .add('Active', () => <Box active>🗿</Box>)
  .add('Disabled', () => <Box disabled>🗿</Box>);

import React from 'react';
import { storiesOf } from '@storybook/react';
import { Typography } from './';

storiesOf('Typography', module)
  .add('Default', () => <Typography>🗿</Typography>)
  .add('Active', () => <Typography active>🗿</Typography>)
  .add('Disabled', () => <Typography disabled>🗿</Typography>);

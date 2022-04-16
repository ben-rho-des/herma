import React from 'react';
import { storiesOf } from '@storybook/react';
import { Grid } from './';

storiesOf('Grid', module)
  .add('Default', () => <Grid>🗿</Grid>)
  .add('Active', () => <Grid active>🗿</Grid>)
  .add('Disabled', () => <Grid disabled>🗿</Grid>);

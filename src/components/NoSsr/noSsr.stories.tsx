import React from 'react';
import { storiesOf } from '@storybook/react';
import { NoSsr } from './';

storiesOf('NoSsr', module)
  .add('Default', () => <NoSsr>🗿</NoSsr>)
  .add('Active', () => <NoSsr active>🗿</NoSsr>)
  .add('Disabled', () => <NoSsr disabled>🗿</NoSsr>);

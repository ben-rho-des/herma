import React from 'react';
import { storiesOf } from '@storybook/react';
import { Select } from './';

storiesOf('Select', module)
  .add('Default', () => <Select>🗿</Select>)
  .add('Active', () => <Select active>🗿</Select>)
  .add('Disabled', () => <Select disabled>🗿</Select>);

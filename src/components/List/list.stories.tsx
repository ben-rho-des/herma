import React from 'react';
import { storiesOf } from '@storybook/react';
import { List } from './';

storiesOf('List', module)
  .add('Default', () => <List>🗿</List>)
  .add('Active', () => <List active>🗿</List>)
  .add('Disabled', () => <List disabled>🗿</List>);

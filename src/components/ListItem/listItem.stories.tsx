import React from 'react';
import { storiesOf } from '@storybook/react';
import { ListItem } from './';

storiesOf('ListItem', module)
  .add('Default', () => <ListItem>🗿</ListItem>)
  .add('Active', () => <ListItem active>🗿</ListItem>)
  .add('Disabled', () => <ListItem disabled>🗿</ListItem>);

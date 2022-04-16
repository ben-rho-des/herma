import React from 'react';
import { storiesOf } from '@storybook/react';
import { Checkbox } from './';

storiesOf('Checkbox', module)
  .add('Default', () => <Checkbox>🗿</Checkbox>)
  .add('Active', () => <Checkbox active>🗿</Checkbox>)
  .add('Disabled', () => <Checkbox disabled>🗿</Checkbox>);

import React from 'react';
import { storiesOf } from '@storybook/react';
import { Radio } from './';

storiesOf('Radio', module)
  .add('Default', () => <Radio>🗿</Radio>)
  .add('Active', () => <Radio active>🗿</Radio>)
  .add('Disabled', () => <Radio disabled>🗿</Radio>);

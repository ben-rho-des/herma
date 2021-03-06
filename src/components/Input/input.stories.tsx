import React from 'react';
import { storiesOf } from '@storybook/react';
import { Input } from './';

storiesOf('Input', module)
  .add('Default', () => <Input>🗿</Input>)
  .add('Active', () => <Input active>🗿</Input>)
  .add('Disabled', () => <Input disabled>🗿</Input>);

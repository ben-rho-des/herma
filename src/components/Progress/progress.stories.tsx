import React from 'react';
import { storiesOf } from '@storybook/react';
import { Progress } from './';

storiesOf('Progress', module)
  .add('Default', () => <Progress>Button</Progress>)
  .add('Active', () => <Progress active>Button</Progress>)
  .add('Disabled', () => <Progress disabled>Button</Progress>);

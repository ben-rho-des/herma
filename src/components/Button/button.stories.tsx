import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from './';

storiesOf('Button', module)
  .add('Default', () => <Button>🗿</Button>)
  .add('Active', () => <Button active>🗿</Button>)
  .add('Disabled', () => <Button disabled>🗿</Button>);

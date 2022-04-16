import React from 'react';
import { storiesOf } from '@storybook/react';
import { Link } from './';

storiesOf('Link', module)
  .add('Default', () => <Link>🗿</Link>)
  .add('Active', () => <Link active>🗿</Link>)
  .add('Disabled', () => <Link disabled>🗿</Link>);

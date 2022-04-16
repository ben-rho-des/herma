import React from 'react';
import { storiesOf } from '@storybook/react';
import { Breadcrumbs } from './';

storiesOf('Breadcrumbs', module)
  .add('Default', () => <Breadcrumbs>🗿</Breadcrumbs>)
  .add('Active', () => <Breadcrumbs active>🗿</Breadcrumbs>)
  .add('Disabled', () => <Breadcrumbs disabled>🗿</Breadcrumbs>);

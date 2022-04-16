---
to: src/components/<%= h.changeCase.pascalCase(name) %>/<%= h.changeCase.camelCase(name) %>.stories.tsx
---
import React from 'react';
import { storiesOf } from '@storybook/react';
import { <%= h.changeCase.pascalCase(name) %> } from './';

storiesOf('<%= h.changeCase.pascalCase(name) %>', module)
  .add('Default', () => <<%= h.changeCase.pascalCase(name) %>>Button</<%= h.changeCase.pascalCase(name) %>>)
  .add('Active', () => <<%= h.changeCase.pascalCase(name) %> active>Button</<%= h.changeCase.pascalCase(name) %>>)
  .add('Disabled', () => <<%= h.changeCase.pascalCase(name) %> disabled>Button</<%= h.changeCase.pascalCase(name) %>>);

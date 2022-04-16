---
to: src/components/<%= h.changeCase.pascalCase(name)  %>/<%= h.changeCase.pascalCase(name)  %>.tsx
---
import React from 'react';
import {Styled<%= h.changeCase.pascalCase(name) %>} from './<%= h.changeCase.camelCase(name) %>.style';

export interface <%= h.changeCase.pascalCase(name) %>Props {
  active?: boolean | undefined;
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean | undefined; 
}

export const <%= h.changeCase.pascalCase(name) %>: React.FC<<%= h.changeCase.pascalCase(name) %>Props> = ({
  active,
  children,
  className,
  disabled,
}) => {
  return (
    <Styled<%= h.changeCase.pascalCase(name) %>>{ children }</Styled<%= h.changeCase.pascalCase(name) %>>
  );
}

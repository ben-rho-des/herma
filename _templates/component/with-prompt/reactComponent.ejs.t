---
to: src/components/<%= h.changeCase.pascalCase(name)  %>/<%= h.changeCase.pascalCase(name)  %>.tsx
---
import React from 'react';
import {Styled<%= h.changeCase.pascalCase(name) %>} from './<%= h.changeCase.camelCase(name) %>.style';
import classnames from 'classnames';
import { CommonProps } from '../../utils/commonProps';

export interface <%= h.changeCase.pascalCase(name) %>Props extends CommonProps {
  active?: boolean | undefined;
  children?: React.ReactNode;
  disabled?: boolean | undefined; 
}

export const <%= h.changeCase.pascalCase(name) %>: React.FC<<%= h.changeCase.pascalCase(name) %>Props> = ({
  active,
  children,
  className,
  disabled,
  ...rest
}) => {
  const classes = classnames('<%= h.changeCase.lower(name) %>', className);
  return (
    <Styled<%= h.changeCase.pascalCase(name) %> data-test='<%= h.changeCase.lower(name) %>' className={classes} {...rest}>
      { children }
    </Styled<%= h.changeCase.pascalCase(name) %>>
  );
}

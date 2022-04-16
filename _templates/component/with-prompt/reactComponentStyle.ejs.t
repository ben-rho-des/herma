---
to: src/components/<%= h.changeCase.pascalCase(name) %>/<%= h.changeCase.camelCase(name) %>.style.ts
---

import styled from '@emotion/styled';

export const Styled<%= h.changeCase.pascalCase(name) %> = styled.span`
  background: DarkTurquoise;
  font-size: 5rem;
`;

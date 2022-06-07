import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from '@emotion/styled';

export const Span = styled.span`
  background: rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 0.5rem;
  border-radius: 3px;
`;

storiesOf('Global/DeveloperHUD', module).add('Default', () => {
  document.body.classList.remove('sb-main-padded');
  return (
    <div
      style={{
        height: '700px',
        width: '100%',
        background: 'pink',
        overflow: 'hidden',
        fontFamily: 'monospace',
        padding: '2.5rem'
      }}
    >
      Press <Span>~</Span> or <Span>ctrl + 1</Span>, <Span>ctrl + 2</Span>, <Span>ctrl + 3</Span>
    </div>
  );
});

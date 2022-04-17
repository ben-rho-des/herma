import React from 'react';
import { storiesOf } from '@storybook/react';
import { Global, css } from '@emotion/react';
import { DeveloperHUD } from './';

storiesOf('DeveloperHUD', module).add('Default', () => {
  document.body.classList.remove('sb-main-padded');
  return (
    <div
      style={{
        height: '700px',
        width: '100%',
        background: 'pink',
        overflow: 'hidden'
      }}
    >
      <DeveloperHUD on>🗿</DeveloperHUD>
    </div>
  );
});

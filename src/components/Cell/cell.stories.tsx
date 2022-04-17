import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from '@emotion/styled';

import { Cell } from '.';
import { Grid } from '../Grid';

const StyledCell = styled(Cell)`
  background: #84847b;
  font-size: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

storiesOf('Cell', module).add('Default', () => (
  <Grid columns={3} gap='16px 32px'>
    <StyledCell left={2} height={4} width={2}>
      🗿
    </StyledCell>
    <StyledCell width={3} height={6}>
      🗿
    </StyledCell>
    <StyledCell height={2} width={2}>
      🗿
    </StyledCell>
    <StyledCell height={4}>🗿</StyledCell>
  </Grid>
));

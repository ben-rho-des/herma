import styled from '@emotion/styled';
import { GridProps } from './Grid';

const autoRows = ({ minRowHeight = '20px' }) => `minmax(${minRowHeight}, auto)`;

const frGetter = (value) => (typeof value === 'number' ? `repeat(${value}, 1fr)` : value);

const gap = ({ gap = '8px' }) => gap;

const flow = ({ flow = 'row' }) => flow;

const formatAreas = (areas) => areas.map((area) => `"${area}"`).join(' ');

export const StyledGrid = styled.div<GridProps>`
  display: grid;
  height: ${({ height = 'auto' }) => height};
  ${({ rows }) => rows && `grid-template-rows: ${frGetter(rows)}`};
  grid-template-columns: ${({ columns = 12 }) => frGetter(columns)};
  grid-gap: ${gap};
  grid-auto-flow: ${flow};
  grid-auto-rows: ${autoRows};
  ${({ columns }) => columns && `column-gap: ${columns}`};
  ${({ rows }) => rows && `row-gap: ${rows}`};
  ${({ areas }) => areas && `grid-template-areas: ${formatAreas(areas)}`};
  ${({ justifyContent }) => justifyContent && `justify-content: ${justifyContent}`};
  ${({ alignContent }) => alignContent && `align-content: ${alignContent}`};
`;

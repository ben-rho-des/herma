import styled from '@emotion/styled';
import { IGridProps } from './Grid';

const autoRows = ({ minRowHeight = '20px' }) => `minmax(${minRowHeight}, auto)`;
const frGetter = (value) => (typeof value === 'number' ? `repeat(${value}, 1fr)` : value);
const gap = ({ gap = '8px' }) => gap;
const flow = ({ flow = 'row' }) => flow;
const formatAreas = (areas) => areas.map((area) => `"${area}"`).join(' ');

export const StyledGrid = styled.div<IGridProps>`
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

  ${({ theme }) =>
    Object.keys(theme).length &&
    `
      column-gap: ${theme.components.grid.sm.column};
      grid-template-columns: ${frGetter(theme.components.grid.sm.column)};
      grid-gap: ${theme.components.grid.sm.gap};

      ${theme.breakpointMQ.md} {
        column-gap: ${theme.components.grid.md.column};
        grid-template-columns: ${frGetter(theme.components.grid.md.column)};
        grid-gap: ${theme.components.grid.md.gap};
      }
      ${theme.breakpointMQ.lg} {
        column-gap: ${theme.components.grid.lg.column};
        grid-template-columns: ${frGetter(theme.components.grid.lg.column)};
        grid-gap: ${theme.components.grid.lg.gap};
      }
      ${theme.breakpointMQ.xl} {
        column-gap: ${theme.components.grid.xl.column};
        grid-template-columns: ${frGetter(theme.components.grid.xl.column)};
        grid-gap: ${theme.components.grid.xl.gap};
      }
      ${theme.breakpointMQ.xx} {
        column-gap: ${theme.components.grid.xx.column};
        grid-template-columns: ${frGetter(theme.components.grid.xx.column)};
        grid-gap: ${theme.components.grid.xx.gap};
      }
  `};
`;

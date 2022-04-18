import styled from '@emotion/styled';
import { CommonProps } from '../../utils/commonProps';

export interface CellProps extends CommonProps {
  width?: number;
  height?: number;
  top?: number | string;
  left?: number | string;
  middle?: boolean;
  center?: boolean;
  area?: string;
}

export const Cell = styled.div<CellProps>`
  height: 100%;
  grid-column-end: ${({ width = 1 }) => `span ${width}`};
  grid-row-end: ${({ height = 1 }) => `span ${height}`};
  min-width: 0;
  ${({ area }) => area && `grid-area: ${area}`};
  ${({ center }) => center && `text-align: center`};
  ${({ left }) => left && `grid-column-start: ${left}`};
  ${({ top }) => top && `grid-row-start: ${top}`};
  ${
    /* prettier-ignore */
    ({ middle }) => middle && `
      display: inline-flex;
      flex-flow: column wrap;
      justify-content: center;
      justify-self: stretch;
    `
  };
`;

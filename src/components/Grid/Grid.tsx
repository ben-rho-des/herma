import React, { forwardRef } from 'react';
import { ElementType } from 'react';
import { Align, AlignContent, Height, Justify, JustifyContent, Width } from '../../types';
import { CommonProps } from '../../utils/commonProps';
import { StyledGrid } from './grid.style';

export interface GridProps extends CommonProps {
  align?: `${Align}`;
  alignContent?: string | `${AlignContent}`;
  areas?: string[];
  columns?: number | number[];
  children: React.ReactNode;
  gap: string;
  height?: Height;
  justify?: Justify;
  justifyContent?: JustifyContent;
  rows?: number;
  as?: ElementType;
  width?: Width;
  minRowHeight?: string;
  flow?: string;
}

export const Grid = forwardRef((props: GridProps, ref: any) => {
  const { height, rows, as, width, ...rest } = props;

  return (
    <StyledGrid
      data-test='herma-grid'
      ref={ref}
      as={as}
      height={height}
      rows={rows}
      width={width}
      {...rest}
    />
  );
});

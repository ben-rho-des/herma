import React, { forwardRef, ElementType } from 'react';
import { useTheme } from '@emotion/react';
import classnames from 'classnames';
import { Align, AlignContent, Height, Justify, JustifyContent, Width } from '../../types';
import { CommonProps } from '../../utils/commonProps';
import { StyledGrid } from './grid.style';
import { ITheme } from '../Theme';

export interface IGridProps extends CommonProps {
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

  theme?: ITheme;
}

type GridBreakpointType = {
  column: number;
  gap: string;
};
export type GridThemeType = {
  sm: GridBreakpointType;
  md: GridBreakpointType;
  lg: GridBreakpointType;
  xl: GridBreakpointType;
  xxl: GridBreakpointType;
};

export const Grid = forwardRef((props: IGridProps, ref: any) => {
  const { height, rows, as, width, className, ...rest } = props;
  const classes = classnames('grid', className);
  const theme = useTheme();

  return (
    <StyledGrid
      data-test='herma-grid'
      ref={ref}
      as={as}
      height={height}
      rows={rows}
      width={width}
      className={classes}
      {...rest}
      {...(Object.keys(theme).length ? { theme } : {})}
    />
  );
});

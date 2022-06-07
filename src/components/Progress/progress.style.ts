import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { ProgressProps, ProgressVariants } from './Progress';

interface StyledProgressProps extends ProgressProps {
  // theme: Theme;
  variant: `${ProgressVariants}`;
  dash: number;
  circumference: number;
  strokeWidth: number;
  innerCircleSize: number;
}

const circular = ({
  variant,
  // theme,
  size,
  innerCircleSize,
  dash,
  circumference,
  strokeWidth
}: StyledProgressProps) => {
  const isCircular = variant === ProgressVariants.CIRCULAR;

  if (isCircular) {
    return css`
      margin: 0 auto;
      width: ${size}px;
      height: ${size}px;
      background: blue;
      border-radius: 50%;
      position: relative;
      .progress__bar {
        transition: 0.35s stroke-dashoffset;
        transform: rotate(-90deg);
        transform-origin: 50% 50%;
        stroke-dashoffset: ${dash};
        stroke-dasharray: ${circumference} ${circumference};
      }
      .progress__content {
        background: white;
        width: ${innerCircleSize}px;
        height: ${innerCircleSize}px;
        top: ${strokeWidth}px;
        left: ${strokeWidth}px;
        border-radius: 50%;
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    `;
  }
  return '';
};

// eslint-disable-next-line arrow-body-style
const horizontal = ({ variant, size }) => {
  const isHorizontal = variant === ProgressVariants.HORIZONTAL;
  if (isHorizontal) {
    return css`
      margin: 0 auto;
      width: ${size}px;
      height: ${size}px;
    `;
  }
  return '';
};

// eslint-disable-next-line arrow-body-style
const vertical = ({ variant, size }) => {
  const isVertical = variant === ProgressVariants.VERTICAL;
  if (isVertical) {
    return css`
      margin: 0 auto;
      width: ${size}px;
      height: ${size}px;
    `;
  }
  return '';
};

export const StyledProgress = styled.div<StyledProgressProps>`
  ${horizontal}
  ${vertical}
  ${circular}
  .progress__total {
    stroke: blue;
  }
`;

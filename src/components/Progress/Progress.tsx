import classnames from 'classnames';
import React, { useMemo } from 'react';
import { StyledProgress } from './progress.style';

export interface ProgressProps {
  size?: number;
  children?: React.ReactNode;
  progress?: number;
  active?: boolean | undefined;
  disabled?: boolean | undefined;
  strokeCap?: `${StrokeCap}`;
  className?: string;
}

enum StrokeCap {
  BUTT = 'flat',
  ROUND = 'round'
}

const DEFAULT_SIZE = 120;
const MIN_SIZE = 100;
const STROKE_WIDTH = 12;

export const Progress: React.FC<ProgressProps> = ({
  children,
  size = DEFAULT_SIZE,
  progress = 30,
  active,
  disabled,
  strokeCap = StrokeCap.ROUND,
  className
}) => {
  const classes = classnames(
    'progress',
    active && `progress--active`,
    disabled && `progress--disabled`,
    className
  );

  const limitedSize = size < MIN_SIZE ? MIN_SIZE : size;
  const limitedProgress = progress > 100 ? 100 : progress;
  const radius = useMemo(() => Math.round(limitedSize / 2 - STROKE_WIDTH / 2), [limitedSize]);
  const circumference = useMemo(() => radius * 2 * Math.PI, [radius]);
  const dash = useMemo(() => circumference - (limitedProgress / 100) * circumference, [
    circumference,
    limitedProgress
  ]);

  const innerCircleSize = useMemo(() => Math.round(limitedSize - STROKE_WIDTH * 2), [limitedSize]);

  return (
    <StyledProgress
      size={limitedSize}
      dash={dash}
      circumference={circumference}
      strokeWidth={STROKE_WIDTH}
      data-test='herma-progress'
      innerCircleSize={innerCircleSize}
      className={classes}
    >
      <svg className='progress progress--circular' width={limitedSize} height={limitedSize}>
        <circle
          className='progress__bar'
          stroke='red'
          strokeLinecap={strokeCap === StrokeCap.BUTT ? 'butt' : StrokeCap.ROUND}
          strokeWidth={STROKE_WIDTH}
          fill='transparent'
          r={Math.round(radius)}
          cx='50%'
          cy='50%'
        />
      </svg>
      <div className='progress__content'>{children}</div>
    </StyledProgress>
  );
};

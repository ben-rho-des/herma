import classnames from 'classnames';
import React, { useMemo } from 'react';
import { StyledProgress } from './progress.style';
import { ProgressProps, ProgressVariants, StrokeCap } from './Progress.types';

const DEFAULT_SIZE = 120;
const MIN_SIZE = 100;
const STROKE_WIDTH = 12;

export const Progress: React.FC<ProgressProps> = ({
  children,
  size = DEFAULT_SIZE,
  progress = 30,
  strokeCap = StrokeCap.ROUND,
  variant = ProgressVariants.CIRCULAR,
  className
}) => {
  const classes = classnames('progress', className, `progress--${variant}`);
  const limitedSize = useMemo(() => (size < MIN_SIZE ? MIN_SIZE : size), [size]);
  const limitedProgress = useMemo(() => (progress > 100 ? 100 : progress), [progress]);
  const radius = useMemo(() => Math.round(limitedSize / 2 - STROKE_WIDTH / 2), [limitedSize]);
  const circumference = useMemo(() => radius * 2 * Math.PI, [radius]);
  const dash = useMemo(
    () => circumference - (limitedProgress / 100) * circumference,
    [circumference, limitedProgress]
  );
  const progAsSize = useMemo(
    () => (size / 100) * (progress < 100 ? progress : 100),
    [progress, size]
  );

  const innerCircleSize = useMemo(() => Math.round(limitedSize - STROKE_WIDTH * 2), [limitedSize]);
  const capSize = +(strokeCap === 'round' ? STROKE_WIDTH / 2 : 0);
  return (
    <StyledProgress
      size={limitedSize}
      dash={dash}
      circumference={circumference}
      strokeWidth={STROKE_WIDTH}
      data-test='herma-progress'
      innerCircleSize={innerCircleSize}
      className={classes}
      variant={variant}
    >
      <svg className={classes} width={limitedSize} height={limitedSize}>
        {variant === ProgressVariants.CIRCULAR && (
          <circle
            className='progress__bar'
            stroke='red'
            strokeLinecap={strokeCap}
            strokeWidth={STROKE_WIDTH}
            fill='transparent'
            r={Math.round(radius)}
            cx='50%'
            cy='50%'
          />
        )}
        {variant === ProgressVariants.HORIZONTAL && (
          <>
            <line
              className='progress__total'
              strokeWidth={STROKE_WIDTH}
              strokeLinecap={strokeCap}
              y1='50%'
              y2='50%'
              x1={0 + capSize}
              x2={size - capSize}
            />
            <line
              className='progress__bar'
              stroke='red'
              strokeWidth={STROKE_WIDTH}
              strokeLinecap={strokeCap}
              y1='50%'
              y2='50%'
              x1={0 + capSize}
              x2={progAsSize - capSize}
            />
          </>
        )}
        {variant === ProgressVariants.VERTICAL && (
          <>
            <line
              className='progress__total'
              strokeWidth={STROKE_WIDTH}
              strokeLinecap={strokeCap}
              x1='50%'
              x2='50%'
              y1={0 + capSize}
              y2={size - capSize}
            />
            <line
              className='progress__bar'
              stroke='red'
              strokeWidth={STROKE_WIDTH}
              strokeLinecap={strokeCap}
              x1='50%'
              x2='50%'
              y1={0 + capSize}
              y2={progAsSize - capSize}
            />
          </>
        )}
      </svg>
      <div className='progress__content'>{children}</div>
    </StyledProgress>
  );
};

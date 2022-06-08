import { CommonProps } from '../../utils/commonProps';

export interface ProgressProps extends CommonProps {
  size?: number;
  children?: React.ReactNode;
  progress?: number;
  strokeCap?: `${StrokeCap}`;
  variant?: `${ProgressVariants}`;
}

export enum ProgressVariants {
  CIRCULAR = 'circular',
  HORIZONTAL = 'horizontal',
  VERTICAL = 'vertical'
}

export enum StrokeCap {
  BUTT = 'butt',
  ROUND = 'round'
}

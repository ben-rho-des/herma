// css types
export enum OverflowValues {
  AUTO = 'auto',
  HIDDEN = 'hidden',
  SCROLL = 'scroll',
  VISIBLE = 'visible'
}

export enum Align {
  BASELINE = 'baseline',
  CENTER = 'center',
  END = 'end',
  START = 'start',
  STRETCH = 'stretch'
}

export enum AlignContent {
  AROUND = 'around',
  BASELINE = 'baseline',
  BETWEEN = 'between',
  CENTER = 'center',
  EVENLY = 'evenly',
  END = 'end',
  START = 'start',
  STRETCH = 'stretch'
}

export enum Justify {
  START = 'start',
  CENTER = 'center',
  END = 'end',
  STRETCH = 'stretch'
}

export enum JustifyContent {
  AROUND = 'around',
  BETWEEN = 'between',
  CENTER = 'center',
  END = 'end',
  START = 'start',
  STRETCH = 'stretch'
}

export enum Repeat {
  NO_REPEAT = 'no-repeat',
  REPEAT = 'repeat'
}

export enum Size {
  COVER = 'cover',
  CONTAIN = 'contain'
}

export type Background =
  | string
  | {
      color: string;
      image: string;
      position: string;
      opacity: string | boolean | number;
      repeat: string | `${Repeat}`;
      size: string | `${Size}`;
    };

export type Height =
  | string
  | {
      height: string;
      min: string;
      max: string;
    };

export type Width =
  | string
  | {
      width: string;
      min: string;
      max: string;
    };

// design system

export enum Size {
  XXS = 'xxsmall',
  XS = 'xsmall',
  S = 'small',
  M = 'medium',
  L = 'large',
  XL = 'xlarge',
  XXL = 'xxlarge'
}

export enum ZIndex {
  HIDDEN = -40,
  BEHIND_PAGE = -20,
  PAGE = 0,
  ABOVE_PAGE = 20,
  BEHIND_NAVIGATION = 40,
  NAVIGATION = 60,
  ABOVE_NAVIGATION = 80,
  BEHIND_MODAL = 100,
  MODAL = 120,
  ABOVE_MODAL = 140
}

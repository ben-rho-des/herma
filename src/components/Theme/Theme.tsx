import React from 'react';
import { ContainerThemeType } from '../Container';
import { GridThemeType } from '../Grid';

export interface ThemeProps {
  children?: React.ReactNode;
}

interface ColorSet {
  lightest: string;
  lighter: string;
  light: string;
  base: string;
  dark: string;
  darker: string;
  darkest: string;
}

interface NeutralColors {
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
  7: string;
  8: string;
  9: string;
  10: string;
}

interface BackgroundColors {
  default: string;
  hero: string;
  overlay: string;
}

interface BorderColors {
  default: string;
  muted: string;
}

interface TextColors {
  heading: string;
  heading2: string;
  heading3: string;
  default: string;
  muted: string;
  selected: string;
}

interface ActionColors {
  agnostic: string;
  success: string;
  danger: string;
  warning: string;
}

export interface ThemeColors {
  primary: ColorSet;
  secondary: ColorSet;
  tertiary: ColorSet;
  quaternary: ColorSet;
  neutrals: NeutralColors;
  black: string;
  white: string;

  shadow: string;
  border: BorderColors;
  background: BackgroundColors;
  text: TextColors;
  action: ActionColors;
}

interface TypographySet {
  font: string;
  size: string;
  lineHeight: string;
  letterSpacing: string;
  wordSpacing: string;
  weight:
    | 'normal'
    | 'bold'
    | 'lighter'
    | 'bolder'
    | 100
    | 200
    | 300
    | 400
    | 500
    | 600
    | 700
    | 800
    | 900;
  style: 'oblique' | 'normal' | 'italic';
}

export interface ThemeTypography {
  base: TypographySet;
  h1: TypographySet;
  h2: TypographySet;
  h3: TypographySet;
  h4: TypographySet;
  h5: TypographySet;
  h6: TypographySet;
  label: TypographySet;
  input: TypographySet;
  message: TypographySet;
  small: TypographySet;
  link: TypographySet;
}

export interface ThemeSpacing {
  none: string;
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
}

const SPACER = 1;

export interface ThemeBreakpoints {
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
}

export interface ITheme {
  breakpoint: ThemeBreakpoints;
  breakpointMQ: ThemeBreakpoints;
  color: ThemeColors;
  spacing: ThemeSpacing;
  typography: ThemeTypography;
  components: {
    container: ContainerThemeType;
    grid: GridThemeType;
  };
}

const defaultThemeSpacing: ThemeSpacing = {
  none: '0',
  xs: `${SPACER * 0.25}rem`,
  sm: `${SPACER * 0.5}rem`,
  md: `${SPACER}rem`,
  lg: `${SPACER * 1.5}rem`,
  xl: `${SPACER * 2.5}rem`,
  xxl: `${SPACER * 4}rem`
};

const defaultBreakPoints: ThemeBreakpoints = {
  sm: '567px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1400px'
};

const defaultTypography: ThemeTypography = {
  base: {
    font: 'string;',
    size: '1rem;',
    lineHeight: '1.5rem;',
    letterSpacing: '0;',
    wordSpacing: '0;',
    weight: 'normal',
    style: 'normal'
  },
  h1: {
    font: 'string;',
    size: '1rem;',
    lineHeight: '1.5rem;',
    letterSpacing: '0;',
    wordSpacing: '0;',
    weight: 'normal',
    style: 'normal'
  },
  h2: {
    font: 'string;',
    size: '1rem;',
    lineHeight: '1.5rem;',
    letterSpacing: '0;',
    wordSpacing: '0;',
    weight: 'normal',
    style: 'normal'
  },
  h3: {
    font: 'string;',
    size: '1rem;',
    lineHeight: '1.5rem;',
    letterSpacing: '0;',
    wordSpacing: '0;',
    weight: 'normal',
    style: 'normal'
  },
  h4: {
    font: 'string;',
    size: '1rem;',
    lineHeight: '1.5rem;',
    letterSpacing: '0;',
    wordSpacing: '0;',
    weight: 'normal',
    style: 'normal'
  },
  h5: {
    font: 'string;',
    size: '1rem;',
    lineHeight: '1.5rem;',
    letterSpacing: '0;',
    wordSpacing: '0;',
    weight: 'normal',
    style: 'normal'
  },
  h6: {
    font: 'string;',
    size: '1rem;',
    lineHeight: '1.5rem;',
    letterSpacing: '0;',
    wordSpacing: '0;',
    weight: 'normal',
    style: 'normal'
  },
  label: {
    font: 'string;',
    size: '1rem;',
    lineHeight: '1.5rem;',
    letterSpacing: '0;',
    wordSpacing: '0;',
    weight: 'normal',
    style: 'normal'
  },
  input: {
    font: 'string;',
    size: '1rem;',
    lineHeight: '1.5rem;',
    letterSpacing: '0;',
    wordSpacing: '0;',
    weight: 'normal',
    style: 'normal'
  },
  message: {
    font: 'string;',
    size: '1rem;',
    lineHeight: '1.5rem;',
    letterSpacing: '0;',
    wordSpacing: '0;',
    weight: 'normal',
    style: 'normal'
  },
  small: {
    font: 'string;',
    size: '1rem;',
    lineHeight: '1.5rem;',
    letterSpacing: '0;',
    wordSpacing: '0;',
    weight: 'normal',
    style: 'normal'
  },
  link: {
    font: 'string;',
    size: '1rem;',
    lineHeight: '1.5rem;',
    letterSpacing: '0;',
    wordSpacing: '0;',
    weight: 'normal',
    style: 'normal'
  }
};

const defaultColor: ThemeColors = {
  primary: {
    lightest: '#fc0',
    lighter: '#fc0',
    light: '#fc0',
    base: '#fc0',
    dark: '#fc0',
    darker: '#fc0',
    darkest: '#fc0'
  },
  secondary: {
    lightest: 'rgba(255, 100, 0,0.5)',
    lighter: 'rgba(255,100,0,0.5)',
    light: 'rgba(255,100,0,0.5)',
    base: 'rgba(255,100,0,0.5)',
    dark: 'rgba(255,100,0,0.5)',
    darker: 'rgba(255,100,0,0.5)',
    darkest: 'rgba(255,100,0,0.5)'
  },
  tertiary: {
    lightest: 'rgb(255, 100, 100)',
    lighter: 'rgb(255,100,100)',
    light: 'rgb(255,100,100)',
    base: 'rgb(255,100,100)',
    dark: 'rgb(255,100,100)',
    darker: 'rgb(255,100,100)',
    darkest: 'rgb(255,100,100)'
  },
  quaternary: {
    lightest: '#fc0',
    lighter: '#fc0',
    light: '#fc0',
    base: '#fc0',
    dark: '#fc0',
    darker: '#fc0',
    darkest: '#fc0'
  },
  neutrals: {
    1: '#fc0',
    2: '#fc0',
    3: '#fc0',
    4: '#fc0',
    5: '#fc0',
    6: '#fc0',
    7: '#fc0',
    8: '#fc0',
    9: '#fc0',
    10: '#fc0'
  },
  black: '#222',
  white: '#fff',
  shadow: '#222',
  border: {
    default: '#fc0',
    muted: '#fc0'
  },
  background: {
    default: '#fc0',
    hero: '#fc0',
    overlay: '#fc0'
  },
  text: {
    heading: '#fc0',
    heading2: '#fc0',
    heading3: '#fc0',
    default: '#fc0',
    muted: '#fc0',
    selected: '#fc0'
  },
  action: {
    agnostic: '#ccc',
    success: '#080',
    danger: '#c00',
    warning: '#c60'
  }
};

const defaultGridTheme: GridThemeType = {
  sm: {
    column: 2,
    gap: '1rem'
  },
  md: {
    column: 4,
    gap: '1rem'
  },
  lg: {
    column: 12,
    gap: '1rem'
  },
  xl: {
    column: 12,
    gap: '1.5rem'
  },
  xxl: {
    column: 12,
    gap: '2rem'
  }
};

export const generateMediaQueries = (points: ThemeBreakpoints) => ({
  sm: `@media (min-width: ${points.sm})`,
  md: `@media (min-width: ${points.md})`,
  lg: `@media (min-width: ${points.lg})`,
  xl: `@media (min-width: ${points.xl})`,
  xxl: `@media (min-width: ${points.xxl})`
});

const defaultContainerTheme: ContainerThemeType = {
  sm: {
    padding: '0 1rem'
  },
  md: {
    padding: '0 1rem '
  },
  lg: {
    padding: '0 1.5rem'
  },
  xl: {
    padding: '0 2rem '
  },
  xxl: {
    padding: '0 3.5rem'
  }
};

const defaultTheme: ITheme = {
  breakpoint: defaultBreakPoints,
  breakpointMQ: generateMediaQueries(defaultBreakPoints),
  color: defaultColor,
  spacing: defaultThemeSpacing,
  typography: defaultTypography,
  components: {
    container: defaultContainerTheme,
    grid: defaultGridTheme
  }
};

export default defaultTheme;

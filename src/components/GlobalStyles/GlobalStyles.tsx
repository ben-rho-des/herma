import * as React from 'react';
import { Global, css, useTheme, SerializedStyles } from '@emotion/react';
import { ThemeColors } from '../Theme';

const commonGlobalCSS = (colors: ThemeColors): SerializedStyles => css``;

const cssVars = (colors: ThemeColors) => `
    :root {
      --c-primary-base: ${colors.primary.base};
      --c-primary-base: ${colors.primary.dark};
      --c-primary-base: ${colors.primary.darker};
      --c-primary-base: ${colors.primary.darkest};
      --c-primary-base: ${colors.primary.light};
      --c-primary-lighter: ${colors.primary.lighter};
      --c-primary-lightest: ${colors.primary.lightest};
      --c-secondary-base: ${colors.secondary.base};
      --c-secondary-base: ${colors.secondary.dark};
      --c-secondary-base: ${colors.secondary.darker};
      --c-secondary-base: ${colors.secondary.darkest};
      --c-secondary-base: ${colors.secondary.light};
      --c-secondary-lighter: ${colors.secondary.lighter};
      --c-secondary-lightest: ${colors.secondary.lightest};
      --c-tertiary-base: ${colors.tertiary.base};
      --c-tertiary-base: ${colors.tertiary.dark};
      --c-tertiary-base: ${colors.tertiary.darker};
      --c-tertiary-base: ${colors.tertiary.darkest};
      --c-tertiary-base: ${colors.tertiary.light};
      --c-tertiary-lighter: ${colors.tertiary.lighter};
      --c-tertiary-lightest: ${colors.tertiary.lightest};
      --c-quaternary-base: ${colors.quaternary.base};
      --c-quaternary-base: ${colors.quaternary.dark};
      --c-quaternary-base: ${colors.quaternary.darker};
      --c-quaternary-base: ${colors.quaternary.darkest};
      --c-quaternary-base: ${colors.quaternary.light};
      --c-quaternary-lighter: ${colors.quaternary.lighter};
      --c-quaternary-lightest: ${colors.quaternary.lightest};

      --c-danger: ${colors.action.danger};
      --c-success: ${colors.action.success};
      --c-warning: ${colors.action.warning};
      --c-agnostic: ${colors.action.agnostic};

      --c-shadow: ${colors.shadow};
      --c-black: ${colors.black};
      --c-white: ${colors.white};
      --c-neutral-1: ${colors.neutrals[1]};
      --c-neutral-2: ${colors.neutrals[2]};
      --c-neutral-3: ${colors.neutrals[3]};
      --c-neutral-4: ${colors.neutrals[4]};
      --c-neutral-5: ${colors.neutrals[5]};
      --c-neutral-6: ${colors.neutrals[6]};
      --c-neutral-7: ${colors.neutrals[7]};
      --c-neutral-8: ${colors.neutrals[8]};
      --c-neutral-9: ${colors.neutrals[9]};
      --c-neutral-10: ${colors.neutrals[10]};
    }
  `;

const GlobalStyles: React.FC = () => {
  const { color } = useTheme();

  return (
    <Global
      styles={css`
        ${cssVars(color)}
        ${commonGlobalCSS(color)}
      `}
    />
  );
};

export default GlobalStyles;

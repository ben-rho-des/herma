import styled from '@emotion/styled';
import { ITheme } from '../Theme';

export const StyledContainer = styled.div<{
  background?: string;
  padding?: string;
  theme?: ITheme;
}>`
  font-size: 5rem;
  ${({ background }) => background && `background: ${background}`};
  ${({ padding }) => padding && `padding: ${padding}`};

  ${({ theme }) =>
    Object.keys(theme).length &&
    `
      padding: ${theme.components.container.sm.padding};
 
      ${theme.breakpointMQ.md} {
        padding: ${theme.components.container.md.padding};
      }
      ${theme.breakpointMQ.lg} {
        padding: ${theme.components.container.lg.padding};
      }
      ${theme.breakpointMQ.xl} {
        padding: ${theme.components.container.xl.padding};
      }
      ${theme.breakpointMQ.xx} {
        padding: ${theme.components.container.xx.padding};
      }
  `};
`;

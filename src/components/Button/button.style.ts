import styled from '@emotion/styled';
import { ButtonProps } from './Button';

export const StyledButton = styled.div<Partial<ButtonProps>>`
  background: DarkTurquoise;
  border: 0;
  cursor: pointer;
  ${({ disabled }) => disabled && `cursor: not-allowed;`}
`;

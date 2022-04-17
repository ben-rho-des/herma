import { keyframes } from '@emotion/react';

export const hermaColors = ['#b5b397', '#c8c3a7', '#b1b099'];

export const hermaBG = keyframes`
0% {
  background-color: ${hermaColors[0]};
}
50% {
  background-color: ${hermaColors[1]};
}
100% {
  background-color: ${hermaColors[2]};
}
`;

export const hermaColor = keyframes`
0% {
  color: ${hermaColors[0]};
}
50% {
  color: ${hermaColors[1]};
}
100% {
  color: ${hermaColors[2]};
}
`;

export const hermaBorderColor = keyframes`
0% {
  border-color: ${hermaColors[0]};
}
50% {
  border-color: ${hermaColors[1]};
}
100% {
  border-color: ${hermaColors[2]};
}
`;

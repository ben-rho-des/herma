import React from 'react';
import { ThemeProvider } from '@emotion/react';
import theme, { ThemeProps } from './Theme';
import { render, screen } from '@testing-library/react';

const defaultProps: ThemeProps = {};

const setup = (props = defaultProps) => render(<ThemeProvider theme={theme}>meep</ThemeProvider>);

describe('Theme', () => {
  it('renders', () => {
    setup({ children: 'foo' });
    expect(screen.getByText('foo'));
  });
});

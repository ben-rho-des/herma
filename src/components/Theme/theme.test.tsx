import React from 'react';
import { Theme, ThemeProps } from '.';
import { render, screen } from '@testing-library/react';

const defaultProps: ThemeProps = {};

const setup = (props = defaultProps) => render(<Theme>meep</Theme>);

describe('Theme', () => {
  it('renders', () => {
    setup({ children: 'foo' });
    expect(screen.getByText('foo'));
  });
});

import React from 'react';
import { GlobalStyles, GlobalStylesProps } from '.';
import { render, screen } from '@testing-library/react';

const defaultProps: GlobalStylesProps = {
  
};

const setup = (props = defaultProps) => render(<GlobalStyles {...props} />);

describe('GlobalStyles', () => {
  it('renders', () => {
    setup({children: 'foo'});
    expect(screen.getByText('foo'));
  });
});

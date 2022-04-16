import React from 'react';
import { Link, LinkProps } from '.';
import { render, screen } from '@testing-library/react';

const defaultProps: LinkProps = {
  
};

const setup = (props = defaultProps) => render(<Link {...props} />);

describe('Link', () => {
  it('renders', () => {
    setup({children: 'foo'});
    expect(screen.getByText('foo'));
  });
});

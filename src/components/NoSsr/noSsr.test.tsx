import React from 'react';
import { NoSsr, NoSsrProps } from '.';
import { render, screen } from '@testing-library/react';

const defaultProps: NoSsrProps = {
  
};

const setup = (props = defaultProps) => render(<NoSsr {...props} />);

describe('NoSsr', () => {
  it('renders', () => {
    setup({children: 'foo'});
    expect(screen.getByText('foo'));
  });
});

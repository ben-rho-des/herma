import React from 'react';
import { List, ListProps } from '.';
import { render, screen } from '@testing-library/react';

const defaultProps: ListProps = {
  
};

const setup = (props = defaultProps) => render(<List {...props} />);

describe('List', () => {
  it('renders', () => {
    setup({children: 'foo'});
    expect(screen.getByText('foo'));
  });
});

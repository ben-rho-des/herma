import React from 'react';
import { ListItem, ListItemProps } from '.';
import { render, screen } from '@testing-library/react';

const defaultProps: ListItemProps = {
  
};

const setup = (props = defaultProps) => render(<ListItem {...props} />);

describe('ListItem', () => {
  it('renders', () => {
    setup({children: 'foo'});
    expect(screen.getByText('foo'));
  });
});

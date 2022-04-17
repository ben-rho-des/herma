import React from 'react';
import { Cell, CellProps } from '.';
import { render, screen } from '@testing-library/react';

const defaultProps: CellProps = {};

const setup = (props = defaultProps) => render(<Cell {...props} />);

describe('Cell', () => {
  it('renders', () => {
    setup();
    expect(screen.getByText('foo'));
  });
});

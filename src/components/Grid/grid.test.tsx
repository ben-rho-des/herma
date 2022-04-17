import React from 'react';
import { Grid, GridProps } from '.';
import { render, screen } from '@testing-library/react';

const defaultProps: GridProps = {
  children: <div>hello</div>,
  gap: '20px',
  columns: 10
};

const setup = (props = defaultProps) => render(<Grid {...props} />);

describe('Grid', () => {
  it('renders', () => {
    setup({ children: 'foo', columns: 12, gap: '10px' });
    expect(screen.getByText('foo'));
  });
});

import React from 'react';
import { Progress, ProgressProps } from '.';
import { render, screen } from '@testing-library/react';

const defaultProps: ProgressProps = {
  
};

const setup = (props = defaultProps) => render(<Progress {...props} />);

describe('Progress', () => {
  it('renders', () => {
    setup({children: 'foo'});
    expect(screen.getByText('foo'));
  });
});

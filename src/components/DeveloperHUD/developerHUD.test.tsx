import React from 'react';
import { DeveloperHUD, DeveloperHUDProps } from '.';
import { render, screen } from '@testing-library/react';

const defaultProps: DeveloperHUDProps = {
  
};

const setup = (props = defaultProps) => render(<DeveloperHUD {...props} />);

describe('DeveloperHUD', () => {
  it('renders', () => {
    setup({children: 'foo'});
    expect(screen.getByText('foo'));
  });
});

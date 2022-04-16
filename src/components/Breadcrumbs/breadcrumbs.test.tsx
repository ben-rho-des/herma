import React from 'react';
import { Breadcrumbs, BreadcrumbsProps } from '.';
import { render, screen } from '@testing-library/react';

const defaultProps: BreadcrumbsProps = {
  
};

const setup = (props = defaultProps) => render(<Breadcrumbs {...props} />);

describe('Breadcrumbs', () => {
  it('renders', () => {
    setup({children: 'foo'});
    expect(screen.getByText('foo'));
  });
});

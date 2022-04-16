import React from 'react';
import { Example } from '.';
import { render } from '@testing-library/react';

describe('Example Component', () => {
  it('Example renders', () => {
    const { container } = render(<Example />);

    const node = container.querySelector('button.example');
    expect(node!.className).toEqual('example');
  });

  it('Example active renders', () => {
    const { container } = render(<Example active />);

    const node = container.querySelector('button.example');
    expect(node!.className).toEqual('example example--active');
  });

  it('Example disabled renders', () => {
    const { container } = render(<Example disabled />);

    const node = container.querySelector('button.example');
    expect(node!.className).toEqual('example example--disabled');
  });

  it('Example children renders', () => {
    const { container } = render(<Example>foo</Example>);

    const node = container.querySelector('button.example');
    expect(node!.innerHTML).toEqual('foo');
  });

  it('Example extra classNames render', () => {
    const { container } = render(<Example className='foo' />);

    const node = container.querySelector('button.example');
    expect(node!.className).toEqual('example foo');
  });
});

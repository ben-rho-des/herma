import React, { PropsWithChildren } from 'react';
import { Meta, Story } from '@storybook/react';
import { Button } from './';

const meta: Meta<PropsWithChildren<Record<string, unknown>>> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    as: {
      description: 'The element of the button',
      control: { type: 'select', options: ['button', 'a'] },
      defaultValue: 'button'
    },
    label: {
      description: 'the label to be shown on the button',
      defaultValue: 'buy buy buy'
    }
  }
};

const Template: Story<PropsWithChildren<Record<string, any>>> = (args) => {
  return <Button {...args} label={args.label} icon={<>💰</>} />;
};

const Basic = Template.bind({});

export default meta;

export { Basic };

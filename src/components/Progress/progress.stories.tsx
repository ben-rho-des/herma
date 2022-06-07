import React, { PropsWithChildren } from 'react';
import { Meta, Story } from '@storybook/react';
import { Progress, ProgressVariants, StrokeCap } from '.';

const meta: Meta<PropsWithChildren<Record<string, unknown>>> = {
  title: 'Components/Progress',
  component: Progress,
  argTypes: {
    type: {
      description: 'The type of progress bar',
      control: { type: 'select', options: Object.values(ProgressVariants) },
      defaultValue: ProgressVariants.CIRCULAR
    },
    strokeCap: {
      description: 'The stroke cap end of progress bar',
      control: { type: 'select', options: Object.values(StrokeCap) },
      defaultValue: StrokeCap.BUTT
    }
  }
};

const Template: Story<PropsWithChildren<Record<string, any>>> = (args) => {
  return <Progress {...args}>meep</Progress>;
};

const Basic = Template.bind({});

export default meta;

export { Basic };

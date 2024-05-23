import readme from '@frameless/components-css/card/README.md?raw';
import { Card } from '@frameless/components-react/src/Card';
import type { Meta, StoryObj } from '@storybook/react';

import '@frameless/components-css/card/index.scss';

// adds Card to Storybook
const meta = {
  title: 'React Component/Card',

  id: 'react-card',

  component: Card,

  argTypes: {
    children: {
      name: 'Content',

      description: 'Card',

      type: {
        name: 'string',
        required: true,
      },

      defaultValue: '',
    },
  },

  args: {},

  tags: ['autodocs'],

  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof Card>;

export default meta;

// defines that this (part of the) story is documentation
type Story = StoryObj<typeof meta>;

// adds Frameless Card section to Card in Storybook
export const Default: Story = {
  name: 'Frameless Card', // in sidenav shows Frameless Card below Docs
  args: {},
  parameters: {},
};

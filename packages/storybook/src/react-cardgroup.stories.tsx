import readme from '@frameless/components-css/card/README.md?raw';
import { CardGroup } from '@frameless/components-react/src/CardGroup';
import type { Meta, StoryObj } from '@storybook/react';

import '@frameless/components-css/card/index.scss';

// adds Card to Storybook
const meta = {
  title: 'React Component/CardGroup',

  id: 'react-cardgroup',

  component: CardGroup,

  argTypes: {
    children: {
      name: 'Content',

      description: 'CardGroup',

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
} satisfies Meta<typeof CardGroup>;

export default meta;

// defines that this (part of the) story is documentation
type Story = StoryObj<typeof meta>;

// adds Frameless Card section to Card in Storybook
export const Default: Story = {
  name: 'Frameless CardGroup', // in sidenav shows Frameless Card below Docs
  args: {},
  parameters: {},
};

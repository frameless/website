/* @license CC0-1.0 */

import readme from '@frameless/components-css/logo/README.md?raw';
import { Logo } from '@frameless/components-react/src/Logo';
import type { Meta, StoryObj } from '@storybook/react';

import '@frameless/components-css/logo/index.scss';

// adds Logo to Storybook
const meta = {
  title: 'React Component/Logo',

  id: 'react-logo',

  component: Logo,

  argTypes: {
    children: {
      name: 'Content',

      description: 'Logo',

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
} satisfies Meta<typeof Logo>;

export default meta;

// defines that this (part of the) story is documentation
type Story = StoryObj<typeof meta>;

// adds Frameless Logo section to Logo in Storybook
export const Default: Story = {
  name: 'Frameless Logo', // in sidenav shows Frameless logo below Docs
  args: {},
  parameters: {},
};
//

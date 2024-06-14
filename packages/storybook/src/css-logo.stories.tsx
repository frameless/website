/* @license CC0-1.0 */

import '@frameless/components-css/logo/index.scss';
import readme from '@frameless/components-css/logo/README.md?raw';
import { Logo } from '@frameless/components-react/src/Logo';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'CSS Component/Logo',

  id: 'css-logo',

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

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Frameless Logo',
  args: {},
  parameters: {},
};

// om de 4 states van het logo te laten zien?
export const LogoSmall: Story = {
  name: 'Frameless Logo Small',
  args: {},
  parameters: {},
};

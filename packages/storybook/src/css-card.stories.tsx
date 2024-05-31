/* @license CC0-1.0 */

import '@frameless/components-css/card/index.scss';
import readme from '@frameless/components-css/card/README.md?raw';
import { Card } from '@frameless/components-react/src/Card';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'CSS Component/Card',
  id: 'css-card',
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
  args: {
    children: '',
  },
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

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Frameless Card',
};

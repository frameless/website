/* @license CC0-1.0 */

import '@frameless/components-css/card/index.scss';
import readme from '@frameless/components-css/card/README.md?raw';
import { CardGroup } from '@frameless/components-react/src/CardGroup';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'CSS Component/CardGroup',
  id: 'css-card',
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
} satisfies Meta<typeof CardGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Frameless CardGroup',
};

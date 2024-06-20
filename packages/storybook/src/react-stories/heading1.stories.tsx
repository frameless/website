/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import { Heading1 } from '@utrecht/component-library-react/dist/css-module';
// import { Heading1 } from '@frameless/components-react'; // TODO: use frameless package instead

const meta = {
  title: 'React Component/Heading1',
  id: 'react-heading1',
  component: Heading1,
  argTypes: {
    children: {
      name: 'Content',
      description: 'Heading1 text',
      type: {
        name: 'string',
        required: true,
      },
      defaultValue: '',
    },
  },
  args: {
    children: 'Opslaan en verder',
  },
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        // component: readme,
      },
    },
  },
} satisfies Meta<typeof Heading1>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Frameless heading1',
};

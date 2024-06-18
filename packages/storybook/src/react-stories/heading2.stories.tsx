/* @license CC0-1.0 */

// import readme from '@frameless/components-css/heading1/README.md?raw';
import type { Meta, StoryObj } from '@storybook/react';
import { Heading2 } from '@utrecht/component-library-react/dist/css-module';
// import { Heading1 } from '@frameless/components-react'; // TODO: use frameless package instead
// import '@frameless/components-css/heading1/index.scss';

const meta = {
  title: 'React Component/Heading2',
  id: 'react-heading2',
  component: Heading2,
  argTypes: {
    children: {
      name: 'Content',
      description: 'Heading2 text',
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
} satisfies Meta<typeof Heading2>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Frameless heading2',
};

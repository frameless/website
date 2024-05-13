/* @license CC0-1.0 */

// import readme from '@frameless/components-css/logo/README.md?raw';
import type { Meta, StoryObj } from '@storybook/react';
import { Logo } from '@utrecht/component-library-react/dist/css-module';
// import { Logo } from '@frameless/components-react'; // TODO: use frameless package instead
// import '@frameless/components-css/logo/index.scss';

// TODO: change the below code to correct css logo component code

const meta = {
  title: 'CSS Component/Logo',
  id: 'css-logo',
  component: Logo,
  argTypes: {
    children: {
      name: 'Content',
      description: 'Logo text',
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
} satisfies Meta<typeof Logo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Frameless logo',
};

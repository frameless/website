/* @license CC0-1.0 */

// import readme from '@frameless/components-css/heading1/README.md?raw';
import { Hero } from '@frameless/components-react/src';
import type { Meta, StoryObj } from '@storybook/react';
import { Heading2, Paragraph } from '@utrecht/component-library-react';
// import { Heading1 } from '@frameless/components-react'; // TODO: use frameless package instead
// import '@frameless/components-css/heading1/index.scss';

const meta = {
  title: 'CSS Component/Hero',
  id: 'css-hero',
  component: Hero,
  argTypes: {
    children: {
      name: 'Content',
      description: 'Children of the Hero',
      type: {
        name: 'string',
        required: true,
      },
      defaultValue: 'Sterk in Frontend.',
    },
  },
  args: {
    children: (
      <>
        <Heading2>Sterk in Frontend.</Heading2>
        <Paragraph lead>Van architectuur & proof-of-concept tot toegankelijk in productie</Paragraph>
      </>
    ),
  },
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        // component: readme,
      },
    },
  },
} satisfies Meta<typeof Hero>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

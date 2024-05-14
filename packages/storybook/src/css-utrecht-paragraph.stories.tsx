/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import { Paragraph } from '@utrecht/component-library-react/dist/css-module';
// import readme from 'paragraph.md?raw';

const meta = {
  title: 'CSS Component/Paragraph',
  id: 'css-utrecht-paragraph',
  component: Paragraph,
  argTypes: {
    children: {
      name: 'Content',
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
      description: {},
    },
  },
} satisfies Meta<typeof Paragraph>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Paragraph',
  args: {
    children:
      'Herbruikbare componenten onafhankelijk van huisstijl, daar mag je ons voor wakker maken! Frameless heeft al aan meerdere white-label design systems mogen werken en is trots op onze bijdrage aan NL Design System. Wij helpen ook graag als technisch partner bij het bouwen van toegankelijke en gebruiksvriendelijke web applicaties.',
  },
};
export const LeadParagraph: Story = {
  name: 'Lead paragraph',
  args: {
    ...Default.args,
    lead: true,
  },
};

export const SmallPrintParagraph: Story = {
  name: 'Small print',
  args: {
    ...Default.args,
    small: true,
  },
};

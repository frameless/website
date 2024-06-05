/* @license CC0-1.0 */

import '@frameless/components-css/card/index.scss';
import readme from '@frameless/components-css/card/README.md?raw';
import { Card } from '@frameless/components-react/src/Card';
import type { Meta, StoryObj } from '@storybook/react';
import { Heading2, Heading3, Heading4, Heading5, Heading6, Paragraph } from '@utrecht/component-library-react';

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
  args: {
    children: (
      <>
        <Paragraph>
          Herbruikbare componenten onafhankelijk van huisstijl, daar mag je ons voor wakker maken! Frameless heeft al
          aan meerdere white-label design systems mogen werken en is trots op onze bijdrage aan NL Design System.
        </Paragraph>
      </>
    ),
  },
};

export const LongHeading: Story = {
  args: {
    children: (
      <>
        <Heading3>The quick brown fox jumps over the lazy dog</Heading3>
        <Paragraph>
          Herbruikbare componenten onafhankelijk van huisstijl, daar mag je ons voor wakker maken! Frameless heeft al
          aan meerdere white-label design systems mogen werken en is trots op onze bijdrage aan NL Design System.
        </Paragraph>
      </>
    ),
  },
};

export const Empty: Story = {
  args: {
    children: '',
  },
};

export const WithHeading2: Story = {
  args: {
    children: (
      <>
        <Heading2>Design Systems</Heading2>
        <Paragraph>
          Herbruikbare componenten onafhankelijk van huisstijl, daar mag je ons voor wakker maken! Frameless heeft al
          aan meerdere white-label design systems mogen werken en is trots op onze bijdrage aan NL Design System.
        </Paragraph>
      </>
    ),
  },
};
export const WithHeading3: Story = {
  args: {
    children: (
      <>
        <Heading3>Design Systems</Heading3>
        <Paragraph>
          Herbruikbare componenten onafhankelijk van huisstijl, daar mag je ons voor wakker maken! Frameless heeft al
          aan meerdere white-label design systems mogen werken en is trots op onze bijdrage aan NL Design System.
        </Paragraph>
      </>
    ),
  },
};
export const WithHeading4: Story = {
  args: {
    children: (
      <>
        <Heading4>Design Systems</Heading4>
        <Paragraph>
          Herbruikbare componenten onafhankelijk van huisstijl, daar mag je ons voor wakker maken! Frameless heeft al
          aan meerdere white-label design systems mogen werken en is trots op onze bijdrage aan NL Design System.
        </Paragraph>
      </>
    ),
  },
};
export const WithHeading5: Story = {
  args: {
    children: (
      <>
        <Heading5>Design Systems</Heading5>
        <Paragraph>
          Herbruikbare componenten onafhankelijk van huisstijl, daar mag je ons voor wakker maken! Frameless heeft al
          aan meerdere white-label design systems mogen werken en is trots op onze bijdrage aan NL Design System.
        </Paragraph>
      </>
    ),
  },
};

export const WithHeading6: Story = {
  args: {
    children: (
      <>
        <Heading6>Design Systems</Heading6>
        <Paragraph>
          Herbruikbare componenten onafhankelijk van huisstijl, daar mag je ons voor wakker maken! Frameless heeft al
          aan meerdere white-label design systems mogen werken en is trots op onze bijdrage aan NL Design System.
        </Paragraph>
      </>
    ),
  },
};

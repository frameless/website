import '@frameless/components-css/card/index.scss';
import readme from '@frameless/components-css/card/README.md?raw';
import { Card } from '@frameless/components-react/src/Card';
import type { Meta, StoryObj } from '@storybook/react';
import { Paragraph } from '@utrecht/component-library-react';

const meta = {
  title: 'React Component/Card',
  id: 'react-card',
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
    heading: 'The quick brown fox jumps over the lazy dog',
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

export const Empty: Story = {
  args: {
    children: '',
  },
};

export const WithHeading2: Story = {
  args: {
    heading: 'Design Systems',
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
export const WithHeading3: Story = {
  args: {
    heading: 'Design Systems',
    headingLevel: 3,
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
export const WithHeading4: Story = {
  args: {
    heading: 'Design Systems',
    headingLevel: 4,
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
export const WithHeading5: Story = {
  args: {
    heading: 'Design Systems',
    headingLevel: 5,
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

export const WithHeading6: Story = {
  args: {
    heading: 'Design Systems',
    headingLevel: 6,
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

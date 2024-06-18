/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import { Link, Paragraph } from '@utrecht/component-library-react/dist/css-module';

const meta = {
  title: 'React Component/Link',
  id: 'react-utrecht-link',
  component: Link,
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
} satisfies Meta<typeof Link>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Link',
  args: {
    children: 'Frameless',
    href: '#',
  },
};

export const LinkInParagraph: Story = {
  name: 'Link in body text',
  args: {
    children: 'Op de website van Frameless',
    href: '#',
  },
  decorators: [
    (Story) => (
      <Paragraph>
        Afgelopen tijd hebben Robbert, Yolijn, Ali, Savi, Rowan, Tessa, Marwa, Angela en Bryan aan veel leuke projecten
        gewerkt. {Story()} kun je een aantal van deze projecten zien.
      </Paragraph>
    ),
  ],
};

export const LinkInLeadParagraph: Story = {
  name: 'Link in lead paragraph',
  args: {
    children: 'Op de website van Frameless',
    href: '#',
  },
  decorators: [
    (Story) => (
      <Paragraph lead>
        Afgelopen tijd hebben Robbert, Yolijn, Ali, Savi, Rowan, Tessa, Marwa, Angela en Bryan aan veel leuke projecten
        gewerkt. {Story()} kun je een aantal van deze projecten zien.
      </Paragraph>
    ),
  ],
};

export const LinkInSmallPrint: Story = {
  name: 'Link in small print',
  args: {
    children: 'Op de website van Frameless',
    href: '#',
  },
  decorators: [
    (Story) => (
      <Paragraph small>
        Afgelopen tijd hebben Robbert, Yolijn, Ali, Savi, Rowan, Tessa, Marwa, Angela en Bryan aan veel leuke projecten
        gewerkt. {Story()} kun je een aantal van deze projecten zien.
      </Paragraph>
    ),
  ],
};

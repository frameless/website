/* @license CC0-1.0 */

import '@frameless/components-css/card/index.scss';
import readme from '@frameless/components-css/card-group/README.md?raw';
import { Card } from '@frameless/components-react/src/Card';
import { CardGroup } from '@frameless/components-react/src/CardGroup';
import type { Meta, StoryObj } from '@storybook/react';
import { Paragraph } from '@utrecht/component-library-react';

const meta = {
  title: 'React Component/CardGroup',
  id: 'react-card-group',
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
  args: {
    children: (
      <>
        <Card heading="Design System" headingLevel={2}>
          <Paragraph>
            Herbruikbare componenten onafhankelijk van huisstijl, daar mag je ons voor wakker maken! Frameless heeft al
            aan meerdere white-label design systems mogen werken en is trots op onze bijdrage aan NL Design System.
          </Paragraph>
        </Card>
        <Card heading="Design System" headingLevel={2}>
          <Paragraph>
            Herbruikbare componenten onafhankelijk van huisstijl, daar mag je ons voor wakker maken! Frameless heeft al
            aan meerdere white-label design systems mogen werken en is trots op onze bijdrage aan NL Design System.
          </Paragraph>
        </Card>
      </>
    ),
  },
  name: 'Frameless CardGroup',
};

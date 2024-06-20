/* @license CC0-1.0 */

import { Meta, StoryObj } from '@storybook/react';
import { Heading1, PageContent, Paragraph } from '@utrecht/component-library-react/dist/css-module';

const PageContentStory = ({ children }) => <PageContent>{children}</PageContent>;

const meta = {
  title: 'React Component/Page content',
  id: 'react-page-content',
  component: PageContentStory,
  argTypes: {
    children: {
      description: 'Page content',
    },
  },
  args: {
    children: [],
  },
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        //   component: readme,
      },
    },
  },
} satisfies Meta<typeof PageContentStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: [
      <Heading1>Frameless</Heading1>,
      <Paragraph>
        Herbruikbare componenten onafhankelijk van huisstijl, daar mag je ons voor wakker maken! Frameless heeft al aan
        meerdere white-label design systems mogen werken en is trots op onze bijdrage aan NL Design System. Wij helpen
        ook graag als technisch partner bij het bouwen van toegankelijke en gebruiksvriendelijke web applicaties.
      </Paragraph>,
    ],
  },
};

//

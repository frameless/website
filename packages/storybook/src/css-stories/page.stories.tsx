/* @license CC0-1.0 */

import { Meta, StoryObj } from '@storybook/react';
import { Page, PageContent } from '@utrecht/component-library-react/dist/css-module';
// TODO for future version: add PageHeader + PageFooter?
// import { Page } from '@frameless/components-react'; // TODO: use frameless package instead

const meta = {
  title: 'CSS Component/Page',
  id: 'css-page',
  component: Page,
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
} satisfies Meta<typeof Page>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: [
      //   <PageHeader>Header area</PageHeader>,
      <PageContent>
        <main className="utrecht-page-content__main">Content area</main>
      </PageContent>,
      //   <PageFooter>Footer area</PageFooter>,
    ],
  },
};

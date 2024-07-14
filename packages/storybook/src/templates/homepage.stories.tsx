/* @license CC0-1.0 */

import { Meta, StoryObj } from '@storybook/react';
import { HomePage } from './HomePage';
import './index.scss';

const meta = {
  title: 'Template/Homepage',
  id: 'template-homepage',
  parameters: {
    layout: 'fullscreen',
  },
  component: HomePage,
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const LightMode: Story = {
  args: { colorScheme: 'light' },
};

export const DarkMode: Story = {
  args: { colorScheme: 'dark' },
};

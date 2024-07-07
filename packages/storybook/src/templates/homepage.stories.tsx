/* @license CC0-1.0 */

import { Meta, StoryObj } from '@storybook/react';
import './index.scss';
import { HomePage } from './HomePage';

const meta = {
  title: 'Template/Homepage',
  id: 'template-homepage',
  parameters: {},
  component: HomePage,
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const DarkMode: Story = {
  args: { darkMode: true },
};

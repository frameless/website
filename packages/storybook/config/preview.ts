import '@frameless/design-tokens/dist/index.css';
import '@frameless/font/src/index.scss';
import type { Preview } from '@storybook/react';
import { ParametersArgsDecorator } from './ParametersArgsDecorator';

const preview: Preview = {
  parameters: {
    controls: { expanded: false },
    options: { panelPosition: 'right' },
  },
  decorators: [ParametersArgsDecorator],
};

export default preview;

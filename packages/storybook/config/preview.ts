import '@frameless/design-tokens/dist/index.css';
import '@frameless/font/src/index.css';
import '@frameless/components-css/index.scss';
import type { Preview } from '@storybook/react';
import { ParametersArgsDecorator } from './ParametersArgsDecorator';

const preview: Preview = {
  parameters: {
    controls: { expanded: false },
    options: { panelPosition: 'right' },
    html: {
      root: '.frameless-theme',
      prettier: {
        tabWidth: 4,
        useTabs: false,
        htmlWhitespaceSensitivity: 'strict',
        bracketSameLine: true,
      },
    },
  },
  decorators: [ParametersArgsDecorator],
};

export default preview;

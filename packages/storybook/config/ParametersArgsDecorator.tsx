import type { Decorator } from '@storybook/react';

export const ParametersArgsDecorator: Decorator = (Story, context) => {
  context.parameters['args'] = context.args;

  return (
    <div className="frameless-theme" id="frameless-root">
      <Story />
    </div>
  );
};

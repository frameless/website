import type { Meta, StoryObj } from '@storybook/react';
import { UnorderedList, UnorderedListItem } from '@utrecht/component-library-react/dist/css-module';

const meta = {
  title: 'CSS Component/Unordered list',
  id: 'css-utrecht-unordered-list',
  component: UnorderedList,
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
      description: {
        // component: readme,
      },
    },
  },
} satisfies Meta<typeof UnorderedList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Unordered list',
  args: {
    children: [
      <UnorderedListItem>
        NL Design System: Yolijn en Robbert zijn sinds 2020 verantwoordelijk voor de architectuur,community en groei van
        NL Design System.
      </UnorderedListItem>,
      <UnorderedListItem>
        Utrecht Design System: meer dan 80 componenten ontwikkeld voor Utrecht in verschillende technieken (CSS, HTML,
        React, Angular, Vue en als Web Component). Deze componenten worden inmiddels ook veel gebruikt door
        uiteenlopende projecten in de NL Design System community.
      </UnorderedListItem>,
      <UnorderedListItem>
        Den Haag Design System: begeleiding van het design system team, en leveranciers begeleiden met open source
        bouwen volgens de NL Design System architectuur.
      </UnorderedListItem>,
      <UnorderedListItem>
        Digitaal Loket van gemeente Utrecht: ontwikkeling van Strapi CMS voor de Producten en Diensten Catalogus, en de
        nieuwe website ontwikkelen als headless frontend op basis van NL Design System. Dit project wordt in de loop van
        2024 zichtbaar op utrecht.nl.
      </UnorderedListItem>,
      <UnorderedListItem>
        Huwelijksplanner voor gemeente Utrecht: front-end ontwikkeling Huwelijksplanner CMS op basis van NL Design
        System componenten.
      </UnorderedListItem>,
      <UnorderedListItem>
        Gemeente Voorbeeld: ontwikkeling van demo-website waar Vereniging van Nederlandse Gemeenten (VNG)
        gebruikerstesten doet, om gemeenten op weg te helpen met voldoen aan de WMEBV met NL Design System.
      </UnorderedListItem>,
      <UnorderedListItem>
        OpenCatalogi.nl - migratie naar NL Design System: migratie van codebase naar React componenten uit de NL Design
        System community.
      </UnorderedListItem>,
    ],
  },
};

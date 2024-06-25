/* @license CC0-1.0 */

import { Card } from '@frameless/components-react/src/Card';
import { CardGroup } from '@frameless/components-react/src/CardGroup';
import { Logo } from '@frameless/components-react/src/Logo';
import { Meta, StoryObj } from '@storybook/react';
import {
  Document,
  Heading2,
  Link,
  Page,
  PageContent,
  Paragraph,
  UnorderedList,
  UnorderedListItem,
} from '@utrecht/component-library-react/dist/css-module';

import './homepage.scss';

const meta = {
  title: 'Template/Homepage',
  id: 'template-homepage',
  parameters: {},
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Document>
      <Page className="utrecht-page__content">
        <PageContent>
          <div {...args} className="frameless-page-container">
            <div className="frameless-page">
              <Logo />
              <section className="frameless-section__about">
                <Heading2>Wij Maken</Heading2>

                <CardGroup>
                  <Card headingLevel={3} heading="Design Systems">
                    <Paragraph>
                      Herbruikbare componenten onafhankelijk van huisstijl, daar mag je ons voor wakker maken!
                    </Paragraph>
                    <Paragraph>
                      Frameless heeft al aan meerdere white-label design systems mogen werken en is trots op onze
                      bijdrage aan <Link href="https://nldesignsystem.nl">NL Design System</Link>
                    </Paragraph>
                  </Card>

                  <Card headingLevel={3} heading="Front-ends">
                    <Paragraph>
                      Wij helpen graag als technisch partner bij het bouwen van toegankelijke en gebruiksvriendelijke
                      web applicaties.
                    </Paragraph>
                  </Card>
                </CardGroup>
              </section>

              <section className="frameless-section__contact">
                <Heading2>Kennis maken?</Heading2>
                <Paragraph>
                  Mail ons op
                  <Link href="mailto:hello@frameless.io"> hello@frameless.io</Link>, dan spreken we snel een keer af!
                </Paragraph>
              </section>

              <section className="frameless-section__projecten">
                <Heading2>Goed voor elkaar</Heading2>
                <Paragraph>
                  Afgelopen tijd hebben Robbert, Yolijn, Ali, Savi, Rowan, Tessa, Marwa, Angela en Bryan aan veel leuke
                  projecten gewerkt:
                </Paragraph>

                <UnorderedList>
                  <UnorderedListItem>
                    <Link href="https://nldesignsystem.nl/">NL Design System</Link>: Yolijn en Robbert zijn sinds 2020
                    verantwoordelijk voor de architectuur, community en groei van NL Design System.
                  </UnorderedListItem>

                  <UnorderedListItem>
                    <Link href="https://nl-design-system.github.io/utrecht/storybook/">Utrecht Design System</Link>:
                    meer dan 80 componenten ontwikkeld voor Utrecht in verschillende technieken: als CSS, HTML, React,
                    Angular, Vue en als Web Component. Deze componenten worden inmiddels ook veel gebruikt door
                    uiteenlopende projecten in de NL Design System community.
                  </UnorderedListItem>

                  <UnorderedListItem>
                    <Link href="https://nl-design-system.github.io/denhaag/"> Den Haag Design System</Link>: begeleiding
                    van het design system team, en leveranciers begeleiden met open source bouwen volgens de NL Design
                    System architectuur.
                  </UnorderedListItem>

                  <UnorderedListItem>
                    <Link href="https://pki.utrecht.nl/">Digitaal Loket van gemeente Utrecht</Link>: ontwikkeling van
                    Strapi CMS voor de Producten en Diensten Catalogus, en de nieuwe website ontwikkelen als headless
                    frontend op basis van NL Design System. Dit project wordt in de loop van 2024 zichtbaar op
                    utrecht.nl.
                  </UnorderedListItem>

                  <UnorderedListItem>
                    Huwelijksplanner voor gemeente Utrecht: front-end ontwikkeling Huwelijksplanner CMS op basis van NL
                    Design System componenten.
                  </UnorderedListItem>

                  <UnorderedListItem>
                    <Link href="https://gemeentevoorbeeld.nl/">gemeente Voorbeeld</Link>: ontwikkeling van demo-website
                    waar Vereniging van Nederlandse Gemeenten (VNG) gebruikerstesten doet, om gemeenten op weg te helpen
                    met voldoen aan de&#160;
                    <Link href="https://www.digitaleoverheid.nl/overzicht-van-alle-onderwerpen/wetgeving/wet-modernisering-elektronisch-bestuurlijk-verkeer/">
                      WMEBV
                    </Link>
                    &#160;met NL Design System.
                  </UnorderedListItem>

                  <UnorderedListItem>
                    <Link href="https://opencatalogi.nl/">OpenCatalogi.nl — migratie naar NL Design System</Link>:
                    migratie van codebase naar React componenten uit de NL Design System community.
                  </UnorderedListItem>

                  <UnorderedListItem>
                    <Link href="https://opencatalogi.nl/">Huisstijl van gemeente Rotterdam voor OpenCatalogi.nl</Link>:
                    ontwikkeling van NL Design System thema zodat OpenCatalogi kan overstappen op NL Design System.
                  </UnorderedListItem>
                </UnorderedList>
              </section>
            </div>
          </div>
        </PageContent>
      </Page>
    </Document>
  ),
};

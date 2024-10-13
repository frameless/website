import { Card, CardGroup, Hero, Logo, Section } from '@frameless/components-react/src';
import { PageHeader } from '@frameless/components-react/src/PageHeader';
import { ButtonGroup, ButtonLink, Link, Page, Paragraph } from '@utrecht/component-library-react';
import Aanpak from './docs/aanpak.mdx';
import Contact from './docs/contact.mdx';
import Projecten from './docs/projecten.mdx';
import TechnischPartner from './docs/technisch-partner.mdx';
import AccessiblityPartner from './docs/toegankelijkheid/partner-in-toegankelijkheid.mdx';
import Toegankelijkheidsverklaring from './docs/toegankelijkheid/toegankelijkheidsverklaring.mdx';
import WCAGEend from './docs/toegankelijkheid/wcag-eend.mdx';
import { customComponents, mapHeadings, omitHeading1 } from '../../src/mdxUtils';

const HomePage = () => (
  <Page>
    <PageHeader Logo={<Logo />} />
    <Hero id="hero">
      <TechnischPartner components={mapHeadings(2, customComponents)} />
    </Hero>
    <Section appearance="alternate" id="aanpak">
      <Aanpak components={mapHeadings(2, customComponents)} />
      <ButtonGroup>
        <ButtonLink appearance="primary-action-button" href="#contact">
          Neem gelijk contact op
        </ButtonLink>
        <ButtonLink appearance="secondary-action-button" href="#voorbeelden">
          Bekijk voorbeelden van ons werk
        </ButtonLink>
      </ButtonGroup>
    </Section>
    <Section>
      <AccessiblityPartner components={mapHeadings(2, customComponents)} />
      <Paragraph>Als Frameless ondersteunen wij graag jouw organisatie bij:</Paragraph>
      <CardGroup>
        <Card headingLevel={3} heading="Het uitvoeren van een WCAG audit">
          <Toegankelijkheidsverklaring components={omitHeading1(mapHeadings(3, customComponents))} />
          <Paragraph>Een audit door ons laten doen?</Paragraph>
          <ButtonGroup>
            <ButtonLink href="https://forms.gle/gyKPd6Ha9Ng7C9s56" appearance="secondary-action-button" target="_blank">
              Vraag een offerte aan
            </ButtonLink>
          </ButtonGroup>
        </Card>
        <Card headingLevel={3} heading="Toegankelijkheid in onze eigen projecten">
          <WCAGEend components={omitHeading1(mapHeadings(3, customComponents))} />
        </Card>
      </CardGroup>
    </Section>
    <Section appearance="alternate">
      <Projecten components={omitHeading1(mapHeadings(2, customComponents))} />
      <Paragraph>Hieronder hebben we er een aantal voor je uitgelicht </Paragraph>
      <CardGroup>
        <Card headingLevel={3} heading="NL Design System">
          <Paragraph>
            Frameless heeft al aan meerdere white-label design systems mogen werken, zoals bijvoorbeeld voor{' '}
            <Link href="https://designsystem.backbase.com">Backbase</Link>
          </Paragraph>
          <Paragraph>
            Maar het meest trots zijn we natuurlijk op onze bijdrage aan{' '}
            <Link href="https://nldesignsystem.nl">NL Design System</Link> Waar Robbert en Yolijn als Product Manager en
            Design System lead samenwerken aan het mooiste design system van Nederland!
          </Paragraph>
        </Card>
        <Card headingLevel={3} heading="Headless CMS">
          <Paragraph>
            Afgelopen jaren heeft Frameless voor de gemeente Utrecht diverse projecten met Strapi ontwikkeld, waar
            inmiddels twee websites op draaien en één API: het Digitaal Loket, het VTH Programma-verslag en de
            Samenwerkende Catalogi API.
          </Paragraph>
          <Paragraph>
            Meer weten over dit CMS? <Link href="https://cms.frameless.io">https://cms.frameless.io</Link>
          </Paragraph>
        </Card>
      </CardGroup>
      <CardGroup>
        <Card headingLevel={3} heading="Utrecht Design System">
          <Paragraph>
            Meer dan 80 componenten ontwikkeld voor{' '}
            <Link href="https://nl-design-system.github.io/utrecht/storybook/">Utrecht Design System</Link> in
            verschillende technieken: als CSS, HTML, React, Angular, Vue en als Web Component.
          </Paragraph>
          <Paragraph>
            Deze componenten worden inmiddels ook veel gebruikt door uiteenlopende projecten in de NL Design System
            community.
          </Paragraph>
        </Card>
        <Card headingLevel={3} heading="Den Haag Design System">
          <Paragraph>
            Begeleiding van het
            <Link href="https://nl-design-system.github.io/denhaag/"> Den Haag Design System</Link> team en leveranciers
            met open source bouwen volgens de NL Design System architectuur.
          </Paragraph>
        </Card>
        <Card headingLevel={3} heading="Digitaal Loket van gemeente Utrecht">
          <Paragraph>
            Ontwikkeling van CMS voor de Producten en Diensten Catalogus, en de nieuwe website ontwikkelen als headless
            frontend op basis van NL Design System.
            <Link href="https://loket.digitaal.utrecht.nl/nl">Digitaal Loket van gemeente Utrecht</Link>.
          </Paragraph>
        </Card>
      </CardGroup>
      <details>
        <summary>Meer projecten</summary>
        <CardGroup>
          <Card headingLevel={3} heading="Website voor Veiligheid Toezicht en Handhaving">
            <Paragraph>
              De cijfers voor het jaarlijks verslag zijn nu voor iedereen beschikbaar op{' '}
              <Link href="https://vth-programma-verslag.digitaal.utrecht.nl/nl">
                https://vth-programma-verslag.digitaal.utrecht.nl
              </Link>
            </Paragraph>
            <Paragraph>
              Wij maakten hiervoor in samenwerking met de beleidsmedewerkers een uitbreiding op het CMS voor Producten
              en Diesten Catalogus en NL Design System.
            </Paragraph>
          </Card>
          <Card headingLevel={3} heading="Huwelijksplanner">
            <Paragraph>
              Front-end ontwikkeling voor de Huwelijksplanner CMS op basis van NL Design System componenten.
            </Paragraph>
          </Card>
          <Card headingLevel={3} heading="WMEBV Gebruikerstests">
            <Paragraph>
              <Link href="https://gemeentevoorbeeld.nl/">gemeente Voorbeeld</Link>: ontwikkeling van demo-website waar
              Vereniging van Nederlandse Gemeenten (VNG) gebruikerstesten doet, om gemeenten op weg te helpen met
              voldoen aan de&#160;
              <Link href="https://www.digitaleoverheid.nl/overzicht-van-alle-onderwerpen/wetgeving/wet-modernisering-elektronisch-bestuurlijk-verkeer/">
                WMEBV
              </Link>
              &#160;met NL Design System.
            </Paragraph>
          </Card>
          <Card headingLevel={3} heading="Rotterdam Design System">
            <Paragraph>
              We hebben voor gemeente Rotterdam een Proof-of-concept{' '}
              <Link href="https://nl-design-system.github.io/rotterdam/">Rotterdam Design System</Link> gemaakt.
              Daarnaast hebben we onderzocht op welke manier dit design system in het interessante Rotterdam ecosysteem
              met Mendix en Apache Wicket zou passen.
            </Paragraph>
          </Card>
          <Card headingLevel={3} heading="OpenCatelogi">
            <Paragraph>
              We hebben <Link href="https://opencatalogi.nl/">OpenCatalogi.nl</Link> gemigreerd naar React componenten
              uit de NL Design System community. De huisstijl keuzes van gemeente Rotterdam die hiervoor nodig waren
              hebben we als een NL Design System thema beschikbaar gemaakt.
            </Paragraph>
          </Card>
          {/* <Card headingLevel={3} heading="Wilbur voor Schiphol">
              <Paragraph>
                We hebben <Link href="https://opencatalogi.nl/">OpenCatalogi.nl</Link> gemigreerd naar React componenten
                uit de NL Design System community. De huisstijl keuzes van gemeente Rotterdam die hiervoor nodig waren
                hebben we als een NL Design System thema beschikbaar gemaakt.
              </Paragraph>
            </Card> */}
        </CardGroup>
      </details>
    </Section>
    <Section className="frameless-section__contact" id="contact">
      <Contact components={mapHeadings(2, customComponents)} />
    </Section>
  </Page>
);

export default HomePage;

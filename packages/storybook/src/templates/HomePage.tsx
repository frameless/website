import { Card, CardGroup, Hero, Logo, Section } from '@frameless/components-react/src';
import { PageContent } from '@frameless/components-react/src/PageContent';
import { Heading3, Heading4, Image } from '@utrecht/component-library-react';
import { Document, Heading2, Link, Paragraph } from '@utrecht/component-library-react/dist/css-module';
import clsx from 'clsx';

interface HomePageProps {
  darkMode?: boolean;
}
export const HomePage = ({ darkMode }: HomePageProps) => (
  <Document className={clsx('utrecht-document--surface', darkMode && 'frameless-theme--dark')}>
    <PageContent>
      <Logo />
    </PageContent>
    <Hero>
      <Heading2>Frameless bouwt toegankelijke oplossingen.</Heading2>
      <Paragraph lead>Van proof-of-concept via gebruikersonderzoek tot toegankelijk in productie.</Paragraph>
    </Hero>
    <Section appearance="alternate">
      <Heading2>Wij werken aan</Heading2>
      <CardGroup>
        <Card headingLevel={3} heading="Design Systems">
          <Paragraph>
            Herbruikbare componenten onafhankelijk van huisstijl, daar mag je ons voor wakker maken!
          </Paragraph>
          <Paragraph>
            Frameless heeft al aan meerdere white-label design systems mogen werken, zoals bijvoorbeeld voor{' '}
            <Link href="https://designsystem.backbase.com">Backbase</Link>
          </Paragraph>
          <Paragraph>
            En natuurlijk zijn we trots op onze bijdrage aan{' '}
            <Link href="https://nldesignsystem.nl">NL Design System</Link>
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
    </Section>
    <Section>
      <Heading2>Toegankelijkheid</Heading2>
      <Paragraph>
        Wij helpen graag als technisch partner bij het bouwen van snelle, flexibele, gebruiksvriendelijke web
        applicaties.
      </Paragraph>
      <Paragraph>
        Natuurlijk zijn deze ook toegankelijk! Wij zorgen we dat het voldoet aan de WCAG2.1 norm en gebruiken tijdens
        het ontwikkelen de <Link href="https://nldesignsystem.nl/richtlijnen">richtlijnen van NL Design System</Link> om
        ook aan best-practices te voldoen!
      </Paragraph>
      <CardGroup>
        <Card headingLevel={3} heading="WCAG audit">
          <Paragraph>
            Onderzoek doen naar de toegankelijkheid van je website is nodig, maar niet altijd makkelijk. Wij hebben de
            expertise in huis voor het doen van audits en het opleveren van een toegankelijkheidsverklaring.
          </Paragraph>
          <Paragraph>
            We maken een onderzoeksrapport met de gevonden problemen en verwijzen we naar{' '}
            <Link href="https://nldesignsystem.nl/wcag/">de WCAG paginas van NL Design System</Link> die helpen met het
            zelf testen en oplossen van de problemen.
          </Paragraph>
          <Paragraph>
            Een audit door ons laten doen? Stuur een mailtje naar{' '}
            <Link href="mailto:hello@frameless.io">hello@frameless.io</Link>, dan helpen we jullie graag!
          </Paragraph>
        </Card>
        <Card headingLevel={3} heading="Eigen projecten">
          <Paragraph>
            Wanneer wij een project voor je doen willen we natuurlijk dat hij voor alle gebruikers goed werkt. Daarom
            doen we standaard een onderzoek doen volgens de WCAG-EM methode van het W3C. Het onderzoeksrapport is bij
            ons onderdeel van de opdracht en wanneer je dat wil maken we er ook gewoon gelijk een
            toegankelijkheidsverklaring van.
          </Paragraph>
          <Heading4>Mogen wij van WCAG-eend dat wel doen?</Heading4>
          <Paragraph>
            Volgens{' '}
            <Link href="https://www.digitoegankelijk.nl/toegankelijkheidsverklaring/onderzoek#zelf">
              DigiToeganklijk
            </Link>{' '}
            wel, wij hebben de technische kennis, alle benodigde documentatie en het gereedschap in huis!
          </Paragraph>
        </Card>
      </CardGroup>
    </Section>
    <Section appearance="alternate">
      <Heading2>NL Design System</Heading2>
      <Paragraph lead>
        We gebruiken graag <Link href="https://nldesignsystem.nl">NL Design System</Link> om goede gebruikerervaringen
        en bouwen.
      </Paragraph>
      <Paragraph>
        We helpen graag met een CMS voor de redactie, een eigen design system op basis van NL Design System met goede
        documentatie voor developers en met het onwikkelen van NL Design System themas voor organisaties die nog niet
        mee doen.
      </Paragraph>
      <CardGroup>
        <Card headingLevel={3} heading="Kernteam">
          <Paragraph>
            Yolijn en Robbert zijn sinds 2020 verantwoordelijk voor de architectuur, community en groei van{' '}
            <Link href="https://nldesignsystem.nl/">NL Design System</Link>.
          </Paragraph>
        </Card>
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
        <summary>Meer projecten met NL Design System</summary>
        <CardGroup>
          <Card headingLevel={3} heading="Website voor Veiligheid Toezicht en Handhaving">
            <Paragraph>
              De cijfers voor het jaarlijks verslag zijn nu voor iedereen beschikbaar op{' '}
              <Link href="https://vth-programma-verslag.digitaal.utrecht.nl/nl">
                https://vth-programma-verslag.digitaal.utrecht.nl
              </Link>{' '}
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
        </CardGroup>
      </details>
    </Section>
    <Section className="frameless-section__contact">
      <Heading2>Kennis maken?</Heading2>
      <Image
        loading="lazy"
        src="https://raw.githubusercontent.com/frameless/website/assets/weverssingel-2.webp"
        alt="Schets van het oude pand aan de weverssingel, met een groot raam beneden"
        height="640"
        width="426"
      />
      <Heading3>Kom een keer (digitaal) langs!</Heading3>
      <Paragraph>
        Ons kantoor zit op Weverssingel 28 in het pittoreske centrum van Amersfoort, maar we werken meestal online! Het
        team van Frameless werkt namelijk graag vanuit huis, dus of we nou in Enschede, Portugal of Polen zitten, online
        kan iedereen aansluiten.
      </Paragraph>
      <Paragraph>
        Mail ons op <Link href="mailto:hello@frameless.io">hello@frameless.io</Link>, dan spreken we snel een keer af!
      </Paragraph>
    </Section>
    {/* <Section appearance="alternate">
      <Heading2>Team</Heading2>
    </Section> */}
  </Document>
);

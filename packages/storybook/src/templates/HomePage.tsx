import { Card, CardGroup, Hero, Logo, Section } from '@frameless/components-react/src';
import { PageHeader } from '@frameless/components-react/src/PageHeader';
import { Heading3, Heading4, Image } from '@utrecht/component-library-react';
import {
  ButtonGroup,
  ButtonLink,
  Document,
  Heading2,
  Link,
  Page,
  Paragraph,
  UnorderedList,
  UnorderedListItem,
} from '@utrecht/component-library-react/dist/css-module';
import clsx from 'clsx';
import { AccessiblityPartner } from './illustrations/AccesibilityPartner';
import { Coffee } from './illustrations/Coffee';
import { TechnicalPartner } from './illustrations/TechnicalPartner';

interface HomePageProps {
  colorScheme?: 'dark' | 'light';
}
export const HomePage = ({ colorScheme }: HomePageProps) => (
  <Document
    className={clsx('utrecht-document--surface', {
      'frameless-theme--dark': colorScheme === 'dark',
      'frameless-theme--light': colorScheme === 'light',
      'frameless-theme--media-query': !colorScheme,
    })}
  >
    <Page>
      <PageHeader Logo={<Logo />} />
      <Hero>
        <Heading2 id="hero">Technisch partner voor toegankelijke, gebruiksvriendelijke webapplicaties.</Heading2>
        <Paragraph lead>
          Frameless ontzorgt bij implementatie, beheer, ondersteuning en toegankelijkheid. We werken Agile en zijn
          ervaren in transitie van bestaande systemen naar gebruiksvriendelijke, onderhoudbare oplossingen volgens de
          Common Ground principes.
        </Paragraph>
        <TechnicalPartner className="frameless-illustration" />
        <UnorderedList>
          <UnorderedListItem>Gebruiksvriendelijkheid voorop, voor eindgebruikers én redactie.</UnorderedListItem>
          <UnorderedListItem>Expertise in bouwen en onderhouden van robuuste webapplicaties.</UnorderedListItem>
          <UnorderedListItem>WCAG-EM audits en hulp bij het oplossen van toegankelijkheidsproblemen.</UnorderedListItem>
        </UnorderedList>
        <Link href="#aanpak">Lees meer over de Frameless aanpak</Link>
      </Hero>
      <Section appearance="alternate">
        <Heading2 id="aanpak">Hulp nodig?</Heading2>
        <Paragraph lead>
          Sta je voor een technische of organistorische uitdaging? Na een goede kop koffie zijn wij een ideale
          sparringspartner!
        </Paragraph>
        <Coffee className="frameless-illustration frameless-illustration--backdrop" />
        <Paragraph>
          Tijdens een kennismaking bespreken we waar jullie mee bezig zijn, en bekijken we op welke manier Frameless of
          ons netwerk kunnen helpen.
        </Paragraph>
        <Heading3>Plan van aanpak</Heading3>
        <Paragraph>
          We onderzoeken welke oplossingen, technieken en expertise er in de organisatie aanwezig is om daarna met een
          plan van aanpak te komen voor migratie of vernieuwing. Dat doen we graag samen met betrokken expertise uit de
          organisatie én andere leveranciers.
        </Paragraph>
        <Heading3>Ontzorgen bij uitvoering</Heading3>
        <Paragraph>
          We helpen graag bij het aansturen van leveranciers of teams bij het uitvoeren of aansturen en zorgen dat het
          in de organisatie ingebed wordt. Daarnaast hebben we zelf mensen in dienst en experts in ons netwerk die de
          opdracht desgewenst kunnen uitvoeren en het eindresultaat op toegankelijkheid kunnen toetsen.
        </Paragraph>
        <Heading3>Efficiënt en herkenbaar</Heading3>
        <Paragraph>
          We zorgen dat de oplossing aansluit bij bestaande oplossingen, en doen ons best om dubbel werk te voorkomen.
          Met gebruik van de NL Design System aanpak zorgen we dat we hergebruiken waar mogelijk en voeren we
          verbeteringen door op een manier dat ook anderen er gebruik van kunnen maken.
        </Paragraph>

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
        <Heading2 id="audits">Partner in toegankelijkheid</Heading2>
        <Paragraph>
          Met de komst van de European Accessibility Act wordt het toegankelijk maken van een website of webapplicatie
          nóg belangrijker. Momenteel is digitale toegankelijkheid al verplicht voor overheidsorganisaties, maar in 2025
          wordt dit ook verplicht voor alle andere bedrijven.
        </Paragraph>
        <Paragraph>
          Benieuwd hoe je ervoor staat, of hulp nodig om WCAG-complient te worden? Frameless kan WCAG-EM audits
          uitvoeren, tips geven en meehelpen bij het verbeteren van de gevonden problemen en na een aantal maanden een
          hertest doen. Zo ben je er helemaal klaar voor!
        </Paragraph>
        <AccessiblityPartner className="frameless-illustration" />
        <Paragraph>Als Frameless ondersteunen wij graag jouw organisatie bij:</Paragraph>
        <CardGroup>
          <Card headingLevel={3} heading="WCAG audit">
            <Paragraph>
              Onderzoek doen naar de toegankelijkheid van je website is nodig, maar niet altijd makkelijk. Wij hebben de
              expertise in huis voor het doen van audits en het opleveren van een toegankelijkheidsverklaring.
            </Paragraph>
            <Paragraph>
              We maken een onderzoeksrapport met de gevonden problemen en verwijzen naar{' '}
              <Link href="https://nldesignsystem.nl/wcag/">de WCAG paginas van NL Design System</Link> die helpen met
              het zelf testen en oplossen van de problemen.
            </Paragraph>
            <Paragraph>Een audit door ons laten doen?</Paragraph>
            <ButtonGroup>
              <ButtonLink
                href="https://forms.gle/gyKPd6Ha9Ng7C9s56"
                appearance="secondary-action-button"
                target="_blank"
              >
                Vraag een offerte aan
              </ButtonLink>
            </ButtonGroup>
          </Card>
          <Card headingLevel={3} heading="Eigen projecten">
            <Paragraph>
              Wanneer wij een project voor je doen willen we natuurlijk dat hij voor alle gebruikers goed werkt. Daarom
              doen we standaard een onderzoek volgens de WCAG-EM methode van het W3C. Het onderzoeksrapport is bij ons
              onderdeel van de opdracht en wanneer je dat wil maken we er ook gewoon gelijk een
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
        <Heading2 id="voorbeelden">Wij werken aan</Heading2>
        <Paragraph lead>
          Herbruikbare componenten onafhankelijk van huisstijl, met een Headless CMS en slimme API&apos;s, daar mag je
          ons voor wakker maken!
        </Paragraph>
        <Paragraph>
          Sinds de oprichting van Frameless in 2013 hebben we diverse opdrachten mogen doen, de ene nog leuker en
          ingewikkelder dan de ander. Hieronder hebben we er een aantal voor je uitgelicht{' '}
        </Paragraph>
        <CardGroup>
          <Card headingLevel={3} heading="NL Design System">
            <Paragraph>
              Frameless heeft al aan meerdere white-label design systems mogen werken, zoals bijvoorbeeld voor{' '}
              <Link href="https://designsystem.backbase.com">Backbase</Link>
            </Paragraph>
            <Paragraph>
              Maar het meest trots zijn we natuurlijk op onze bijdrage aan{' '}
              <Link href="https://nldesignsystem.nl">NL Design System</Link> Waar Robbert en Yolijn als Product Manager
              en Design System lead samenwerken aan het mooiste design system van Nederland!
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
              <Link href="https://nl-design-system.github.io/denhaag/"> Den Haag Design System</Link> team en
              leveranciers met open source bouwen volgens de NL Design System architectuur.
            </Paragraph>
          </Card>
          <Card headingLevel={3} heading="Digitaal Loket van gemeente Utrecht">
            <Paragraph>
              Ontwikkeling van CMS voor de Producten en Diensten Catalogus, en de nieuwe website ontwikkelen als
              headless frontend op basis van NL Design System.
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
                Daarnaast hebben we onderzocht op welke manier dit design system in het interessante Rotterdam
                ecosysteem met Mendix en Apache Wicket zou passen.
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
      <Section className="frameless-section__contact">
        <Heading2 id="contact">Kennis maken?</Heading2>
        <Image
          loading="lazy"
          src="https://raw.githubusercontent.com/frameless/website/assets/weverssingel-2.webp"
          alt="Schets van het oude pand aan de weverssingel, met een groot raam beneden"
          height="640"
          width="426"
        />
        <Heading3>Kom een keer (digitaal) langs!</Heading3>
        <Paragraph>
          Ons kantoor zit op Weverssingel 28 in het pittoreske centrum van Amersfoort, maar we werken meestal online!
          Het team van Frameless werkt namelijk graag vanuit huis, dus of we nou in Enschede, Portugal of Polen zitten,
          online kan iedereen aansluiten.
        </Paragraph>
        <Paragraph>
          Mail ons op <Link href="mailto:hello@frameless.io">hello@frameless.io</Link>, dan spreken we snel een keer af!
        </Paragraph>
      </Section>
    </Page>
  </Document>
);

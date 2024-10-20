import { Figure, FigureCaption, FigureProps, Image } from '@utrecht/component-library-react';

export const TechnicalPartner = (props: FigureProps) => {
  const labelId = '09u2309rejf';
  const descriptionId = 'kjdqwmednas';
  return (
    <Figure {...props}>
      <Image
        loading="lazy"
        src="/svg/technical-partner.svg"
        aria-labelledby={labelId}
        aria-describedby={descriptionId}
      />
      <FigureCaption id={labelId} hidden>
        Speelse schets van twee mensen die samenwerken
      </FigureCaption>
      <p id={descriptionId} hidden>
        Illustratie in de huisstijlkleuren van Frameless. Links staat vrouw met plannen onder haar arm, licht haar in
        een paardenstaart en een blije uitdrukking. Rechts staat een man met donker haar en een snor. Hij heeft een
        laptop in zijn hand met het icoon van een peer erop. Hij draagt een gestippelde grote trui en driekwartbroek. Op
        de achtergrond zie je decoratieve golven.
      </p>
    </Figure>
  );
};

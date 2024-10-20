import { Figure, FigureCaption, FigureProps, Image } from '@utrecht/component-library-react';

export const ImplementationPartner = (props: FigureProps) => {
  const labelId = 'oisdfhsdjfkwqsnd';
  const descriptionId = '12ukebaksjd4jd';
  return (
    <Figure {...props}>
      <Image
        loading="lazy"
        src="/svg/implementation-partner.svg"
        aria-labelledby={labelId}
        aria-describedby={descriptionId}
      />
      <FigureCaption id={labelId} hidden>
        Speelse schets van een vrouw met haar telefoon in de hand achter een bureau.
      </FigureCaption>
      <p id={descriptionId} hidden>
        Illustratie in de huisstijlkleuren van Frameless. Links zit een vrouw met kort zwart haar en een oorbel in, ze
        heeft een pluizige trui aan. Ze zit op een comfortabele bureaustoel met wielen en steekt haar benen voor zich
        uit. Rechts staat haar bueau met een beeldscherm, glas water en een vaas met bloemen. Boven het bureau hangt een
        ronde transparante lamp met een zichtbaar peertje erin.
      </p>
    </Figure>
  );
};

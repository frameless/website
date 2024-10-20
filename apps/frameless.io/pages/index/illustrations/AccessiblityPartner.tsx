import { Figure, FigureCaption, FigureProps, Image } from '@utrecht/component-library-react';

export const AccessiblityPartner = (props: FigureProps) => {
  const labelId = '49skj12kdnmf';
  const descriptionId = '043o23jenflskdqasld';

  return (
    <Figure {...props}>
      <Image
        loading="lazy"
        src="/svg/accessibility-partner.svg"
        aria-labelledby={labelId}
        aria-describedby={descriptionId}
      />
      <FigureCaption hidden id={labelId}>
        Speelse schets van een vrouw die met vergrootglas naar een webpagina kijkt
      </FigureCaption>
      <p hidden id={descriptionId}>
        Illustratie in de huisstijlkleuren van Frameless. Links staat een vrouw met zwart lang haar met een knot
        bovenop, sportief gekleed in een t-shirt en korte broek. Rechts staan 2 frames alsof het een webpagina is en een
        code blokje. In de achtergrond decoratieve golven.
      </p>
    </Figure>
  );
};

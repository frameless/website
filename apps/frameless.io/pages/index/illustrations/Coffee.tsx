import { Figure, FigureCaption, FigureProps, Image } from '@utrecht/component-library-react';

export const Coffee = (props: FigureProps) => {
  const labelId = '0934wdfhksfjsas';
  const descriptionId = 'lhjeroqawpodfg12';

  return (
    <Figure {...props}>
      <Image loading="lazy" src="/svg/coffee.svg" aria-labelledby={labelId} aria-describedby={descriptionId} />
      <FigureCaption id={labelId} hidden>
        Speelse schets van een man met een enorme kop koffie
      </FigureCaption>
      <p id={descriptionId} hidden>
        Illustratie in de huisstijlkleuren van Frameless. De man kijkt gelukzalig terwijl hij achterover leunt van de
        enorme bak koffie die groter is dan hij. De koffie klotst over de rand en de man steekt zijn linker been uit
        alsof hij zijn balans bijna niet kan houden.
      </p>
    </Figure>
  );
};

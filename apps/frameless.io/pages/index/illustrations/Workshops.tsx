import { Figure, FigureCaption, FigureProps, Image } from '@utrecht/component-library-react';

export const Workshops = (props: FigureProps) => {
  const labelId = 'zkjd23euhakds';
  const descriptionId = '091ue0dakj';

  return (
    <Figure {...props}>
      <Image loading="lazy" src="/svg/workshops.svg" aria-labelledby={labelId} aria-describedby={descriptionId} />
      <FigureCaption id={labelId} hidden>
        Speelse schets van een vrouw met allemaal spraakbubbels en vraagtekens.
      </FigureCaption>
      <p id={descriptionId} hidden>
        Illustratie in de huisstijlkleuren van Frameless. In het midden staat vrouw met een ronde bril, blouse met korte
        mouwen en broek met een strepenprint. Ze maakt een dansende beweging en staat tussen vraagtekens en lege
        spraakbubbels.
      </p>
    </Figure>
  );
};

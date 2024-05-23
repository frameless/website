// export const Card = () => (
//   <section className="frameless-card-section">
//     <div className="frameless-card-group">
//       <div className="frameless-card"></div>
//     </div>
//   </section>
// );

import clsx from 'clsx';
import { HTMLAttributes, PropsWithChildren } from 'react';
import '@frameless/components-css/card/index.scss';

// ensures that this component is flexible, can accept standard HTML attributes, and conditionally applies styles based on the background prop.
interface CardIllustrationProps extends HTMLAttributes<HTMLElement> {
  background?: boolean;
}

export const CardIllustrations = ({
  background,
  children,
  className,
  ...restProps
}: PropsWithChildren<CardIllustrationProps>) => (
  <div
    {...restProps}
    className={clsx(['frameless-card-test'], background, ['card__illustration--background'], className)}
  >
    {children}
  </div>
);

export const CardContent = (props: PropsWithChildren<HTMLAttributes<HTMLElement>>) => (
  <div className={clsx(['frameless-card-content'])} {...props} />
);

import { Heading } from '@utrecht/component-library-react';
import clsx from 'clsx';
import { HTMLAttributes, PropsWithChildren, ReactNode } from 'react';
import '@frameless/components-css/card/index.scss';

interface CardProps extends HTMLAttributes<HTMLElement> {
  heading?: string;
  headingLevel?: number;
  illustration?: ReactNode;
}

export const Card = ({
  children,
  heading,
  headingLevel = 2,
  className,
  illustration,
  ...restProps
}: PropsWithChildren<CardProps>) => (
  <div {...restProps} className={clsx('frameless-card', className)}>
    {illustration && <div className="frameless-card__illustration">{illustration}</div>}
    <div className="frameless-card__content">
      {heading && (
        <Heading className="frameless-card__heading" level={headingLevel}>
          {heading}
        </Heading>
      )}
      {children}
    </div>
  </div>
);

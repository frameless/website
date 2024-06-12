import { Heading } from '@utrecht/component-library-react';
import clsx from 'clsx';
import { HTMLAttributes, PropsWithChildren } from 'react';
import '@frameless/components-css/card/index.scss';

interface CardProps extends HTMLAttributes<HTMLElement> {
  heading?: string;
  headingLevel?: number;
}

export const Card = ({
  children,
  heading,
  headingLevel = 2,
  className,
  ...restProps
}: PropsWithChildren<CardProps>) => (
  <div {...restProps} className={clsx('frameless-card', className)}>
    {heading && (
      <Heading className="frameless-card__heading" level={headingLevel}>
        {heading}
      </Heading>
    )}
    <div className="frameless-card__content">{children}</div>
  </div>
);

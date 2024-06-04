import clsx from 'clsx';
import { HTMLAttributes, PropsWithChildren } from 'react';
import '@frameless/components-css/card/index.scss';

// ensures that this component is flexible, can accept standard HTML attributes, and conditionally applies styles based on the background prop.
type CardProps = HTMLAttributes<HTMLElement>;

export const Card = ({ children, className, ...restProps }: PropsWithChildren<CardProps>) => (
  <div {...restProps} className={clsx('frameless-card', className)}>
    {children}
  </div>
);

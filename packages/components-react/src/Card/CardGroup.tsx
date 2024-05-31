import clsx from 'clsx';
import { forwardRef, HTMLAttributes, PropsWithChildren } from 'react';

export type CardGroupProps = HTMLAttributes<HTMLElement>;

export const CardGroup = forwardRef(({ children, className, ...restProps }: PropsWithChildren<CardGroupProps>) => (
  <div {...restProps} className={clsx('frameless-card-group', className)}>
    {children}
  </div>
));

CardGroup.displayName = 'CardGroup';

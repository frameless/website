import clsx from 'clsx';
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react';
import '@frameless/components-css/card-group/index.scss';

export type CardGroupProps = HTMLAttributes<HTMLDivElement>;

export const CardGroup = forwardRef(
  ({ children, className, ...restProps }: PropsWithChildren<CardGroupProps>, ref: ForwardedRef<HTMLDivElement>) => (
    <div {...restProps} ref={ref} className={clsx('frameless-card-group', className)}>
      {children}
    </div>
  ),
);

CardGroup.displayName = 'CardGroup';

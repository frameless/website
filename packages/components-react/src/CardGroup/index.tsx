import clsx from 'clsx';
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react';

export type CardGroupProps = HTMLAttributes<HTMLDivElement>;

export const CardGroup = forwardRef(
  ({ children, className, ...restProps }: PropsWithChildren<CardGroupProps>, ref: ForwardedRef<HTMLDivElement>) => (
    <div className="frameless-card-group__container">
      <div {...restProps} ref={ref} className={clsx('frameless-card-group', className)}>
        {children}
      </div>
    </div>
  ),
);

CardGroup.displayName = 'CardGroup';

import clsx from 'clsx';
import { HTMLAttributes } from 'react';

export type LogoWrapperProps = HTMLAttributes<HTMLDivElement>;
export const LogoWrapper = ({ className, children, ...restProps }: LogoWrapperProps) => (
  <div {...restProps} className={clsx('frameless-logo__wrapper', className)}>
    {children}
  </div>
);

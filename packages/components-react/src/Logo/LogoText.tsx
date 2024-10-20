import clsx from 'clsx';
import { HTMLAttributes } from 'react';

export type LogoTextProps = HTMLAttributes<HTMLHeadingElement>;
export const LogoText = ({ className, children, ...restProps }: LogoTextProps) => (
  <h1 {...restProps} className={clsx('frameless-logo__text', className)}>
    {children}
  </h1>
);

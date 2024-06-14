import clsx from 'clsx';
import { HTMLAttributes } from 'react';

// Include CSS for logo as a package deal. FIXME: move this to a separate `css-module` option like Utrecht
import '@frameless/components-css/logo/index.scss';

export type LogoTextProps = HTMLAttributes<HTMLHeadingElement>;
export const LogoText = ({ className, children, ...restProps }: LogoTextProps) => (
  <h1 {...restProps} className={clsx('frameless-logo__text', className)}>
    {children}
  </h1>
);

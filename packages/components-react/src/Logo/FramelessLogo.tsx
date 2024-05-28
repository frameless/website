import clsx from 'clsx';
import { HTMLAttributes } from 'react';

// Include CSS for logo as a package deal. FIXME: move this to a separate `css-module` option like Utrecht
import '@frameless/components-css/logo/index.scss';

export type FramelessLogoProps = HTMLAttributes<HTMLDivElement>;
export const FramelessLogo = ({ className, children, ...restProps }: FramelessLogoProps) => (
  <div {...restProps} className={clsx('frameless-logo', className)}>
    {children}
  </div>
);

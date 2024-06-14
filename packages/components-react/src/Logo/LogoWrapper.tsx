import clsx from 'clsx';
import { HTMLAttributes } from 'react';

// Include CSS for logo as a package deal. FIXME: move this to a separate `css-module` option like Utrecht
import '@frameless/components-css/logo/index.scss';

export type LogoWrapperProps = HTMLAttributes<HTMLDivElement>;
export const LogoWrapper = ({ className, children, ...restProps }: LogoWrapperProps) => (
  <div {...restProps} className={clsx('frameless-logo__wrapper', className)}>
    {children}
  </div>
);

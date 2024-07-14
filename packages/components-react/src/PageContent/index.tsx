import clsx from 'clsx';
import { HTMLAttributes, PropsWithChildren } from 'react';
import '@frameless/components-css/page-content/index.scss';

interface PageContentProps extends HTMLAttributes<HTMLElement> {
  heading?: string;
  headingLevel?: number;
}

export const PageContent = ({ children, className, ...restProps }: PropsWithChildren<PageContentProps>) => (
  <div {...restProps} className={clsx('frameless-page-content', className)}>
    {children}
  </div>
);

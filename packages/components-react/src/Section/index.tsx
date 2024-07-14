import clsx from 'clsx';
import { HTMLAttributes, PropsWithChildren } from 'react';
import '@frameless/components-css/section/index.scss';
import { PageContent } from '../PageContent';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  appearance?: string;
}

export const Section = ({ children, className, appearance, ...restProps }: PropsWithChildren<SectionProps>) => (
  <div
    {...restProps}
    className={clsx('frameless-section', appearance && `frameless-section--${appearance}`, className)}
  >
    <PageContent>{children}</PageContent>
  </div>
);

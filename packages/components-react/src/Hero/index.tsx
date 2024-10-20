import clsx from 'clsx';
import { HTMLAttributes, PropsWithChildren } from 'react';
import { PageContent } from '../PageContent';

interface HeroProps extends HTMLAttributes<HTMLDivElement> {}

export const Hero = ({ children, className, ...restProps }: PropsWithChildren<HeroProps>) => (
  <div {...restProps} className={clsx('frameless-hero', className)}>
    <PageContent>
      <div className={clsx('frameless-hero__content')}>{children}</div>
    </PageContent>
  </div>
);

import { NavBar, NavListLink, PageHeader as UtrechtPageHeader } from '@utrecht/component-library-react/dist/css-module';
import { UtrechtFlexWrapFallback } from '@utrecht/web-component-library-react';
import clsx from 'clsx';
import { HTMLAttributes, ReactNode } from 'react';
import { MobileMenu } from '../MobileMenu';
import { PageContent } from '../PageContent';
import '@frameless/components-css/page-header/index.scss';

interface PageHeaderProps extends HTMLAttributes<HTMLElement> {
  heading?: string;
  headingLevel?: number;
  Logo: ReactNode;
}

export const PageHeader = ({ Logo, className, ...restProps }: PageHeaderProps) => (
  <UtrechtPageHeader {...restProps} className={clsx('frameless-page-header', className)}>
    <PageContent>
      <div className="frameless-page-header__container">
        {Logo}
        <UtrechtFlexWrapFallback flexTarget="nav-list">
          <NavBar appearance="center">
            <ul role="list" className="utrecht-nav-list" id="nav-list">
              <NavListLink href="#aanpak">Aanpak</NavListLink>
              <NavListLink href="#audits">WCAG Audits</NavListLink>
              <NavListLink href="#voorbeelden">Voorbeelden</NavListLink>
              <NavListLink href="#contact">Contact</NavListLink>
            </ul>
          </NavBar>
          <MobileMenu slot="fallback" />
        </UtrechtFlexWrapFallback>
      </div>
    </PageContent>
  </UtrechtPageHeader>
);

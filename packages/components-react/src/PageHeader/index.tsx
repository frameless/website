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
  menuItems?: { label: string; href: string }[];
}

export const PageHeader = ({ Logo, className, menuItems = [], ...restProps }: PageHeaderProps) => {
  return (
    <UtrechtPageHeader {...restProps} className={clsx('frameless-page-header', className)}>
      <PageContent>
        <div className="frameless-page-header__container">
          {Logo}
          {menuItems.length && (
            <UtrechtFlexWrapFallback flexTarget="nav-list">
              <NavBar appearance="center">
                <ul role="list" className="utrecht-nav-list" id="nav-list">
                  {menuItems.map(({ label, href }) => (
                    <NavListLink href={href} key={href}>
                      {label}
                    </NavListLink>
                  ))}
                </ul>
              </NavBar>
              <MobileMenu slot="fallback" menuItems={menuItems} />
            </UtrechtFlexWrapFallback>
          )}
        </div>
      </PageContent>
    </UtrechtPageHeader>
  );
};

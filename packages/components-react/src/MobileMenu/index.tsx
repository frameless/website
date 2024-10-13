import {
  Button,
  Drawer,
  Link,
  UnorderedList,
  UnorderedListItem,
} from '@utrecht/component-library-react/dist/css-module';
import { UtrechtIconClose, UtrechtIconHamburgerMenu } from '@utrecht/web-component-library-react';
import clsx from 'clsx';
import { HTMLAttributes, useState } from 'react';
import '@frameless/components-css/mobile-menu/index.scss';

interface MobileMenuProps extends HTMLAttributes<HTMLDivElement> {
  menuItems?: { label: string; href: string }[];
}

export const MobileMenu = ({ className, menuItems = [], ...restProps }: MobileMenuProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={clsx(className, 'frameless-mobile-menu')} {...restProps}>
      <Button onClick={() => setOpen(true)} aria-label="Open menu">
        <UtrechtIconHamburgerMenu />
      </Button>
      <Drawer open={open} align="inline-end">
        <Button type="submit" aria-label="Sluit menu" onClick={() => setOpen(false)}>
          <UtrechtIconClose />
        </Button>
        {menuItems.length && (
          <nav className="frameless-mobile-menu__nav">
            <UnorderedList className="frameless-mobile-menu__nav-list">
              {menuItems.map(({ label, href }) => (
                <UnorderedListItem className="frameless-mobile-menu__nav-list-item">
                  <Link href={href}>{label}</Link>
                </UnorderedListItem>
              ))}
            </UnorderedList>
          </nav>
        )}
      </Drawer>
    </div>
  );
};

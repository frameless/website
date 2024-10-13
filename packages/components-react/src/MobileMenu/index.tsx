import {
  Backdrop,
  Button,
  Drawer,
  Link,
  UnorderedList,
  UnorderedListItem,
} from '@utrecht/component-library-react/dist/css-module';
import { UtrechtIconClose, UtrechtIconHamburgerMenu, UtrechtSidenav } from '@utrecht/web-component-library-react';
import clsx from 'clsx';
import { HTMLAttributes, useState } from 'react';
import '@frameless/components-css/mobile-menu/index.scss';

export const MobileMenu = ({ className, ...restProps }: HTMLAttributes<HTMLDivElement>) => {
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
        <UtrechtSidenav>
          <UnorderedList>
            <UnorderedListItem>
              <Link href="/aanpak">Aanpak</Link>
            </UnorderedListItem>
            <UnorderedListItem>
              <Link href="/voorbeelden">Voorbeelden</Link>
            </UnorderedListItem>
            <UnorderedListItem>
              <Link href="/contact">Contact</Link>
            </UnorderedListItem>
          </UnorderedList>
        </UtrechtSidenav>
      </Drawer>
      {open && <Backdrop />}
    </div>
  );
};

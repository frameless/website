import { Sidenav, SidenavItem, SidenavLink, SidenavList } from '@gemeente-denhaag/sidenav';
import { Backdrop, Button, Drawer } from '@utrecht/component-library-react/dist/css-module';
import { UtrechtIconClose, UtrechtIconHamburgerMenu } from '@utrecht/web-component-library-react';
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
        <Sidenav>
          <SidenavList>
            <SidenavItem>
              <SidenavLink href="/aanpak">Aanpak</SidenavLink>
            </SidenavItem>
            <SidenavItem>
              <SidenavLink href="/voorbeelden">Voorbeelden</SidenavLink>
            </SidenavItem>
            <SidenavItem>
              <SidenavLink href="/contact">Contact</SidenavLink>
            </SidenavItem>
          </SidenavList>
        </Sidenav>
      </Drawer>
      {open && <Backdrop />}
    </div>
  );
};

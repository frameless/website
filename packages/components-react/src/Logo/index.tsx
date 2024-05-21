// Logo component is imported from Utrecht, LogoImage and LogoText are Frameless components

import { Logo as UtrechtLogo } from '@utrecht/component-library-react';
import { LogoImage } from './LogoImage';
import { LogoText } from './LogoText';

export const Logo = () => (
  <UtrechtLogo className="frameless-logo">
    <LogoImage />
    <LogoText>Frameless</LogoText>
  </UtrechtLogo>
);

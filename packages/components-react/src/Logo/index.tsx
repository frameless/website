// Logo component is imported from Utrecht, LogoImage and LogoText are Frameless components

import { Logo as UtrechtLogo } from '@utrecht/component-library-react';
import { FramelessLogo } from './FramelessLogo';
import { LogoImage } from './LogoImage';
import { LogoText } from './LogoText';

export const Logo = () => (
  <FramelessLogo className="frameless-logo">
    <UtrechtLogo>
      <LogoImage />
    </UtrechtLogo>
    <LogoText>Frameless</LogoText>
  </FramelessLogo>
);

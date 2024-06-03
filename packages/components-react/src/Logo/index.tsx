// Logo component is imported from Utrecht
// LogoImage, LogoText and LogoWrapper are Frameless components

import { Logo as UtrechtLogo } from '@utrecht/component-library-react/dist/css-module';
import { LogoImage } from './LogoImage';
import { LogoText } from './LogoText';
import { LogoWrapper } from './LogoWrapper';

export const Logo = () => (
  <LogoWrapper className="frameless-logo__wrapper">
    <UtrechtLogo>
      <LogoImage />
    </UtrechtLogo>
    <LogoText>Frameless</LogoText>
  </LogoWrapper>
);

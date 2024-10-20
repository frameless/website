// Logo component is imported from Utrecht
// LogoImage, LogoText and LogoWrapper are Frameless components

import { Logo as UtrechtLogo } from '@utrecht/component-library-react';
import { HTMLAttributes } from 'react';
import { LogoImage } from './LogoImage';
import { LogoText } from './LogoText';
import { LogoWrapper } from './LogoWrapper';

type LogoProps = HTMLAttributes<HTMLDivElement>;
export const Logo = ({ className }: LogoProps) => (
  <LogoWrapper className={className}>
    <UtrechtLogo>
      <LogoImage />
    </UtrechtLogo>
    <LogoText>Frameless</LogoText>
  </LogoWrapper>
);

import { Logo as LeadEagleLogo } from '@assets/vectors/Logo';
import { OrlowLogo } from '@assets/vectors/OrlowLogo';
import * as React from 'react';
import { Container, Inner, LogosWrapper } from './HomeFooterStyle';

const HomeFooter: React.FC = () => {
  return (
    <Container>
      <LogosWrapper>
        <OrlowLogo />
        <LeadEagleLogo />
      </LogosWrapper>
      <Inner>
        LEADEAGLE Adrian Orłów
        <br />
        ul. Towarowa 79/2, 43-600 Jaworzno
        <br />
        NIP/VAT-UE: PL 6322027999
      </Inner>
    </Container>
  );
};

export default HomeFooter;

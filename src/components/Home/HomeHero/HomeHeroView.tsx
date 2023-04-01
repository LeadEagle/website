import { Logo } from '@assets/vectors/Logo';
import { Title } from '@shared/Typography';
import * as React from 'react';
import { Container, LogoWrapper, Wrapper } from './HomeHeroStyle';
import TrustedBy from './TrustedBy';

const HomeHero: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <Title>
          Let&apos;s build a product <span>they’ll love</span>!
        </Title>
      </Container>
      <TrustedBy />
    </Wrapper>
  );
};

export default HomeHero;

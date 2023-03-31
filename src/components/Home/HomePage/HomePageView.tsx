import * as React from 'react';
import HomeHero from '../HomeHero';
import { Container } from './HomePageStyle';

const HomePage: React.FC = () => {
  return (
    <Container>
      <HomeHero />
    </Container>
  );
};

export default HomePage;

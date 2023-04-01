import * as React from 'react';
import HomeContact from '../HomeContact';
import HomeFooter from '../HomeFooter';
import HomeHero from '../HomeHero';
import HomeOffer from '../HomeOffer';
import HomeProducts from '../HomeProducts';
import { Container } from './HomePageStyle';

const HomePage: React.FC = () => {
  return (
    <Container>
      <HomeHero />
      <HomeOffer />
      <HomeProducts />
      <HomeContact />
      <HomeFooter />
    </Container>
  );
};

export default HomePage;

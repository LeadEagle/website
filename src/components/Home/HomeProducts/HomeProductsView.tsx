import { Dzialaj } from '@assets/vectors/products/Dzialaj';
import { MyPolitics } from '@assets/vectors/products/MyPolitics';
import { Title } from '@shared/Typography';
import * as React from 'react';
import {
  Container,
  Inner,
  Product,
  ProductLogoWrapper,
  ProductTitle,
} from './HomeProductsStyle';

const HomeProducts: React.FC = () => {
  return (
    <Container>
      <Title as="h2">
        Check out our <span>products</span>
      </Title>
      <Inner>
        <Product href="https://orlow.me/mypolitics" target="_blank">
          <ProductLogoWrapper shadowColor="#00B3DB">
            <MyPolitics />
          </ProductLogoWrapper>
          <ProductTitle>
            Poland's largest political education platform
          </ProductTitle>
        </Product>
        <Product href="https://orlow.me/dzialaj" target="_blank">
          <ProductLogoWrapper shadowColor="#9469FE">
            <Dzialaj />
          </ProductLogoWrapper>
          <ProductTitle>Cutting-edge petitions platform</ProductTitle>
        </Product>
      </Inner>
    </Container>
  );
};

export default HomeProducts;

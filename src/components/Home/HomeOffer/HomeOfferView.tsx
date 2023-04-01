import { Title } from '@shared/Typography';
import * as React from 'react';
import {
  Container,
  Element,
  ElementInner,
  ElementTitle,
  Inner,
} from './HomeOfferStyle';
import { OFFER_ELEMENTS } from './HomeOfferUtils';

const HomeOffer: React.FC = () => {
  return (
    <Container>
      <Title as="h2">
        We’ll turn <span>your idea</span> into reality
      </Title>
      <Inner>
        {OFFER_ELEMENTS.map(({ title, image }, index) => (
          <Element key={index}>
            <ElementInner>
              <ElementTitle>{title}</ElementTitle>
            </ElementInner>
            {image}
          </Element>
        ))}
      </Inner>
    </Container>
  );
};

export default HomeOffer;

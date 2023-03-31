import * as React from 'react';
import {
  CompanyLink,
  CompanyLogo,
  Container,
  Inner,
  Title,
} from './TrustedByStyle';

const TrustedBy: React.FC = () => {
  return (
    <Container>
      <Title>Trusted by</Title>
      <Inner>
        <CompanyLink href="https://intertell.pl" target="_blank">
          <CompanyLogo src={require('@assets/images/intertell.png')} />
        </CompanyLink>
        <CompanyLogo src={require('@assets/images/mermaid.png')} />
        <CompanyLink href="https://steki.pl" target="_blank">
          <CompanyLogo src={require('@assets/images/steki.png')} />
        </CompanyLink>
      </Inner>
    </Container>
  );
};

export default TrustedBy;

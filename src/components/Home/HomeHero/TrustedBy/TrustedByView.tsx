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
        <CompanyLink href="https://off.org.pl" target="_blank">
          <CompanyLogo src={require('@assets/images/off.png')} />
        </CompanyLink>
        <CompanyLink href="https://liberte.pl" target="_blank">
          <CompanyLogo src={require('@assets/images/liberte.png')} />
        </CompanyLink>
        <CompanyLink href="https://steki.pl" target="_blank">
          <CompanyLogo src={require('@assets/images/steki.png')} />
        </CompanyLink>
        <CompanyLogo src={require('@assets/images/mermaid.png')} />
      </Inner>
    </Container>
  );
};

export default TrustedBy;

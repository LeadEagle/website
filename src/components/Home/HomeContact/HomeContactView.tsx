import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Title } from '@shared/Typography';
import * as React from 'react';
import {
  ContactLink,
  ContactLinkIconWrapper,
  ContactLinkTitle,
  Container,
  Inner,
} from './HomeContactStyle';

const PHONE_NUMBER = '+48 573 491 241';
const EMAIL = 'hello@leadeagle.pl';

const HomeContact: React.FC = () => {
  return (
    <Container>
      <Inner>
        <Title as="h2">Contact</Title>
        <ContactLink href={`tel:${PHONE_NUMBER}`}>
          <ContactLinkIconWrapper>
            <FontAwesomeIcon icon={faPhone} />
          </ContactLinkIconWrapper>
          <ContactLinkTitle>{PHONE_NUMBER}</ContactLinkTitle>
        </ContactLink>
        <ContactLink href={`mailto:${EMAIL}`}>
          <ContactLinkIconWrapper>
            <FontAwesomeIcon icon={faEnvelope} />
          </ContactLinkIconWrapper>
          <ContactLinkTitle>{EMAIL}</ContactLinkTitle>
        </ContactLink>
      </Inner>
    </Container>
  );
};

export default HomeContact;

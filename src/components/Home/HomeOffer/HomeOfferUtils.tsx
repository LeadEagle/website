import { Branding } from '@assets/vectors/blocks/Branding';
import { Design } from '@assets/vectors/blocks/Design';
import { Dev } from '@assets/vectors/blocks/Dev';
import { Product } from '@assets/vectors/blocks/Product';

interface OfferElement {
  title: JSX.Element;
  image: JSX.Element;
}

export const OFFER_ELEMENTS: OfferElement[] = [
  {
    title: (
      <>
        <span>Let&apos;s find</span>
        <br />
        your customers&apos; needs
      </>
    ),
    image: <Product />,
  },
  {
    title: (
      <>
        <span>Let&apos;s code</span>
        <br />a fast and optimized app
      </>
    ),
    image: <Dev />,
  },
  {
    title: (
      <>
        <span>Let&apos;s create</span>
        <br />a brilliant visual identity
      </>
    ),
    image: <Branding />,
  },
  {
    title: (
      <>
        <span>Let&apos;s design</span>
        <br />
        an aesthetic and effective UI
      </>
    ),
    image: <Design />,
  },
];

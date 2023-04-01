import { fonts } from '@constants';
import Head from 'next/head';
import * as React from 'react';

const fontsPreloadPaths = fonts.map(({ path }) => path);

const toFontPreloadLink = (path: string) => (
  <link
    key={path}
    rel="preload"
    as="font"
    crossOrigin=""
    type="font/ttf"
    href={`/static/fonts/${path}`}
  />
);

const fontsFacesDeclarations = fonts
  .map(
    ({ path, name, weight }) => `
@font-face {
  font-family: '${name}';
  src: url('/static/fonts/${path}');
  font-style: normal;
  font-weight: ${weight};
  font-display: auto;
}
`
  )
  .join('');

const fontsPreload = fontsPreloadPaths.map(toFontPreloadLink);

const HeadFonts: React.FC = () => {
  const [fontsPreloadData] = React.useState(fontsPreload);
  const [fontsFacesDeclarationsData] = React.useState(fontsFacesDeclarations);

  return (
    <>
      <Head>{fontsPreloadData}</Head>
      <style jsx global>
        {fontsFacesDeclarationsData}
      </style>
    </>
  );
};

export default React.memo(HeadFonts);

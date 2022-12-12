import { createGlobalStyle } from 'styled-components';

import PlayRegularWoff2 from '../assets/fonts/Play-Regular.woff2';
import PlayRegularWoff from '../assets/fonts/Play-Regular.woff';
import PlayRegularTtf from '../assets/fonts/Play-Regular.ttf';
import PlayBoldWoff2 from '../assets/fonts/Play-Bold.woff2';
import PlayBoldWoff from '../assets/fonts/Play-Bold.woff';
import PlayBoldTtf from '../assets/fonts/Play-Bold.ttf';

export const GlobalStyles = createGlobalStyle`

:root {
    --white: #FFFFFF;
    --green-500: #5ece7b;
    --green-800: #0F6450;
    --black-700: #2b2b2b;
    --black-800: #1D1F22;
    --gray-200: #EEEEEE;
    --gray-300: #E5E5E5;
    --gray-400: #D3D2D5;
    --gray-500: #8D8F9A;
    --cyan-500: #15A4C4;
    --cyan-50: #e7fafe;
  }

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: PlayRegular, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  background: var(--cyan-50);
}

button {
  cursor: pointer;
  font-size: 1rem;
}

[disabled] {
  opacity: .6;
  cursor: not-allowed;
}

@font-face {
font-family: 'PlayRegular';
font-weight: 400;
font-display: swap;
font-style: normal;
src: url('${PlayRegularWoff2}') format('woff2'),
     url('${PlayRegularWoff}') format('woff'),
     url('${PlayRegularTtf}') format('truetype');
}

@font-face {
  font-family: 'PlayBold';
  font-weight: 700;
  font-display: swap;
  font-style: normal;
  src: url('${PlayBoldWoff2}') format('woff2'),
       url('${PlayBoldWoff}') format('woff'),
       url('${PlayBoldTtf}') format('truetype');
}
`;

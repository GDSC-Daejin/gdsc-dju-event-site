import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Google Sans Display', sans-serif;
    src: url('/fonts/GoogleSansDisplay-Regular.ttf');
    font-weight: 400;
    unicode-range: U+0041-005A, U+0061-007A, U+0030-0039;
  }
  @font-face {
    
    font-family: 'Google Sans Display', sans-serif;
    src: url('/fonts/GoogleSansDisplay-Bold.ttf');
    font-weight: 700;

    unicode-range: U+0041-005A, U+0061-007A, U+0030-0039;
  }
  @font-face {
    font-family: 'Google Sans Display', sans-serif;
    src: url('/fonts/GoogleSansDisplay-Medium.ttf');
    font-weight: 500;
    unicode-range: U+0041-005A, U+0061-007A, U+0030-0039;
  }
  @font-face {
    font-family: 'Spoqa Han Sans Neo', sans-serif;
    src: url('/fonts/SpoqaHanSansNeo-Thin.otf') ,
    url('/fonts/SpoqaHanSansNeo-Thin.ttf');
    font-weight: 100;

    unicode-range: U+AC00-U+D7A3;
  } @font-face {
    font-family: 'Spoqa Han Sans Neo', sans-serif;
    src: url('/fonts/SpoqaHanSansNeo-Light.otf'),
  url('/fonts/SpoqaHanSansNeo-Light.ttf');
    font-weight: 300;
    unicode-range: U+AC00-U+D7A3;

  }  @font-face {
    font-family: 'Spoqa Han Sans Neo', sans-serif;
    src: url('/fonts/SpoqaHanSansNeo-Regular.otf') ,
  url('/fonts/SpoqaHanSansNeo-Regular.ttf');
    font-weight: 400;
    unicode-range: U+AC00-U+D7A3;

  } @font-face {
    font-family: 'Spoqa Han Sans Neo', sans-serif;
    src: url('/fonts/SpoqaHanSansNeo-Medium.otf') ,
  url('/fonts/SpoqaHanSansNeo-Medium.ttf');
    font-weight: 500;
    font-display: swap;
    unicode-range: U+AC00-U+D7A3;

  }  @font-face {
    font-family: 'Spoqa Han Sans Neo', sans-serif;
    src: url('/fonts/SpoqaHanSansNeo-Bold.otf'),
  url('/fonts/SpoqaHanSansNeo-Bold.ttf');
    font-weight: 700;
    font-display: swap;
    unicode-range: U+AC00-U+D7A3;

  }
  * {
    margin: 0;
    font-size: 10px;
    word-break: keep-all;
    -webkit-tap-highlight-color: transparent;
    transition: color, background-color 0.3s ease-in-out;
    font-family: 'Google Sans Display','Spoqa Han Sans Neo', sans-serif;
  }
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video, button {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 10px;
    vertical-align: baseline;
    
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  html{
    background: ${({ theme }) => theme.colors.background};
  }
  input:focus {
    outline: none;
  }
  textarea:focus {
    outline: none;
  }
  a {
    text-decoration: none;
  }
  a:visited {
    text-decoration: none;
  }
  a:hover {
    text-decoration: none;
  }
  a:focus {
    text-decoration: none;
  }
  a:active {
    text-decoration: none;
  }
`;
export default GlobalStyles;

import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
  :root {
    --clr-primary-1: #532004;
    --clr-primary-2: #75300a;
    --clr-primary-3: #86380e;
    --clr-primary-4: #994314;
    --clr-primary-5: #ba5d2c;
    --clr-primary-6: #c86a37;
    --clr-primary-7: #da8252;
    --clr-primary-8: #f2ad88;
    --clr-primary-9: #fdd5bf;
    --clr-primary-10: #ffebe0;
    --clr-grey-1: #102a42;
    --clr-grey-2: #243a52;
    --clr-grey-3: #324d67;
    --clr-grey-4: #48647f;
    --clr-grey-5: #617d98;
    --clr-grey-6: #829ab0;
    --clr-grey-7: #9eb2c7;
    --clr-grey-8: #bcccdc;
    --clr-grey-9: #dae2ec;
    --clr-grey-10: #f1f5f8;
    --clr-white: #fff;
    --clr-red-dark: #bb2525;
    --clr-red-light: #e66b6b;
    --clr-green-dark: #25bb32;
    --clr-green-light: #6be675;
    --clr-black: #222;
    --transition: all 0.3s linear;
    --spacing: 0.1rem;
    --radius: 0.25rem;
    --light-shadow: 0 5px 15px rgba(0,0,0,0.1);
    --dark-shadow: 0 5px 15px rgba(0,0,0,0.2);
    --max-width: 1170px;
    --fixed-width: 620px;
  }

  body {
    font-size: 16px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: var(--clr-grey-10);
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }

  *,
  *:before,
  *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6 {
    line-height: 1;
    letter-spacing: var(--spacing);
  }
`;

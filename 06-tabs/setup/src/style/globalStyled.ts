import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --color-primary-1: #044e53;
    --color-primary-2: #0a6c75;
    --color-primary-3: #0e7c86;
    --color-primary-4: #149199;
    --color-primary-5: #2caeba;
    --color-primary-6: #37bcc8;
    --color-primary-7: #52d1da;
    --color-primary-8: #88ebf2;
    --color-primary-9: #bff8fd;
    --color-primary-10: #e0fcff;
    --color-gray-1: #102a42;
    --color-gray-2: #243a52;
    --color-gray-3: #324d67;
    --color-gray-4: #48647f;
    --color-gray-5: #617d98;
    --color-gray-6: #829ab0;
    --color-gray-7: #9eb2c7;
    --color-gray-8: #bcccdc;
    --color-gray-9: #dae2ec;
    --color-gray-10: #f1f5f8;
    --color-white: #fff;
    --color-red-dark: #bb2525;
    --color-red-light: #e66b6b;
    --color-green-dark: #25bb32;
    --color-green-light: #6be675;
    --color-black: #222;
    --transition: all 0.3s linear;
    --spacing: 0.1rem;
    --radius: 0.25rem;
    --light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    --dark-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
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
`;

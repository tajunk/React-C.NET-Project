/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { Header } from './Header';
import { HomePage } from './HomePage';
import { fontFamily, fontSize, gray2 } from './Styles';

function App() {
  return (
    <div
      css={css`
        font-family: ${fontFamily};
        font-size: ${fontSize};
        color: ${gray2};
        font-size: 12px;
      `}
    >
      <Header />
      <HomePage />
    </div>
  );
}

export default App;

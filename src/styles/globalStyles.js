import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,
*:before,
*:after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  background: linear-gradient(129.07deg, #ffd7b3ff 0%, #c7ffddff 100%);
  background-size: cover;
  min-height: 100vh;
}

body {
  height: 100%;
  line-height: 1;
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-overflow-scrolling: auto;
  margin: 0;
}

button, input {
  padding: 10px;
  border: 2px solid lightgray;
  border-radius: 5px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

option {
  background: red;
}

#root {
  min-height: 100%;
  margin: 0px 10vw;
}

@media screen and (max-width: 1200px) {
  #root {
    margin: 0px 7vw;
  }
}

@media screen and (max-width: 992px) {
  #root {
    margin: 0px 4vw;
  }
}
`;

export default GlobalStyle;

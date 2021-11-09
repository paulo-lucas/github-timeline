import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    background-color: #2F2E30;
    font-family: Lato, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    display: flex; 
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center; 
    min-height: 100vh;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const theme = {
  colors: {
    dark: '#2f2f2f',
    light: '#fff',
    brand: '#57bd84'
  },
};

function App({ Component, pageProps }) {
  return <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  </>
}

export default App

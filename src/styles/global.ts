import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @media(max-width: 67.5rem) {
    html {
      font-size: 93.75% // 15px
    }
  }

  @media(max-width: 45rem) {
    html {
      font-size: 87.5% // 15px
    }
  }

  body {
    background: ${props => props.theme.colors.whiteSnow};
  }

  body, input, textarea, button {
    font: 500 1rem Roboto, sans-serif;
    color: ${props => props.theme.colors.text};
  }

  h1 {
    font-size: 2rem;
  }
  h2 {
    font-size: 1.5rem;
  }
  button {
    cursor: pointer;
  }
`

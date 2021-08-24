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
      font-size: 87.5% // 14px
    }
  }

  body {
    background: ${props => props.theme.colors.whiteSnow};

    .ReactModal__Content {
      opacity: 1;
      transform: translateX(100%);
      transition: transform 500ms ease-in-out;

      &--after-open {
        opacity: 1;
        transform: translateX(0%);
      }

      &--before-close {
        opacity: 1;
        transform: translateX(100%);
      }

      .modal--close__button {
        display: flex;
        justify-content: flex-end;

        img {
          width: 24px;
        }
      }
    }
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

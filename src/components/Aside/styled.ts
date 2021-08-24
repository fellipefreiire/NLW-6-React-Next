import styled from 'styled-components'
import { generateMedia } from 'styled-media-query'

const customMedia = generateMedia({
  desktop: '78em',
  mobileSmall: '320px',
  mobile: '540px'
})

export const StyledAside = styled.aside`
  flex: 7;

  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 7.5rem 5rem;

  img {
    max-width: 20rem;
  }

  strong {
    font: 700 2.25rem 'Poppins', sans-serif;
    line-height: 2.625rem;
    margin-top: 1rem;
  }

  p {
    font-size: 1.5rem;
    line-height: 2rem;
    margin-top: 1rem;
    color: ${props => props.theme.colors.whiteSnow};
  }

  ${customMedia.lessThan('mobile')`
    flex: 1;
    padding: 1rem;
    align-items: center;

    img {
      max-width: 8rem;
    }

    strong {
      font-size: 1.214285714285714rem;
      line-height: 1.23958rem;
    }

    p {
      font-size: 1rem;
      line-height: 1.33rem;
      text-align: center;
    }
  `}

  ${customMedia.lessThan('mobileSmall')`
    img {
      max-width: 6rem;
    }
  `}
`

import styled from 'styled-components'

export const PageRoom = styled.div`
  header {
    padding: 1.5rem;
    border-bottom: 0.0625rem solid ${props => props.theme.colors.white4};
  }

  main {
    max-width: 50rem;
    margin: 0 auto;

    form {
      textarea {
        width: 100%;
        border: 0;
        padding: 1rem;
        border-radius: 0.5rem;
        background: ${props => props.theme.colors.white2};
        box-shadow: 0 0.125rem 0.75rem rgba(0, 0, 0, 0.04);
        resize: vertical;
        min-height: 8.125rem;
      }
    }
  }
`

export const HeaderContent = styled.div`
  max-width: 70rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > img {
    max-height: 2.8125rem;
  }

  > div {
    display: flex;
    gap: 1rem;

    button {
      height: 2.5rem;
    }
  }
`

export const RoomTitle = styled.div`
  margin: 2rem 0 1.5rem;
  display: flex;
  align-items: center;

  h1 {
    font-family: 'Poppins', sans-serif;
    font-size: 1.5rem;
    color: ${props => props.theme.colors.text};
  }

  span {
    margin-left: 1rem;
    background: ${props => props.theme.colors.pink};
    border-radius: 624.9375rem;
    padding: 0.5rem 1rem;
    color: ${props => props.theme.colors.white};
    font-weight: 500;
    font-size: 0.875rem;
  }
`

export const FormFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;

  > span {
    font-size: 0.875rem;
    color: ${props => props.theme.colors.gray2};
    font-weight: 500;

    button {
      background: transparent;
      border: 0;
      color: ${props => props.theme.colors.primary};
      text-decoration: underline;
      font-size: 0.875rem;
      cursor: pointer;
    }
  }
`

export const UserInfo = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
  }

  span {
    margin-left: 0.5rem;
    color: ${props => props.theme.colors.text};
    font-weight: 500;
    font-size: 0.875rem;
  }
`

export const QuestionList = styled.div`
  margin-top: 2rem;
`

export const LikeButton = styled.button`
  display: flex;
  align-items: flex-end;

  &.liked {
    color: ${props => props.theme.colors.primary};

    svg path {
      stroke: ${props => props.theme.colors.primary};
    }
  }
`

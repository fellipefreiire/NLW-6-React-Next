import styled from 'styled-components'

export const Question = styled.div`
  background: ${props => props.theme.colors.white2};
  border-radius: 0.5rem;
  box-shadow: 0 0.125rem 0.75rem rgba(0, 0, 0, 0.04);
  padding: 1.5rem;

  & + & {
    margin-top: 1.5rem;
  }

  &.highlighted {
    background: ${props => props.theme.colors.white3};
    border: 0.0625rem solid ${props => props.theme.colors.primary};

    footer .user-info span {
      color: ${props => props.theme.colors.text};
    }
  }

  &.answered {
    background: ${props => props.theme.colors.gray};
  }

  p {
    color: ${props => props.theme.colors.text};
  }

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1.5rem;

    > div {
      display: flex;
      gap: 1rem;
    }

    button {
      border: 0;
      background: transparent;
      cursor: pointer;
      gap: 0.5rem;
      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.7);
      }
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
    color: ${props => props.theme.colors.gray2};
    font-size: 0.875rem;
  }
`

import styled from 'styled-components'

export const PageAuth = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;
`

export const StyledMain = styled.main`
  flex: 8;

  padding: 0 2rem;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 20rem;
  align-items: stretch;
  text-align: center;

  > img {
    align-self: center;
  }

  p {
    font-size: 0.875rem;
    color: ${props => props.theme.colors.gray2};
    margin-top: 1rem;

    a {
      color: ${props => props.theme.colors.pink};
    }
  }
`

export const CreateRoom = styled.button`
  margin-top: 1rem;
  height: 3.125rem;
  border-radius: 0.5rem;
  font-weight: 500;
  background: ${props => props.theme.colors.red};
  color: ${props => props.theme.colors.white};

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  border: 0;

  transition: filter 0.2s;

  img {
    margin-right: 0.5rem;
  }

  &:hover {
    filter: brightness(0.9);
  }
`

export const Separator = styled.div`
  font-size: 0.875rem;
  color: ${props => props.theme.colors.gray3};

  margin: 2rem 0;
  display: flex;
  align-items: center;

  &::before {
    content: '';
    flex: 1;
    height: 0.0625rem;
    background: ${props => props.theme.colors.gray3};
    margin-right: 1rem;
  }

  &::after {
    content: '';
    flex: 1;
    height: 0.0625rem;
    background: ${props => props.theme.colors.gray3};
    margin-left: 1rem;
  }
`

export const Form = styled.form`
  input {
    height: 3.125rem;
    border-radius: 0.5rem;
    padding: 0 1rem;
    background: ${props => props.theme.colors.white};
    border: 0.0625rem solid ${props => props.theme.colors.gray3};
  }

  button {
    margin-top: 1rem;
  }

  button,
  input {
    width: 100%;
  }
`

export const H2 = styled.h2`
  font-size: 1.5rem;
  margin: 4rem 0 1.5rem;
  font-family: 'Poppins', sans-serif;
`

import styled from 'styled-components'

export const RoomCode = styled.button`
  height: 2.5rem;
  border-radius: 0.5rem;
  overflow: hidden;

  background: ${props => props.theme.colors.white};
  border: 0.0625rem solid ${props => props.theme.colors.primary};
  cursor: pointer;

  display: flex;

  div {
    background: ${props => props.theme.colors.primary};
    padding: 0 0.75rem;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  span {
    display: block;
    align-self: center;
    flex: 1;
    padding: 0 1rem 0 0.75rem;
    width: 15.3125rem;
    font-size: 0.875rem;
    font-weight: 500;
  }
`

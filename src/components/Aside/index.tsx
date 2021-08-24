import * as S from './styled'

export const Aside: React.FC = (): JSX.Element => (
  <S.StyledAside>
    <img
      src='/images/illustration.svg'
      alt='Ilustração simbolizando perguntas e respostas'
    />
    <strong>Crie salas de Q&amp;A ao-vivo</strong>
    <p>Tire as dúvidas da sua audiência em tempo-real</p>
  </S.StyledAside>
)

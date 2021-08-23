import { ButtonHTMLAttributes } from 'react'
import * as S from './styled'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean
}

export const Button: React.FC<ButtonProps> = ({
  isOutlined,
  ...props
}): JSX.Element => <S.StyledButton {...props}></S.StyledButton>

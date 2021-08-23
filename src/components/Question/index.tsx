import { ReactNode } from 'react'

import cx from 'classnames'
import * as S from './styled'

type QuestionProps = {
  content: string
  author: {
    name: string
    avatar: string
  }
  children?: ReactNode
  isAnswered?: boolean
  isHighlighted?: boolean
}

export const Question: React.FC<QuestionProps> = ({
  content,
  author,
  isAnswered = false,
  isHighlighted = false,
  children
}): JSX.Element => (
  <S.Question
    className={cx(
      { answered: isAnswered },
      { highlighted: isHighlighted && !isAnswered }
    )}
  >
    <p>{content}</p>
    <footer>
      <S.UserInfo>
        <img src={author.avatar} alt={author.name} />
        <span>{author.name}</span>
      </S.UserInfo>
      <div>{children}</div>
    </footer>
  </S.Question>
)

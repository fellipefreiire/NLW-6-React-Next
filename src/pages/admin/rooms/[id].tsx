import { NextPage } from 'next'
import { useRouter } from 'next/router'

import { database } from '../../../services/firebase'

import { useRoom } from '../../../hooks/useRoom'

import { Button } from '../../../components/Button'
import { Question } from '../../../components/Question'
import { RoomCode } from '../../../components/RoomCode'

import * as S from '../../../styles/room'

const AdminRoom: NextPage = () => {
  const router = useRouter()
  const roomId = router.query.id?.toString()
  const { questions, title } = useRoom(roomId)

  async function handleEndRoom() {
    await database.ref(`rooms/${roomId}`).update({
      endedAt: new Date()
    })

    router.push('/')
  }

  const handleCheckQuestionAsAnswered = async (questionId: string) => {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isAnswered: true
    })
  }
  const handleHighlightQuestion = async (questionId: string) => {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isHighlighted: true
    })
  }
  const handleDeleteQuestion = async (questionId: string) => {
    if (window.confirm('Tem certeza que deseja excluir essa pergunta?')) {
      await database.ref(`rooms/${roomId}/questions/${questionId}`).remove()
    }
  }

  return (
    <S.PageRoom>
      <header>
        <S.HeaderContent>
          <img src='/images/logo.svg' alt='Letmeask' />
          <div>
            <RoomCode code={roomId} />
            <Button onClick={handleEndRoom} isOutlined>
              Encerrar Sala
            </Button>
          </div>
        </S.HeaderContent>
      </header>

      <main>
        <S.RoomTitle>
          <h1>Sala {title}</h1>
          {questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
        </S.RoomTitle>

        <S.QuestionList>
          {questions.map(question => {
            return (
              <Question
                key={question.id}
                content={question.content}
                author={question.author}
                isAnswered={question.isAnswered}
                isHighlighted={question.isHighlighted}
              >
                {!question.isAnswered && (
                  <>
                    <button
                      type='button'
                      onClick={() => handleCheckQuestionAsAnswered(question.id)}
                    >
                      <img
                        src='/images/check.svg'
                        alt='Marca pergunta como respondida'
                      />
                    </button>
                    <button
                      type='button'
                      onClick={() => handleHighlightQuestion(question.id)}
                    >
                      <img
                        src='/images/answer.svg'
                        alt='Dar destaque à pergunta'
                      />
                    </button>
                  </>
                )}
                <button
                  type='button'
                  onClick={() => handleDeleteQuestion(question.id)}
                >
                  <img src='/images/delete.svg' alt='Remover pergunta' />
                </button>
              </Question>
            )
          })}
        </S.QuestionList>
      </main>
    </S.PageRoom>
  )
}

export default AdminRoom

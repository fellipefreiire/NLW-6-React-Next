import { NextPage } from 'next'
import { useRouter } from 'next/router'

import { database } from '../../../services/firebase'

import { useEffect, useState } from 'react'
import { useRoom } from '../../../hooks/useRoom'
import Modal from 'react-modal'

import { Button } from '../../../components/Button'
import { Question } from '../../../components/Question'
import { RoomCode } from '../../../components/RoomCode'

import * as S from '../../../styles/room'

Modal.setAppElement('#__next')

const modalStyles = {
  overlay: {
    background: 'rgba(0,0,0,0.5)'
  },
  content: {
    height: '100vh',
    width: '50%',
    marginLeft: 'auto',
    borderRadius: 0,
    border: 0,
    background: '#fefefe',
    padding: '1rem',
    inset: '0'
  }
}

const AdminRoom: NextPage = () => {
  const windowSize = process.browser ? window.innerWidth >= 768 : false
  const [isTablet, setTablet] = useState(windowSize)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const router = useRouter()
  const roomId = router.query.id?.toString()
  const { questions, title } = useRoom(roomId)

  const copyRoomCodeToClipboard = (code: string) => {
    navigator.clipboard.writeText(code)
  }

  function openModal() {
    setIsModalOpen(true)
  }

  function closeModal() {
    setIsModalOpen(false)
  }

  const updateMedia = () => {
    setTablet(window.innerWidth >= 768)
  }

  useEffect(() => {
    window.addEventListener('resize', updateMedia)
    return () => window.removeEventListener('resize', updateMedia)
  }, [])

  const handleEndRoom = async () => {
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
          {isTablet ? (
            <div>
              <RoomCode code={roomId} />
              <Button onClick={handleEndRoom} isOutlined>
                Encerrar Sala
              </Button>
            </div>
          ) : (
            <div onClick={openModal}>
              <svg viewBox='0 0 100 80' width='24' height='24'>
                <rect width='100' height='20' rx='8'></rect>
                <rect y='30' width='100' height='20' rx='8'></rect>
                <rect y='60' width='100' height='20' rx='8'></rect>
              </svg>
            </div>
          )}
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
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={modalStyles}
        contentLabel='Modal for room menu'
        closeTimeoutMS={500}
      >
        <div className='modal--close__button'>
          <img
            onClick={closeModal}
            src='/images/cross.svg'
            alt='Close modal button'
          />
        </div>
        <div>
          <S.ModalUl>
            <li onClick={() => copyRoomCodeToClipboard(roomId)}>
              Copiar código
            </li>
            <li onClick={handleEndRoom}>Encerrar sala</li>
          </S.ModalUl>
        </div>
      </Modal>
    </S.PageRoom>
  )
}

export default AdminRoom

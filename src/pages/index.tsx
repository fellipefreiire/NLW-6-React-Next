import { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { FormEvent, useState } from 'react'

import { database } from '../services/firebase'

import { Aside } from '../components/Aside'
import { Button } from '../components/Button'

import { useAuth } from '../hooks/useAuth'

import * as S from '../styles/home'

const Homepage: NextPage = (): JSX.Element => {
  const router = useRouter()
  const [roomCode, setRoomCode] = useState('')
  const { user, signInWithGoogle } = useAuth()

  const handleCreateRoom = async () => {
    if (!user) {
      await signInWithGoogle()
    }

    router.push('/rooms/new')
  }

  const handleJoinRoom = async (event: FormEvent) => {
    event.preventDefault()

    if (roomCode.trim() === '') {
      return
    }

    const roomRef = await database.ref(`/rooms/${roomCode}`).get()

    if (!roomRef.exists()) {
      alert('Room does not exist!')
      return
    }

    if (roomRef.val().endedAt) {
      alert('Room already closed.')
      return
    }

    router.push(`/rooms/${roomCode}`)
  }

  return (
    <>
      <Head>
        <title>Homepage</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <S.PageAuth>
        <Aside />
        <S.StyledMain>
          <S.MainContent>
            <img src='/images/logo.svg' alt='Letmeask' />
            <S.CreateRoom onClick={handleCreateRoom} className='create-room'>
              <img src='/images/google-icon.svg' alt='Logo do Google' />
              Crie sua sala com o Google
            </S.CreateRoom>
            <S.Separator>ou entre em uma sala</S.Separator>
            <S.Form onSubmit={handleJoinRoom}>
              <input
                type='text'
                placeholder='Digite o código da sala'
                onChange={event => setRoomCode(event.target.value)}
                value={roomCode}
              />
              <Button type='submit'>Entrar na sala</Button>
            </S.Form>
          </S.MainContent>
        </S.StyledMain>
      </S.PageAuth>
    </>
  )
}

export default Homepage

import { NextPage } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import { FormEvent, useState } from 'react'

import { database } from '../../services/firebase'

import { Aside } from '../../components/Aside'
import { Button } from '../../components/Button'

import { useAuth } from '../../hooks/useAuth'

import * as S from '../../styles/home'

const NewRoom: NextPage = (): JSX.Element => {
  const { user } = useAuth()
  const router = useRouter()
  const [newRoom, setNewRoom] = useState('')

  async function handleCreateRoom(event: FormEvent) {
    event.preventDefault()
    if (newRoom.trim() === '') {
      return
    }
    const roomRef = database.ref('rooms')
    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id
    })
    router.push(`/rooms/${firebaseRoom.key}`)
  }

  return (
    <>
      <Head>
        <title>New Room</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <S.PageAuth>
        <Aside />
        <S.StyledMain>
          <S.MainContent>
            <img src='/images/logo.svg' alt='Letmeask' />
            <S.H2>Criar uma nova sala</S.H2>
            <S.Form onSubmit={handleCreateRoom}>
              <input
                type='text'
                placeholder='Nome da sala'
                onChange={event => setNewRoom(event.target.value)}
                value={newRoom}
              />
              <Button type='submit'>Criar sala</Button>
            </S.Form>
            <p>
              Quer entrar em uma sala existente?{' '}
              <Link href='/'>clique aqui</Link>
            </p>
          </S.MainContent>
        </S.StyledMain>
      </S.PageAuth>
    </>
  )
}

export default NewRoom

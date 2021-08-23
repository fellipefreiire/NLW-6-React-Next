import * as S from './styled'

type RoomCodeProps = {
  code: string
}

export const RoomCode: React.FC<RoomCodeProps> = ({ code }): JSX.Element => {
  const copyRoomCodeToClipboard = () => {
    navigator.clipboard.writeText(code)
  }

  return (
    <S.RoomCode onClick={copyRoomCodeToClipboard}>
      <div>
        <img src='/images/copy.svg' alt='Copy room code' />
      </div>
      <span>Sala #-MhWHbr9efYNRoEOMmDV</span>
    </S.RoomCode>
  )
}

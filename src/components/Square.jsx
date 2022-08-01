import { useState } from 'react'
import styled from 'styled-components'

const StyledSquare = styled.div`
  display flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border: 1px solid black;
  color: black;
  &:hover {
    cursor: pointer;
    background-color: #eae3e3;
  }
`

function Square({
  index,
  id,
  sizeSide,
  startGame,
  roundOfPlayer,
  setRoundOfPlayer,
}) {
  const [squareValue, setSquareValue] = useState(null)
  return (
    <StyledSquare
      className="squares"
      key={index}
      id={id}
      onClick={() => {
        if (startGame) {
          if (squareValue === null) {
            if (roundOfPlayer) {
              setSquareValue('X')
            } else {
              setSquareValue('O')
            }
            setRoundOfPlayer(!roundOfPlayer)
          }
        }
      }}
    >
      {squareValue}
    </StyledSquare>
  )
}

export default Square

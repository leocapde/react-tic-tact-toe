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

function Square(props) {
  const index = props.index
  // const value = props.value
  const [squareValue, setSquareValue] = useState(null)

  return (
    <StyledSquare key={index} onClick={() => setSquareValue('X')}>
      {squareValue}
    </StyledSquare>
  )
}

export default Square

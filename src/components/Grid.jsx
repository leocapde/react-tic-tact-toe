import styled from 'styled-components'
import Square from './Square'

const BoardWrapper = styled.div`
  margin 0;
  padding: 30px;
`

const BoardContainer = styled.div`
  display: grid;
  grid-template-columns: ${({ size }) => `repeat(${size}, 1fr)`};
  grid-template-rows: ${({ size }) => `repeat(${size}, 1fr)`};
  width: 85vw;
  height: 85vw;
  max-width: 500px;
  max-height: 500px;
  margin: auto;
  background-color: white;
`

function CreateTable(size) {
  const table = []
  for (let i = 0; i < size; i++) {
    table.push(i)
  }
  return table
}

function Grid(props) {
  const sideSize = props.sideSize
  const boardSize = sideSize * sideSize
  const table = CreateTable(boardSize)
  return (
    <BoardWrapper>
      <BoardContainer size={sideSize}>
        {table.map((elt) => (
          <Square key={table.indexOf(elt)} />
        ))}
      </BoardContainer>
    </BoardWrapper>
  )
}

export default Grid

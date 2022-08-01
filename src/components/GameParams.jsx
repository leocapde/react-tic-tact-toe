import styled from 'styled-components'
import Select from 'react-select'

const StyledGameParams = styled.div`
  text-align: center;
`

const StyledSelect = styled(Select)`
  color: black;
`

const StyledButton = styled.div`
  width: 350px;
  margin: 15px auto 0;
  padding: 10px 20px;
  border-radius: 10px;
  background-color: green;
  font-weight: bold;
  &:hover {
    cursor: pointer;
    oppacity: 0.5;
  }
  &:active {
    background: white;
  }
`

const PlayerWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center:
  width: 350px;
`

const PlayerContainer = styled.div`
  padding: 10px 20px;
  margin: 20px 0 0 0;
  background-color: ${(props) => (props.play ? 'white' : 'gray')};
  color: black;
  border-radius: 10px;
`

function CreateGridList(start, end) {
  const list = []
  for (let i = start; i <= end; i++) {
    list.push({ value: i, label: `${i} × ${i}` })
  }
  return list
}

function GameParams({
  setSideSize,
  startGame,
  setStartGame,
  roundOfPlayer,
  setRoundOfPlayer,
}) {
  const options = CreateGridList(3, 21)
  const handleChange = (event) => {
    setSideSize(event.value)
  }
  return (
    <StyledGameParams>
      <h2>Bienvenue dans mon app 😄</h2>
      <label htmlFor="selectSize">Choisissez la taille de la grille :</label>
      <StyledSelect
        id="selectSize"
        options={options}
        onChange={handleChange}
        isDisabled={startGame}
      ></StyledSelect>
      {!startGame ? (
        <StyledButton
          onClick={() => {
            setStartGame(!startGame)
            setRoundOfPlayer(true)
          }}
        >
          Start
        </StyledButton>
      ) : (
        <PlayerWrapper>
          <PlayerContainer play={roundOfPlayer}>Joueur : X</PlayerContainer>
          <PlayerContainer play={!roundOfPlayer}>IA : O</PlayerContainer>
        </PlayerWrapper>
      )}
    </StyledGameParams>
  )
}

export default GameParams

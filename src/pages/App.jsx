import { useState } from 'react'
import styled from 'styled-components'
import GameParams from '../components/GameParams'
import Grid from '../components/Grid'
import Header from '../components/Header'

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`

function App() {
  const [sideSize, setSideSize] = useState(3)
  const [startGame, setStartGame] = useState(false)
  const [roundOfPlayer, setRoundOfPlayer] = useState(true)
  return (
    <StyledApp>
      <Header />
      <GameParams
        setSideSize={setSideSize}
        startGame={startGame}
        setStartGame={setStartGame}
        roundOfPlayer={roundOfPlayer}
        setRoundOfPlayer={setRoundOfPlayer}
      />
      <Grid
        sideSize={sideSize}
        startGame={startGame}
        roundOfPlayer={roundOfPlayer}
        setRoundOfPlayer={setRoundOfPlayer}
      />
    </StyledApp>
  )
}

export default App

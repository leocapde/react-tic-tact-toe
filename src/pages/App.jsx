import { useState } from 'react'
import styled from 'styled-components'
import GameParams from '../components/GameParams'
import Grid from '../components/Grid'
import Header from '../components/Header'

const StyledApp = styled.div`
  text-align: center;
  height: 100vh;
`

function App() {
  const [sideSize, setSideSize] = useState(3)
  return (
    <StyledApp>
      <Header />
      <GameParams setSideSize={setSideSize} />
      <Grid sideSize={sideSize} />
    </StyledApp>
  )
}

export default App

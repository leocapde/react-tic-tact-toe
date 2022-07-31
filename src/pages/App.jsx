import styled from 'styled-components'
import Header from '../components/Header'

const StyledApp = styled.div`
  text-align: center;
  height: 100vh;
`

function App() {
  return (
    <StyledApp>
      <Header />
      <h2>Bienvenue dans mon app 😄</h2>
    </StyledApp>
  )
}

export default App

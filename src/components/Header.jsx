import styled, { keyframes } from 'styled-components'
import logo from '../assets/logo.svg'

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  color: black;
`
const LogoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const StyledLogo = styled.img`
  height: 50px;
  animation: ${LogoSpin} infinite 15s linear;
`

function Header() {
  return (
    <HeaderContainer>
      <StyledLogo src={logo} className="App-logo" alt="logo" />
      <h1>Tic Tac Toe</h1>
    </HeaderContainer>
  )
}

export default Header

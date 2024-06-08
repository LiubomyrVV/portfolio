
import NAVIGATION from "../constants/navigation"
import { Navigation } from "./Navigation"
import { StyledHeader } from "./styles/Header.styled"





export const Header = () => {

  return (
    <StyledHeader >
        <h1 onClick={() => {
          window.scrollTo({
            top: NAVIGATION.find(({name})=> name === 'Główna')?.position,
            left: 0,
            behavior: 'smooth',
        })
        }}>Liubomyr Vernyk</h1>
        <Navigation />
    </StyledHeader>
  )
}


import NAVIGATION from "../constants/navigation"
import { Navigation } from "./Navigation"
import { Reveal } from "./Reveal"
import { StyledHeader } from "./styles/Header.styled"





export const Header = () => {

  return (
    
    <StyledHeader >
      <Reveal hidden={{x:-25}} visible={{x:0}} transition={{delay:1}}>
        <h1 onClick={() => {
          window.scrollTo({
            top: NAVIGATION.find(({name})=> name === 'Główna')?.position,
            left: 0,
            behavior: 'smooth',
        })
        }}>Liubomyr Vernyk</h1>
      </Reveal>
      <Reveal hidden={{x:-25}} visible={{x:0}}>
        <Navigation />
      </Reveal>
    </StyledHeader>
    
  )
}

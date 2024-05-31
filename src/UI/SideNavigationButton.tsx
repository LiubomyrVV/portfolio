import NAVIGATION from "../constants/navigation"
import { StyledSideNavigationButton } from "./styles/SideNavigationButton"

export const SideNavigationButton = () => {
    const scrollUp = () => {
        const currentPosition = Math.round(window.scrollY);
        for(let i = NAVIGATION.length - 2; i !== 0; i--) {
            const position = NAVIGATION[i].position
            console.log('EERRRERWQ  ' ,position, currentPosition, i)
            if (position < currentPosition) {
                window.scrollTo({
                    top: position, 
                    left: 0, 
                    behavior: 'smooth' 
                })
                console.log(position, currentPosition)
                break
            } else if (position === currentPosition) {
                window.scrollTo({
                    top:  NAVIGATION[i-1].position, 
                    left: 0, 
                    behavior: 'smooth' 
                })
                break
            }
        }
    }
    const scrollDown = () => {
        const currentPosition = window.scrollY;
        for(let i = 0; i < NAVIGATION.length; i++) {
            let position

            if (i > NAVIGATION.length - 2) {
                position =  document.body.scrollHeight
            } else {
                position = NAVIGATION[i].position 
            }
        
            if (position > currentPosition) {
                window.scrollTo({
                    top: position, 
                    left: 0, 
                    behavior: 'smooth' 
                })
                break
            }
        }
       
    }

  return (
    <StyledSideNavigationButton>
        <div>
            <i onClick={scrollUp} className="bi bi-arrow-up-circle"></i>
            <i onClick={scrollDown} className="bi bi-arrow-down-circle"></i>
        </div>
    </StyledSideNavigationButton>
  )
}

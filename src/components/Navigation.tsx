import { StyledNavigation } from './styles/Navigation.styled'
import NAVIGATION from '../constants/navigation'
export const Navigation = () => {
    return (
        <StyledNavigation>
                <ul>
                    {NAVIGATION.map(({name, position, isInNavSection = true}, idx) => {
                        if (!isInNavSection) return 
                        return <li key={idx} onClick={() => scrollTo({
                            top: position, 
                            left: 0, 
                            behavior: 'smooth' 
                        })} >{name}</li>
                    })}
                </ul>
        </StyledNavigation>
    )

}

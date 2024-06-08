import { DarkButton } from "../UI/DarkButton"
import { LightButton } from "../UI/LightButton"

import { StyledMain } from "./styles/Main.styled"


const fileUrl = '/cv.pdf'; 


export const Main = () => {
    return (
        <StyledMain>
        <figure>
            <div className='image-container'>
                <img src='/Main.jpg' alt="" />
            </div>
            <figcaption>
                <p>Cześć, jestem</p>
                <h2>Liubomyr Vernyk</h2>
                <p>Frontend developer</p>
                <div className='actions'>
                    <a href={fileUrl} target="_blank"><LightButton title={'Pobierz CV'} /></a>
                    <div onClick={() => scrollTo({
                            top: document.documentElement.scrollHeight,
                            behavior: 'smooth'
                    })}><DarkButton title={'Kontakt'} /></div>
                </div>
                <div className="socials">
                    <div><a href="https://github.com/LiubomyrVV"  target="_blank"><i className="bi bi-github"></i></a></div>
                    <div><a href="https://t.me/+Y2DY67oz-dJjNmFk"  target="_blank"><i className="bi bi-telegram"></i></a></div>
                </div>
            </figcaption>
        </figure>
    </StyledMain>
    
    )
}

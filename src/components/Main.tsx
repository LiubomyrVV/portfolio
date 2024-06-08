import { DarkButton } from "../UI/DarkButton"
import { LightButton } from "../UI/LightButton"

import { StyledMain } from "./styles/Main.styled"


const fileUrl = '/file.pdf'; // Replace with the path to your file
const fileName = 'Liubomyr_Vernyk.pdf';
export const Main = () => {
    return (
        <StyledMain>
        <figure>
            <div className='image-container'>
                <img src='public\Main.jpg' alt="" />
            </div>
            <figcaption>
                <p>Cześć, jestem</p>
                <h2>Liubomyr Vernyk</h2>
                <p>Frontend developer</p>
                <div className='actions'>
                    <a><LightButton title={'Pobierz CV'} /></a>
                    <div onClick={() => scrollTo({
                            top: document.documentElement.scrollHeight,
                            behavior: 'smooth'
                    })}><DarkButton title={'Kontakt'} /></div>
                </div>
                <div className="socials">
                    <div><a href="https://github.com/LiubomyrVV"><i className="bi bi-github"></i></a></div>
                    <div><a href="https://t.me/+Y2DY67oz-dJjNmFk"><i className="bi bi-telegram"></i></a></div>
                </div>
            </figcaption>
        </figure>
    </StyledMain>
    
    )
}

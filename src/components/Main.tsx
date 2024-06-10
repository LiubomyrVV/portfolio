
import { DarkButton } from "../UI/DarkButton"
import { LightButton } from "../UI/LightButton"
import { Reveal } from "./Reveal";

import { StyledMain } from "./styles/Main.styled"
import useResize from "../hooks/useResize";


const fileUrl = '/cv.pdf'; 

const slideRight = { hidden:{x:-25}, visible:{x:0}}


let delayDefault: number;
export const Main = () => {
    const [width] = useResize()
    
    delayDefault = (width ? width : 0) <= 1175 ? 0 : 1
    console.log(delayDefault)
    return (
        <Reveal>
        <StyledMain>
        <figure>
            <div className='image-container'>
            <Reveal {...slideRight} transition={{duration: 1, delay: delayDefault + 0.4}}>
                <img src='/Main.jpg' alt="" />
            </Reveal>
            </div>
            <figcaption>
                <Reveal {...slideRight} transition={{delay:delayDefault + 0.4}}><p>Cześć, jestem</p></Reveal>
                <Reveal {...slideRight} transition={{delay:delayDefault + 0.8}}><h2>Liubomyr Vernyk</h2></Reveal>
                <Reveal {...slideRight} transition={{delay:delayDefault + 1.2}}><p>Frontend developer</p></Reveal>

                <Reveal {...slideRight} transition={{delay:delayDefault + 1.6}}><div className='actions'>
                    <a href={fileUrl} target="_blank"><LightButton title={'Pobierz CV'} /></a>
                    <div onClick={() => scrollTo({
                            top: document.documentElement.scrollHeight,
                            behavior: 'smooth'
                    })}><DarkButton title={'Kontakt'} /></div>
                </div>
                </Reveal>
                <Reveal {...slideRight} transition={{delay:delayDefault + 2}}>
                <div className="socials">
                    <div><a href="https://github.com/LiubomyrVV"  target="_blank"><i className="bi bi-github"></i></a></div>
                    <div><a href="https://t.me/+Y2DY67oz-dJjNmFk"  target="_blank"><i className="bi bi-telegram"></i></a></div>
                </div>
              
                </Reveal>
            </figcaption>
        </figure>
        </StyledMain>
        </Reveal>
    )
}

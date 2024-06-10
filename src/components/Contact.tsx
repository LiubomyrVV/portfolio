import { Reveal } from "./Reveal"
import { StyledContact } from "./styles/Contact.styled"
const slideRight = { hidden:{x:-25}, visible:{x:0}}

export const Contact = () => {
   

  return (
    <Reveal >   
    <StyledContact>
    <div className='section-title'>
        <Reveal {...slideRight} transition={{delay: 0.4}}><p>Skontaktuj się</p></Reveal>
        <Reveal {...slideRight} transition={{delay: 0.8}}><h2>Kontakt</h2></Reveal>
    
    </div>
    <Reveal {...slideRight} transition={{delay: 1.2}}>
    <article>
        <div>
            <Reveal width='fit-content' transition={{delay: 1.4}}><i className="bi bi-envelope"></i></Reveal>
            <Reveal width='fit-content' transition={{delay: 1.8}}><a href='mailto:liubomyrpoland@gmail.com' target="_blank">liubomyrpoland@gmail.com</a></Reveal>
        </div>
        <div>
            <Reveal width='fit-content' transition={{delay: 1.4}}><i className="bi bi-telegram"></i></Reveal>
            <Reveal width='fit-content' transition={{delay: 1.8}}><a href="https://t.me/+Y2DY67oz-dJjNmFk" target="_blank">Telegram</a></Reveal>
        </div>
    </article>
    </Reveal>
    </StyledContact>
    </Reveal>
  )
}

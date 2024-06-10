
import { Reveal } from "./Reveal"
import { StyledAbout } from "./styles/About.styled"


const DESCRIPTION = `Cześć! Uczę się Front End Developmentu i pasjonuję się IT. Cały wolny czas programuję, uczę się nowych technologii i doskonalę swoje umiejętności. Jestem pracowity, szybko rozwiązuję problemy, lubię pracę w zespole i wyzwania. Gotowy do pracy!`

  const slideRight = {hidden:{x:25}, visible:{x:0}}
export const About = () => {  
  return (
    <>
    <Reveal>
    <StyledAbout>
        <>
        <div className='section-title'>
        <Reveal {...slideRight} transition={{delay: 0.4}}><p>Dowiedz się wiecęj</p></Reveal>
        <Reveal {...slideRight} transition={{delay: 0.8}}><h2>O Mnie</h2></Reveal>
      </div>
      <section>
        <div> <Reveal hidden={{x:-25}} visible={{x:0}} transition={{delay: 0.8}}><img src='/About.jpg'alt="" width='320px' /></Reveal></div>
        <section className="description-section">
          <div className="carts">
          <Reveal transition={{delay: 1.2}}>
            <>
              <i className="bi bi-book"></i>
              <h2>Nauka</h2>
              <p>
                2+ lata
                <br />
                Samodzielnej nauki
                <br />
                Programowania Stron Internetowych
              </p>
            </>
            </Reveal>
            <Reveal transition={{delay: 1.6}}>
            <>
              <i className="bi bi-people"></i>
              <h2>Doświadczenie</h2>
              <p>
                1 rok
                <br />
                Programowania Trudniejszych
                <br />
                Projektów Front End
              </p>
            </>
            </Reveal>
          </div>
          <Reveal transition={{delay: 1.8}}>
          <p className="description">{DESCRIPTION}</p>
          </Reveal>
        </section>
      </section>
        </>
     
    </StyledAbout>
    </Reveal>
    </>
  )
}

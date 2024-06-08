
import { StyledAbout } from "./styles/About.styled"


const DESCRIPTION = `Cześć! Uczę się Front End Developmentu i pasjonuję się IT. Cały wolny czas programuję, uczę się nowych technologii i doskonalę swoje umiejętności. Jestem pracowity, szybko rozwiązuję problemy, lubię pracę w zespole i wyzwania. Gotowy do pracy!`



export const About = () => {
  return (
    <>
    <StyledAbout>
      
      <div className='section-title'>
        <p>Dowiedz się wiecęj</p>
        <h2>O Mnie</h2>
      </div>
      <section>
        <div><img src='/About.jpg'alt="" width='320px' /></div>
        <section className="description-section">
          <div className="carts">
            <div>
              <i className="bi bi-book"></i>
              <h2>Nauka</h2>
              <p>
                2+ lata
                <br />
                Samodzielnej nauki
                <br />
                Programowania Stron Internetowych
              </p>
            </div>
            <div>
              <i className="bi bi-people"></i>
              <h2>Doświadczenie</h2>
              <p>
                1 rok
                <br />
                Programowania Trudniejszych
                <br />
                Projektów Front End
              </p>
            </div>
          </div>
          <p className="description">{DESCRIPTION}</p>
        </section>
      </section>
    </StyledAbout>
    </>
  )
}

import { useState } from "react"
import NAVIGATION from "../constants/navigation"
import { StyledAbout } from "./styles/About.styled"
import { PopupWindow } from "./PopupWindow.js"

const IMAGE_URL = 'https://dthezntil550i.cloudfront.net/zb/latest/zb2301251751280110011255165/1280_960/3e4f88a7-98b3-4ec3-8927-211bee139dbc.jpg'
const DESCRIPTION = `Cześć! Jestem samoukiem w dziedzinie Front End Developmentu. 
Bardzo podoba mi się programowanie i widzę swoją przyszłość wyłącznie w tej branży. 
Cały swój wolny czas poświęcam na programowanie. Pasjonuje mnie IT, stale uczę się nowych technologii i 
dążę do doskonalenia się jako specjalista.
Jestem pracowity, szybko radzę sobie z problemami technicznymi, 
lubię pracować w zespole i nie boję się nowych wyzwań. Jestem gotowy do pracy i nauki!`



import { screen } from "../functions/Screen.js"

export const About = () => {
  const [isEducationVisible, setIsEducationVisible] = useState(false);

  return (
    <>
    
    {isEducationVisible ? <PopupWindow section={'O mnie'} setValue={setIsEducationVisible} value={isEducationVisible}/>  : null}
    <StyledAbout>
      
      <div className='section-title'>
        <p>Dowiedz się wiecęj</p>
        <h2>O Mnie</h2>
      </div>
      <section>
        <div><img src='public/About.jpg'alt="" width='320px' /></div>
        <section className="description-section">
          <div className="carts">
            <div onClick={() => {
              
              setIsEducationVisible(!isEducationVisible)
                screen.disableScroll()
              }}>
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
            <div onClick={() => {
              window.scrollTo({
                top: NAVIGATION.find(({ name }) => name === 'Doświadczenie')?.position,
                left: 0,
                behavior: 'smooth',
              })
            }}>
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

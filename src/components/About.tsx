import { useState } from "react"
import NAVIGATION from "../constants/navigation"
import { StyledAbout } from "./styles/About.styled"
import { PopupWindow } from "./PopupWindow.js"

const IMAGE_URL = 'https://dthezntil550i.cloudfront.net/zb/latest/zb2301251751280110011255165/1280_960/3e4f88a7-98b3-4ec3-8927-211bee139dbc.jpg'
const DESCRIPTION = `Lorem ipsum dolor sit amet consectetur adipisicing elit.
 Hic quis reprehenderit et laborum, rem, dolore eum quod voluptate exercitationem nobis,
  nihil esse debitis maxime facere minus sint delectus velit in eos quo officiis explicabo 
  deleniti dignissimos. Eligendi illum libero dolorum cum laboriosam corrupti quidem,
   reiciendis ea magnam? Nulla, impedit fuga!`



import { screen } from "../functions/Screen.js"

export const About = () => {
  const [isEducationVisible, setIsEducationVisible] = useState(false);

  return (
    <>
    
    {isEducationVisible ? <PopupWindow section={'About'} setValue={setIsEducationVisible} value={isEducationVisible}/>  : null}
    <StyledAbout>
      
      <div className='section-title'>
        <p>Get To Know More</p>
        <h2>About Me</h2>
      </div>
      <section>
        <div><img src={IMAGE_URL} alt="" width='320px' /></div>
        <section className="description-section">
          <div className="carts">
            <div onClick={() => {
              
              setIsEducationVisible(!isEducationVisible)
                screen.disableScroll()
              }}>
              <i className="bi bi-book"></i>
              <h2>Education</h2>
              <p>
                2+ year
                <br />
                of self-taught
                <br />
                Web Developing learning.
              </p>
            </div>
            <div onClick={() => {
              window.scrollTo({
                top: NAVIGATION.find(({ name }) => name === 'Experience')?.position,
                left: 0,
                behavior: 'smooth',
              })
            }}>
              <i className="bi bi-people"></i>
              <h2>Experience</h2>
              <p>
                6+ month
                <br />
                of developing as
                <br />
                Frontend Developer
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

import { DarkButton } from "../UI/DarkButton"
import { LightButton } from "../UI/LightButton"
import { Reveal } from "./Reveal"
import { StyledProjects } from "./styles/Projects.styled"
const IMAGE_URL = 'https://i.pinimg.com/originals/57/4c/67/574c67c1d8816141746e845f06ecc04d.jpg'
const slideLeft = {hidden:{x:25}, visible:{x:0}}

export const Projects = () => {
  return (
    <Reveal>
    <StyledProjects> 
        <div className='section-title'>
            <Reveal {...slideLeft} transition={{delay: 0.4}}><p>Przeglądaj moje ostatnie</p></Reveal>
            <Reveal {...slideLeft} transition={{delay: 0.8}}><h2>Projekty</h2></Reveal>
        </div>
        <Reveal {...slideLeft} transition={{delay: 1.2}}>
        <div className="projects-list">
            <article>
                <figure>
                    <img src='/petproject.png' alt="" />
                    <div className="overlay"></div>
                </figure>
                <h3>Blog Website</h3>
                <div className="actions">
                    <a href="https://github.com/LiubomyrVV/blog-website" target="_blank"><LightButton title={'Github'}/></a>
                    <a href="https://blog-website-client-psi.vercel.app" target="_blank"><DarkButton title={'Demo'}/></a>
                </div>
            </article>
            <article>
                <figure>
                    <img src={IMAGE_URL} alt="" />
                    <div className="overlay"></div>
                </figure>
                <h3>Soon..</h3>
                <div className="actions">
                <a href="https://github.com/onlinestoreteam567/major" target="_blank"><LightButton title={'Github'}/></a>
                <a href="https://major-gamma.vercel.app/" target="_blank"><DarkButton title={'Demo'}/></a>
                </div>
            </article>
            <article>
                <figure>
                    <img src={IMAGE_URL} alt="" />
                    <div className="overlay"></div>
                </figure>
                <h3>Soon..</h3>
                <div className="actions">
                    <LightButton title={'Github'}/>
                    <DarkButton  title={'Demo'}/>
                </div>
            </article>
        </div>
        </Reveal>
          
    </StyledProjects>
    </Reveal>

  )
}

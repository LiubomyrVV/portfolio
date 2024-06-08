import { DarkButton } from "../UI/DarkButton"
import { LightButton } from "../UI/LightButton"
import { StyledProjects } from "./styles/Projects.styled"
const IMAGE_URL = 'https://i.pinimg.com/originals/57/4c/67/574c67c1d8816141746e845f06ecc04d.jpg'
export const Projects = () => {
  return (
    <StyledProjects>
        <div className='section-title'>
            <p>Przeglądaj moje ostatnie</p>
            <h2>Projekty</h2>
        </div>
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
                    <LightButton title={'Github'}/>
                    <DarkButton title={'Demo'}/>
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
    </StyledProjects>

  )
}

import { DarkButton } from "../UI/DarkButton"
import { LightButton } from "../UI/LightButton"
import { StyledProjects } from "./styles/Projects.styled"
const IMAGE_URL = 'https://wallpapers.com/images/featured/4k-oaax18kaapkokaro.jpg'
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
                    <img src={IMAGE_URL} alt="" />
                </figure>
                <h3>Sklep</h3>
                <div className="actions">
                    <LightButton title={'Github'}/>
                    <DarkButton onClick={()=>{}} title={'Demo'}/>
                </div>
            </article>
            <article>
                <figure>
                    <img src={IMAGE_URL} alt="" />
                </figure>
                <h3>Sklep</h3>
                <div className="actions">
                    <LightButton title={'Github'}/>
                    <DarkButton onClick={()=>{}} title={'Demo'}/>
                </div>
            </article>
            <article>
                <figure>
                    <img src={IMAGE_URL} alt="" />
                </figure>
                <h3>Sklep</h3>
                <div className="actions">
                    <LightButton title={'Github'}/>
                    <DarkButton onClick={()=>{}} title={'Demo'}/>
                </div>
            </article>
        </div>
    </StyledProjects>

  )
}

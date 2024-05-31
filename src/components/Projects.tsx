import { LightButton } from "../UI/LightButton"
import { StyledProjects } from "./styles/Projects.styled"
const IMAGE_URL = 'https://wallpapers.com/images/featured/4k-oaax18kaapkokaro.jpg'
export const Projects = () => {
  return (
    <StyledProjects>
        <div className='section-title'>
          <p>Browse My Recent</p>
          <h2>Projects</h2>
        </div>
        <div className="projects-list">
            <article>
                <figure>
                    <img src={IMAGE_URL} alt="" />
                </figure>
                <h3>Shop</h3>
                <div className="actions">
                    <LightButton title={'Github'}/>
                    <LightButton title={'Live Demo'}/>
                </div>
            </article>
            <article>
                <figure>
                    <img src={IMAGE_URL} alt="" />
                </figure>
                <h3>Shop</h3>
                <div className="actions">
                    <LightButton title={'Github'}/>
                    <LightButton title={'Live Demo'}/>
                </div>
            </article>
            <article>
                <figure>
                    <img src={IMAGE_URL} alt="" />
                </figure>
                <h3>Shop</h3>
                <div className="actions">
                    <LightButton title={'Github'}/>
                    <LightButton title={'Live Demo'}/>
                </div>
            </article>
        </div>
    </StyledProjects>
  )
}

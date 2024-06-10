import { Reveal } from './Reveal'
import { StyledExperience } from './styles/Experience.styled'
const slideLeft = { hidden:{x:25}, visible:{x:0}}
export const Experience = () => {
  return (
    <>
    <Reveal>
    <StyledExperience>
      <div className='section-title'>
      <Reveal {...slideLeft} transition={{delay: 0.4}}><p>Technologie które używam</p></Reveal>
      <Reveal {...slideLeft} transition={{delay: 0.8}}><h2>Doświadczenie</h2></Reveal>

      </div>
      <Reveal {...slideLeft} transition={{delay: 1.2}}>
      <div className='carts'>
        
        <div>
            <h3>Umiejętności Frontendowe</h3>
        <article>
        <i className="bi bi-patch-check"></i>
        <div>
            <h4>HTML</h4>
            <p>Doświadczony</p>
        </div>
        </article>
        <article>
            <i className="bi bi-patch-check"></i>
            <div>
                <h4>CSS</h4>
                <p>Doświadczony</p>
            </div>
        </article>
        <article>
            <i className="bi bi-patch-check"></i>
            <div>
                <h4>JavaScript</h4>
                <p>Doświadczony</p>
            </div>
        </article>
        <article>
            <i className="bi bi-patch-check"></i>
            <div>
                <h4>SASS</h4>
                <p>Doświadczony</p>
            </div>
        </article>
        <article>
            <i className="bi bi-patch-check"></i>
            <div>
                <h4>React</h4>
                <p>Zaawansowany</p>
            </div>
        </article>
        <article>
            <i className="bi bi-patch-check"></i>
            <div>
                <h4>TypeScript</h4>
                <p>Podstawowy</p>
            </div>
        </article>
        </div>
        <div>
            <h3>Inne Umiejętności</h3>
            <article>
                <i className="bi bi-patch-check"></i>
                <div>
                    <h4>Angielski</h4>
                    <p>Zaawansowany</p>
                </div>
            </article>
            <article>
                <i className="bi bi-patch-check"></i>
                <div>
                    <h4>Visual Studio Code</h4>
                    <p>Zaawansowany</p>
                </div>
            </article>
            <article>
                <i className="bi bi-patch-check"></i>
                <div>
                    <h4>Git</h4>
                    <p>Zaawansowany</p>
                </div>
            </article>
            <article>
                <i className="bi bi-patch-check"></i>
                <div>
                    <h4>REST API</h4>
                    <p>Zaawansowany</p>
                </div>
            </article>
            <article>
                <i className="bi bi-patch-check"></i>
                <div>
                    <h4>Node.js</h4>
                    <p>Podstawowy</p>
                </div>
            </article>
            <article>
                <i className="bi bi-patch-check"></i>
                <div>
                    <h4>SQL</h4>
                    <p>Podstawowy</p>
                </div>
            </article>
            </div>
        </div>
        </Reveal>
    </StyledExperience>
    </Reveal>
    </>
  )
}

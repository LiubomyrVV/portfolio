import { useState } from 'react'
import { StyledExperience } from './styles/Experience.styled'
import { PopupWindow } from './PopupWindow'

export const Experience = () => {
    const [isFirstSectionOpen, setIsFirstSectionOpen] = useState(false)
    const [isSecondSectionOpen, setIsSecondSectionOpen] = useState(false)

    const firstSectionClick = () => {       
        setIsFirstSectionOpen(!isFirstSectionOpen)
    }
    const secondSectionClick = () => {
        setIsSecondSectionOpen(!isSecondSectionOpen)
    }
  return (
    <>
    {isFirstSectionOpen ? <PopupWindow section='Experience' setValue={setIsFirstSectionOpen} value={isFirstSectionOpen} /> : null}
    {isSecondSectionOpen ? <PopupWindow section='Experience' setValue={setIsSecondSectionOpen} value={isSecondSectionOpen} /> : null}
    <StyledExperience>
        <div className='section-title'>
          <p>Explore My</p> 
          <h2>Experience</h2>
      </div>
      <div className='carts'>
        <div onClick={firstSectionClick}>
            <h3>Frontend Skills</h3>
            <article>
                <i className="bi bi-patch-check"></i>
                <div>
                    <h4>HTML</h4>
                    <p>Experienced</p>
                </div>
            </article>
            <article>
                <i className="bi bi-patch-check"></i>
                <div>
                    <h4>CSS</h4>
                    <p>Experienced</p>
                </div>
            </article>
            <article>
                <i className="bi bi-patch-check"></i>
                <div>
                    <h4>JavaScript</h4>
                    <p>Experienced</p>
                </div>
            </article>
            <article>
                <i className="bi bi-patch-check"></i>
                <div>
                    <h4>SASS</h4>
                    <p>Experienced</p>
                </div>
            </article>
            <article>
                <i className="bi bi-patch-check"></i>
                <div>
                    <h4>React</h4>
                    <p>Intermediate</p>
                </div>
            </article>
            <article>
                <i className="bi bi-patch-check"></i>
                <div>
                    <h4>TypeScript</h4>
                    <p>Basic</p>
                </div>
            </article>
        </div>
        <div onClick={secondSectionClick}>
            <h3>Other Skills</h3>
            <article>
                <i className="bi bi-patch-check"></i>
                <div>
                    <h4>English</h4>
                    <p>Advanced</p>
                </div>
            </article>
            <article>
                <i className="bi bi-patch-check"></i>
                <div>
                    <h4>Visual Studio Code</h4>
                    <p>Advanced</p>
                </div>
            </article>
            <article>
                <i className="bi bi-patch-check"></i>
                <div>
                    <h4>Git</h4>
                    <p>Intermediate</p>
                </div>
            </article>
            <article>
                <i className="bi bi-patch-check"></i>
                <div>
                    <h4>Node.js</h4>
                    <p>Basic</p>
                </div>
            </article>
            <article>
                <i className="bi bi-patch-check"></i>
                <div>
                    <h4>Webpack</h4>
                    <p>Basic</p>
                </div>
            </article>
            <article>
                <i className="bi bi-patch-check"></i>
                <div>
                    <h4>Vite.js</h4>    
                    <p>Basic</p>
                </div>
            </article>
        </div>
      </div>
    </StyledExperience>
    </>
  )
}

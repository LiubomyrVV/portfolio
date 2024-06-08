import { useRef } from 'react';
import './App.css'
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Experience } from './components/Experience';
import { Footer } from './components/Footer';
import { Header } from './components/Header'
import { Main } from './components/Main';
import { Projects } from './components/Projects';
import { SideNavigationButton } from './UI/SideNavigationButton';
import { useResizeObserver } from 'usehooks-ts';


const navigationDropWidth = 1000;
const App = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { width = 0 } = useResizeObserver({
    ref: containerRef,
    box: 'border-box',
  })

  return (
    <>
      {width >= navigationDropWidth ? <Header /> : null}
      <div className='container' ref={containerRef}>
        <Main />
        <About />
        <Experience />
        <Projects />
        <Contact />
        {width >= navigationDropWidth ? <Footer /> : null}  
      </div>

    {width >= navigationDropWidth ? <SideNavigationButton /> : null}
    </>
  )
}

export default App;


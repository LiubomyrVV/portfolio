import { useEffect, useRef, useState } from 'react';
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



const App = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { width = 0 } = useResizeObserver({
    ref: containerRef,
    box: 'border-box',
  })

  return (
    <>
        <Header />
      <div className='container' ref={containerRef}>
        <Main />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Footer />   
      </div>

    {width >= 956 ? <SideNavigationButton /> : null}
    </>
  )
}

export default App;


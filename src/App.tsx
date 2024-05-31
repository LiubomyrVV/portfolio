import { useEffect } from 'react';
import './App.css'
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Experience } from './components/Experience';
import { Footer } from './components/Footer';
import { Header } from './components/Header'
import { Main } from './components/Main';
import { Projects } from './components/Projects';
import { SideNavigationButton } from './UI/SideNavigationButton';


const App = () => {
  useEffect(() => {
    console.log(window.scrollY)
  
  }, [])
  return (
    <>
      <Header />
    <div className='container'>
      
      <Main />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
    <SideNavigationButton />
    </>
  )
}

export default App;


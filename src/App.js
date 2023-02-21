import './App.css';
import {useState, useEffect, useRef} from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Numbers from './components/Numbers'
import About from './components/About'
import Projects from './components/Projects'
import Services from './components/Services'
import Skills from './components/Skills'
import Contact from './components/Contact'


function App() {

    const [height, setHeight] = useState(0)
    const ref = useRef(null)

    useEffect(() => {
      setHeight(ref.current.clientHeight)
    },[])


  return (
    <div id="home" className="flex flex-col sm:flex-row relative font-fira bg-darker-900 scroll-smooth">
      <Header/>
      <Numbers height={height}/>
      
      <div id='pageWrapper' ref={ref} className='relative left-14 sm:none sm:left-0 flex-col leading-6 m-2 w-10/12 sm:w-8/12  text-white'>
        <Hero/>
        <About/>
        <Projects/>
        <Skills/>
        <Services/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;

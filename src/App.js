import './App.css';
import { useState, useEffect } from 'react'
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

  function getTotalLineHeight(element) {
    const style = getComputedStyle(element);
    const lineHeight = parseInt(style.height)
    
    //const divHeight = +style.offsetHeight
    return Number(lineHeight)
  }

  const [lineHeight, setLineHeight] = useState(null);

  useEffect(() => {

    const element = document.getElementById('pageWrapper');
    const totalLineHeight = getTotalLineHeight(element);
    setLineHeight(totalLineHeight);
  }, []);
  
  console.log(lineHeight)
  return (
    <div className="flex flex-col sm:flex-row relative font-fira bg-darker-900 ">
      <Header/>
      <Numbers getTotalLineHeight={lineHeight}/>
      
      <div id='pageWrapper' className='relative left-14 sm:none sm:left-0 flex-col leading-6 m-4 w-3/4 sm:w-2/3 text-white'>
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

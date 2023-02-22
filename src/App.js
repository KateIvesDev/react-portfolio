import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Services from './components/Services'
import Skills from './components/Skills'
import Contact from './components/Contact'


function App() {

  return (
    <div id="home" className="flex flex-col sm:flex-row relative font-fira bg-darker-900 scroll-smooth">
      <Header/>
      {/* <Numbers height={height}/> */}
      
      <div id='pageWrapper' className='relative  flex flex-col w-[85%] px-8 text-white mx-auto'>
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

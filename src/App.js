import './App.css';
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

  return (
    <div id="home" className="flex flex-col sm:flex-row relative font-fira bg-darker-900 scroll-smooth">
      <Header/>
      <Numbers/>
      
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

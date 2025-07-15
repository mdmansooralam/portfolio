
import './App.css'
import About from './components/About'
import Banner from './components/Banner'
import Header from './components/Header'
import Skills from './components/Skills'
import Testimonials from './components/Testimonials'
import Projects from './components/Projects'
import Experience from './components/Experience'

function App() {

  return (
    <>
       <Header />
       <div className='pt-14'>
        
        <Banner />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Testimonials />
       </div>
    </>
  )
}

export default App

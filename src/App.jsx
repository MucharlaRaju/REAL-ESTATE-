import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Testimonails from './components/Testimonails'
import Contact from './components/Contact'
import { ToastContainer} from 'react-toastify';
import Footer from './components/Footer'


const App = () => {
  return (
    <main className='w-full overflow-hidden'>
      <ToastContainer />
      <Header/>
      <About/>
      <Projects/>
      <Testimonails/>
      <Contact/>
      <Footer/>
    </main>
  )
}

export default App

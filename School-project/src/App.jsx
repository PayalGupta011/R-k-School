import { useState, useEffect } from 'react'
import './App.css'
// Imported layout components (including the new Admissions Journey component)
import Navbar       from './components/Navbar/Navbar'
import Hero         from './components/Hero/Hero'
import About        from './components/About/About'
import Journey      from './components/Journey/Journey'
import Stats        from './components/Stats/Stats'
import Testimonials from './components/Testimonials/Testimonials'
import Contact      from './components/Contact/Contact'
import Footer       from './components/Footer/Footer'
import Programs     from './components/Programs/Programs'
import Admissions   from './components/Admissions/Admissions'

function App() {
  const [view, setView] = useState('home')

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash
      const rootElement = document.getElementById('root')
      
      if (hash === '#programs') {
        setView('programs')
        if (rootElement) {
          rootElement.scrollTop = 0
          rootElement.style.scrollSnapType = 'none' // Disable scroll snapping on programs page
        }
      } else if (hash === '#admission') {
        setView('admissions')
        if (rootElement) {
          rootElement.scrollTop = 0
          rootElement.style.scrollSnapType = 'none' // Disable scroll snapping on admissions page
        }
      } else if (hash === '#contact') {
        setView('contact')
        if (rootElement) {
          rootElement.scrollTop = 0
          rootElement.style.scrollSnapType = 'none' // Disable scroll snapping on contact page
        }
      } else {
        setView('home')
        if (rootElement) {
          rootElement.style.scrollSnapType = 'y mandatory' // Restore snap flow for the beautiful home page timeline
        }
      }
    }

    window.addEventListener('hashchange', handleHashChange)
    handleHashChange() // Run initially

    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  return (
    <>
      <Navbar currentView={view} />

      {view === 'home' ? (
        <main>
          <Hero />
          <About />
          <Journey />
          <Stats />
          <Testimonials />
          <Footer />
        </main>
      ) : view === 'programs' ? (
        <main className="standalone-page">
          <Programs />
          <Footer standalone={true} />
        </main>
      ) : view === 'admissions' ? (
        <main className="standalone-page">
          <Admissions />
          <Footer standalone={true} />
        </main>
      ) : (
        <main className="standalone-page">
          <Contact />
          <Footer standalone={true} />
        </main>
      )}
    </>
  )
}

export default App

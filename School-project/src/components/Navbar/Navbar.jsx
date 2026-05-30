import { useState, useEffect } from 'react'
import logoImg from '../../assets/logo.png'
import './Navbar.css'

function Navbar({ currentView }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  useEffect(() => {
    const rootElement = document.getElementById('root')
    
    const handleScroll = () => {
      const rootScroll = rootElement ? rootElement.scrollTop : 0
      const winScroll = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      const scrollTop = Math.max(rootScroll, winScroll)
      
      if (scrollTop > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    if (rootElement) {
      rootElement.addEventListener('scroll', handleScroll)
    }
    window.addEventListener('scroll', handleScroll)
    document.addEventListener('scroll', handleScroll)
    
    handleScroll() // Check initial scroll state

    return () => {
      if (rootElement) {
        rootElement.removeEventListener('scroll', handleScroll)
      }
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('scroll', handleScroll)
    }
  }, [currentView])

  return (
    <nav className={`navbar ${isScrolled || isMobileMenuOpen ? 'navbar-scrolled' : 'navbar-transparent'} ${isMobileMenuOpen ? 'navbar-mobile-open' : ''}`} role="navigation" aria-label="Main navigation">
      <div className="navbar-inner">

        {/* Logo + Brand */}
        <a href="#home" className="navbar-brand" id="navbar-brand" onClick={closeMobileMenu}>
          <img src={logoImg} alt="RK School Logo" className="navbar-logo-img" />
          <div className="navbar-brand-text">
            <span className="school-name">RK School</span>
            <span className="school-sub">Excellence in Education</span>
          </div>
        </a>

        {/* Hamburger Menu Icon */}
        <button 
          className={`navbar-toggle ${isMobileMenuOpen ? 'toggle-active' : ''}`} 
          onClick={toggleMobileMenu}
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          <span className="toggle-bar"></span>
          <span className="toggle-bar"></span>
          <span className="toggle-bar"></span>
        </button>

        {/* Nav Links */}
        <ul className={`navbar-nav ${isMobileMenuOpen ? 'nav-active' : ''}`}>
          <li>
            <a 
              href="#home" 
              className={`nav-link ${currentView === 'home' ? 'active' : ''}`} 
              id="nav-home"
              onClick={closeMobileMenu}
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#programs" 
              className={`nav-link ${currentView === 'programs' ? 'active' : ''}`} 
              id="nav-programs"
              onClick={closeMobileMenu}
            >
              Programs
            </a>
          </li>
          <li><a href="#courses" className="nav-link" id="nav-courses" onClick={closeMobileMenu}>Courses</a></li>
          <li>
            <a 
              href="#admission"  
              className={`nav-link ${currentView === 'admissions' ? 'active' : ''}`} 
              id="nav-admission"
              onClick={closeMobileMenu}
            >
              Admissions
            </a>
          </li>
          <li>
            <a 
              href="#contact"    
              className={`nav-link ${currentView === 'contact' ? 'active' : ''}`} 
              id="nav-contact"
              onClick={closeMobileMenu}
            >
              Contact
            </a>
          </li>
          <li className="mobile-cta-wrap">
            <a 
              href="#admission" 
              className={`btn-admission ${currentView === 'admissions' ? 'active' : ''}`} 
              id="nav-cta"
              onClick={closeMobileMenu}
            >
              Admission Open ↗
            </a>
          </li>
        </ul>

      </div>
    </nav>
  )
}

export default Navbar

import logoImg from '../../assets/logo.png'
import './Footer.css'

function Footer({ standalone }) {
  return (
    <footer className={`footer ${standalone ? 'footer-standalone' : ''}`}>
      <div className="footer-inner">

        <div className="footer-top">

          {/* ── Brand ── */}
          <div className="footer-brand">
            <div className="footer-logo">
              <img src={logoImg} alt="RK School Logo" className="footer-logo-img" />
              <span className="footer-brand-name">RK School</span>
            </div>
            <p className="footer-tagline">
              Shaping the next generation of leaders, thinkers, and
              innovators since 2001.
            </p>
            <div className="footer-social">
              <button className="social-btn" aria-label="Facebook">f</button>
              <button className="social-btn" aria-label="Instagram">in</button>
              <button className="social-btn" aria-label="Twitter">𝕏</button>
            </div>
          </div>

          {/* ── Quick Links ── */}
          <div className="footer-col">
            <h5>Quick Links</h5>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#programs">Academics</a></li>
              <li><a href="#courses">Courses</a></li>
              <li><a href="#admission">Admissions</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>

          {/* ── Contact ── */}
          <div className="footer-col">
            <h5>Contact Us</h5>
            <ul>
              <li>123 Education Blvd, Knowledge Park, New Delhi — 110001</li>
              <li>admission@rkschool.edu.in</li>
              <li>Phone: +91 9876 543-210</li>
            </ul>
          </div>

          {/* ── Newsletter ── */}
          <div className="footer-col">
            <h5>Newsletter</h5>
            <ul>
              <li>Stay updated with our latest news, events and announcements.</li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p>© 2026 RK School — All rights reserved.</p>
        </div>

      </div>
    </footer>
  )
}

export default Footer

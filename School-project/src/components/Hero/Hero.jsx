import './Hero.css'
import heroCover from '../../assets/Hero-cover.jpeg'

function Hero() {
  return (
    <section className="hero-section" id="home">

      {/* ── Full-bleed background image ── */}
      <div className="hero-bg">
        <img
          src={heroCover}
          alt="RK School Campus"
          className="hero-bg-img"
        />
        <div className="hero-overlay" />
      </div>

      {/* ── Centered content ── */}
      <div className="hero-center">

        {/* Badge */}
        <div className="hero-badge">🎒 PLAY SCHOOL TO GRADE 8</div>

        {/* Heading */}
        <h1 className="hero-title">
          Where Happy Beginnings
          <span className="hero-title-sub">Lead to Bright Futures</span>
        </h1>

        {/* Description */}
        <p className="hero-desc">
          A premium second home combining joyful discovery with academic curiosity to nurture happy, creative, and confident thinkers.
        </p>

        {/* CTA Buttons */}
        <div className="hero-btns">
          <a href="#admission" className="btn-primary" id="hero-apply-btn">
            Apply Now
            <span className="arrow">›</span>
          </a>
          <a href="#programs" className="btn-outline-white" id="hero-learn-btn">
            Learn More ↗
          </a>
        </div>

        {/* Stats strip container with scroll hint on the side */}
        <div className="hero-stats-container">
          <div className="hero-stats-row">
            <div className="hero-stat">
              <span className="hs-num">25+</span>
              <span className="hs-label">Years of Trust</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <span className="hs-num">1:15</span>
              <span className="hs-label">Teacher-Student Ratio</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <span className="hs-num">100%</span>
              <span className="hs-label">Focused on Child Growth</span>
            </div>
          </div>

          {/* ── Scroll hint (Premium luxury computer mouse scroll!) ── */}
          <div className="hero-scroll-hint">
            <div className="scroll-mouse">
              <div className="scroll-wheel"></div>
            </div>
            <span className="scroll-text">Scroll Down</span>
          </div>
        </div>

      </div>

    </section>
  )
}

export default Hero

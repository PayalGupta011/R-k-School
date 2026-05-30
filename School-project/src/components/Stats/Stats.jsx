import { useState } from 'react'
import './Stats.css'

const STATS = [
  { 
    icon: '🏆', 
    num: '150+',   
    label: 'Sports Trophies', 
    desc: 'National & state-level athletic honors across football, abacus, and track.',
    color: '#f0ab26',
    bgLight: '#fef6e5'
  },
  { 
    icon: '🤝', 
    num: '1:15',  
    label: 'Mentorship Ratio',
    desc: 'Personalized attention ensuring no child is left behind in creative growth.',
    color: '#48b38f',
    bgLight: '#eaf7f3'
  },
  { 
    icon: '❤️', 
    num: '5000+', 
    label: 'Happy Families', 
    desc: 'Years of trusted partnership with parents in creating bright futures.',
    color: '#2c5bd6',
    bgLight: '#eef3ff',
    featured: true  
  },
  { 
    icon: '🌍', 
    num: '15+',    
    label: 'Global Programs',  
    desc: 'Collaborations and digital exchange programs connecting minds globally.',
    color: '#9b51e0',
    bgLight: '#f6efff'
  },
]

const KEY_BENEFITS = [
  {
    title: 'Nurturing Joyful Thinkers',
    text: 'We combine sensory, play-based learning with advanced concepts to make sure children fall in love with education.',
    tag: '🧠 HOLISTIC GROWTH'
  },
  {
    title: 'Next-Gen Coding & Labs',
    text: 'From Scratch & Python coding to robotics assembly and junior science laboratories, children learn by doing.',
    tag: '🚀 FUTURE READY'
  },
  {
    title: 'Certified Safety & Wellness',
    text: 'A fully secure, government-recognized second home featuring sensory gardens, empathy circle times, and clean spaces.',
    tag: '🛡️ SECURE ENVIRONMENT'
  }
]

function Stats() {
  const [hoveredIdx, setHoveredIdx] = useState(null)
  const [activeBenefit, setActiveBenefit] = useState(0)

  return (
    <section className="stats-section" id="admission">
      <div className="stats-inner">
        
        {/* Section Header */}
        <div className="stats-header-center">
          <span className="section-label">Why Choose RK School</span>
          <h2 className="section-title">
            The Pillars of <span className="text-gradient">RK Excellence</span>
          </h2>
          <p className="section-subtitle-text">
            Nurturing young minds through a premium, child-centric approach that blends scientific discovery, creative arts, and empathetic leadership.
          </p>
        </div>

        <div className="stats-grid">

          {/* ── Left Side: Interactive Benefit Accordeon/Tab ── */}
          <div className="stats-left">
            <div className="benefits-tab-list">
              {KEY_BENEFITS.map((benefit, idx) => {
                const isActive = activeBenefit === idx
                return (
                  <div 
                    key={idx}
                    className={`benefit-item ${isActive ? 'benefit-active' : ''}`}
                    onClick={() => setActiveBenefit(idx)}
                    onMouseEnter={() => setActiveBenefit(idx)}
                  >
                    <div className="benefit-indicator" />
                    <div className="benefit-content">
                      <span className="benefit-tag">{benefit.tag}</span>
                      <h3 className="benefit-title">{benefit.title}</h3>
                      <p className="benefit-text">{benefit.text}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* ── Right Side: Asymmetric Dashboard-like Stats Grid ── */}
          <div className="stats-cards-dashboard">
            {STATS.map((s, i) => {
              const isHovered = hoveredIdx === i
              return (
                <div
                  key={i}
                  id={`stat-card-${i}`}
                  className={`dashboard-stat-card ${s.featured ? 'card-featured' : ''} ${isHovered ? 'card-hovered' : ''}`}
                  style={{
                    '--accent-color': s.color,
                    '--bg-light': s.bgLight
                  }}
                  onMouseEnter={() => setHoveredIdx(i)}
                  onMouseLeave={() => setHoveredIdx(null)}
                >
                  <div className="card-top-row">
                    <span className="card-badge-icon" style={{ backgroundColor: s.featured ? 'rgba(255,255,255,0.15)' : s.bgLight }}>
                      {s.icon}
                    </span>
                    <span className="card-hover-arrow">↗</span>
                  </div>

                  <div className="card-middle-content">
                    <span className="card-counter-num">{s.num}</span>
                    <span className="card-label-txt">{s.label}</span>
                  </div>

                  <p className="card-detail-desc">{s.desc}</p>
                  
                  <div className="card-bottom-line" style={{ backgroundColor: s.color }} />
                </div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}

export default Stats

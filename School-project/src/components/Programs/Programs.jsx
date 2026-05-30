import { useState, useEffect } from 'react'
import './Programs.css'

// Importing images from assets
import nurseryImg from '../../assets/nursery.png'
import earlyYearsImg from '../../assets/early_years_new.jpg'
import foundationYearsImg from '../../assets/foundation_new.jpg'
import preparatoryYearsImg from '../../assets/preparatory_new.jpg'
import middleSchoolImg from '../../assets/middle_new.jpg'
import primaryImg from '../../assets/primary.jpg'
import secondaryImg from '../../assets/secondary.jpg'
import seniorImg from '../../assets/senior.jpg'
import campusImg from '../../assets/campus_world.png'
import logoImg from '../../assets/logo.png'
import heroBgImg from '../../assets/programs_hero_bg.jpg'

// Premium dynamic curriculum data with age badges and sub-tabs for parents
const PATHWAY_DETAILS = {
  nursery: {
    tag: 'PLAY SCHOOL & NURSERY',
    age: 'Ages 2.5 - 5 Years',
    heading: 'Early Years (Play School & Nursery)',
    desc: 'Setting the warmest foundational support for our tiny learners. We focus on play-based learning that stimulates natural curiosity, motor skill coordination, and social sharing in a secure environment.',
    highlights: ['🎨 Sensory Play', '🧩 Motor Skill Training', '🧸 Empathy & Care', '📖 Phonics Reading'],
    subjects: [
      'Early English Phonics & Word Association',
      'Introduction to Numbers, Shapes & Counting',
      'Music, Rhythm, Dance & Motor Movement',
      'Interactive Storytelling & Moral Circle-Time'
    ],
    activities: [
      'Messy Finger Painting & Sand-Pit Exploring',
      'Building Block Architecture & Puzzle Labs',
      'Puppet Theatre, Pretend Play & Costume Fun',
      'Nature Walks & Butterfly Spotting Gardens'
    ],
    goals: [
      'Fostering basic sharing, social bonding & empathy',
      'Developing fine motor skills & pencil grip foundations',
      'Expressing emotions happily and building confidence',
      'Learning primary self-care routines with joy'
    ]
  },
  foundation: {
    tag: 'COGNITIVE DEVELOPMENT',
    age: 'Ages 6 - 7 Years',
    heading: 'Foundation Years (Grades 1 & 2)',
    desc: 'Bridging early sensory learning into structured primary development. We introduce cognitive concepts through highly engaging and positive student-centric activities.',
    highlights: ['✍️ Handwriting Focus', '🧮 Math Foundations', '🌱 Nature & Science', '🎶 Early Dramatics'],
    subjects: [
      'English Prose, Phonics Reading & Sentence Building',
      'Mathematics: Tens & Ones, Simple Add/Subtract',
      'Environmental Studies (Nature, Trees, Animals & Self)',
      'Languages: Basic Vocabulary, Rhymes & Writing'
    ],
    activities: [
      'Interactive Math Games & Abacus Counting',
      'Clay Modeling, Origami & Paper Crafts',
      'Classroom Role-Play & Speech Recitation',
      'Fun Science Experiments (Water, Air, Seed Planting)'
    ],
    goals: [
      'Forming neat handwriting and reading fluid sentences',
      'Building basic computational speed & spatial logic',
      'Developing environmental consciousness & kindness',
      'Working collaboratively in small groups with smiles'
    ]
  },
  preparatory: {
    tag: 'CRITICAL INQUIRY',
    age: 'Ages 8 - 10 Years',
    heading: 'Preparatory Years (Grades 3 to 5)',
    desc: 'Developing critical inquiry, independent thought, and creative solutions. We integrate early computer science logic and live laboratory discoveries.',
    highlights: ['💻 Logical Coding', '🔬 Live Science Labs', '🧠 Reasoning Games', '🗣️ Show & Tell'],
    subjects: [
      'Advanced English Literature, Grammar & Prose',
      'Mathematics: Multiplication, Fractions, Word Problems',
      'General Science (Plants, Matter, Human Body Intro)',
      'Social Studies (Local Heritage, Maps, Festivals)'
    ],
    activities: [
      'Visual Coding (Scratch, Block Programming)',
      'Practical Lab Experiments (Magnets, Plant Biology)',
      'Creative Journaling & Poetry Writing Club',
      'Inter-House Quiz Competitions & Junior Robotics'
    ],
    goals: [
      'Fostering analytical logic and independent query skills',
      'Developing confident public speaking & articulation',
      'Strengthening abstract mathematical visualization',
      'Building regular self-study habits with interest'
    ]
  },
  middle: {
    tag: 'LEADERSHIP FOUNDATION',
    age: 'Ages 11 - 13 Years',
    heading: 'Middle School (Grades 6 to 8)',
    desc: 'Preparing older students for high school leadership with rigorous, globally benchmarked academic logic, scientific experimentation, and public speaking confidence.',
    highlights: ['🤖 Robotics Academy', '📣 Youth Debating', '📐 Pre-Algebra', '📚 Creative Writing'],
    subjects: [
      'English Rhetoric, Grammar, Composition & Classics',
      'Mathematics: Algebra, Geometry, Statistics Basics',
      'Science: Physics, Chemistry & Biology (Specialized Labs)',
      'Social Sciences: History, Civics & Physical Geography',
      'Computer Science: Web Basics & Logic Building (Python)'
    ],
    activities: [
      'Robotics Programming & Microcontroller Assembly',
      'Model United Nations (MUN) & Debating Circles',
      'School Newsletter Editorial & Drama Club',
      'Practical Field Studies, Sports Leadership & Gym'
    ],
    goals: [
      'Securing high-tier analytical & mathematical accuracy',
      'Nurturing strong leadership, empathy, and active listening',
      'Preparing students for CBSE/ICSE academic standards',
      'Developing structured reasoning and computational skills'
    ]
  }
}

// Partner Cities for global campus exchange section
const CITY_PARTNERS = {
  london: {
    name: 'London, UK',
    school: 'Royal Primary Academy',
    project: 'Virtual PenPals & Folk Exchange',
    color: '#13327a',
    desc: 'Students collaborate on co-authoring digital storybooks, sharing history and local folklore while practicing descriptive essay writing and building international penpal bonds.'
  },
  singapore: {
    name: 'Singapore',
    school: 'Greenwood Primary',
    project: 'Junior Coding & Logic Hackathon',
    color: '#48b38f',
    desc: 'Our preparatory and middle classes build collaborative Scratch coding games with Singaporean peers, solving real-world green-city civic challenges together in online hackathons.'
  },
  newyork: {
    name: 'New York, USA',
    school: 'Beacon School, NY',
    project: 'Green Planet Eco-Initiative',
    color: '#f0ab26',
    desc: 'A collaborative environmental studies project where kids track campus electricity consumption and plants, comparing urban footprints across continents to brainstorm green ideas.'
  }
}

function Programs() {
  const [selectedSyllabus, setSelectedSyllabus] = useState(null)
  const [activeModalTab, setActiveModalTab] = useState('subjects') // subjects, activities, goals
  const [activeCity, setActiveCity] = useState('london')
  const [hoveredNav, setHoveredNav] = useState(null)
  const [creativeTag, setCreativeTag] = useState(null)
  const [activeSection, setActiveSection] = useState('programs-hero')

  // IntersectionObserver to spy on scroll position and light up navigation dots dynamically
  useEffect(() => {
    const rootElement = document.getElementById('root')
    if (!rootElement) return

    const sections = ['programs-hero', 'pathway', 'beyond', 'campus', 'apply']
    const observerOptions = {
      root: rootElement,
      rootMargin: '-30% 0px -50% 0px', // Trigger active state when section passes through the center of viewport
      threshold: 0
    }

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)
    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id)
        if (el) observer.unobserve(el)
      })
    }
  }, [])

  // Smooth scroll handler to manually drive the custom #root container scrollbar
  const handleDotClick = (e, targetId) => {
    e.preventDefault()
    const targetElement = document.getElementById(targetId)
    const rootElement = document.getElementById('root')
    if (targetElement && rootElement) {
      const targetOffset = targetElement.offsetTop
      rootElement.scrollTo({
        top: targetOffset,
        behavior: 'smooth'
      })
    }
  }

  // Custom modal open helper
  const openSyllabus = (stageData) => {
    setSelectedSyllabus(stageData)
    setActiveModalTab('subjects')
  }

  return (
    <>
      {/* ── FLOATING PREMIUM MODERN INDEX NAV (User-Friendly Sidebar) ── */}
      <div className="programs-floating-nav">
        <div className="nav-dot-container">
          <a href="#programs-hero" 
             className={`nav-dot-link ${activeSection === 'programs-hero' ? 'dot-active' : ''}`}
             onClick={(e) => handleDotClick(e, 'programs-hero')}
             onMouseEnter={() => setHoveredNav('Hero')} 
             onMouseLeave={() => setHoveredNav(null)}>
            <span className="dot-circle"></span>
            {(hoveredNav === 'Hero' || activeSection === 'programs-hero') && <span className="dot-label">Start</span>}
          </a>
          <a href="#pathway" 
             className={`nav-dot-link ${activeSection === 'pathway' ? 'dot-active' : ''}`}
             onClick={(e) => handleDotClick(e, 'pathway')}
             onMouseEnter={() => setHoveredNav('Pathway')} 
             onMouseLeave={() => setHoveredNav(null)}>
            <span className="dot-circle"></span>
            {(hoveredNav === 'Pathway' || activeSection === 'pathway') && <span className="dot-label">Pathway</span>}
          </a>
          <a href="#beyond" 
             className={`nav-dot-link ${activeSection === 'beyond' ? 'dot-active' : ''}`}
             onClick={(e) => handleDotClick(e, 'beyond')}
             onMouseEnter={() => setHoveredNav('Beyond')} 
             onMouseLeave={() => setHoveredNav(null)}>
            <span className="dot-circle"></span>
            {(hoveredNav === 'Beyond' || activeSection === 'beyond') && <span className="dot-label">Beyond</span>}
          </a>
          <a href="#campus" 
             className={`nav-dot-link ${activeSection === 'campus' ? 'dot-active' : ''}`}
             onClick={(e) => handleDotClick(e, 'campus')}
             onMouseEnter={() => setHoveredNav('Campus')} 
             onMouseLeave={() => setHoveredNav(null)}>
            <span className="dot-circle"></span>
            {(hoveredNav === 'Campus' || activeSection === 'campus') && <span className="dot-label">Global</span>}
          </a>
          <a href="#apply" 
             className={`nav-dot-link ${activeSection === 'apply' ? 'dot-active' : ''}`}
             onClick={(e) => handleDotClick(e, 'apply')}
             onMouseEnter={() => setHoveredNav('Apply')} 
             onMouseLeave={() => setHoveredNav(null)}>
            <span className="dot-circle"></span>
            {(hoveredNav === 'Apply' || activeSection === 'apply') && <span className="dot-label">Enroll</span>}
          </a>
        </div>
      </div>

      {/* ── 1. PROGRAMS HERO SECTION (Fully readable high-contrast card style) ── */}
      <section className="programs-hero-section" id="programs-hero">
        <img src={heroBgImg} className="hero-bg-img" alt="Classroom background" />
        <div className="hero-vignette-overlay"></div>

        <div className="programs-hero-inner">
          <div className="hero-premium-glass-card">
            <span className="hero-label-top">
              <span className="label-line"></span>
              FOUNDATIONAL EXCELLENCE (PLAY - GRADE 8)
            </span>
            
            <h1 className="hero-serif-title">
              Nurturing Minds, <br />
              <span className="serif-italic">Shaping Futures</span>
            </h1>

            <p className="hero-subtext">
              Providing a premium, nurturing environment that bridges happy, play-based childhood exploration with world-class academic preparation.
            </p>
            
            {/* Trust Highlights Badge inside Hero */}
            <div className="hero-metrics-row">
              <div className="metric-box">
                <span className="metric-num">1:15</span>
                <span className="metric-lbl">Teacher-Student Ratio</span>
              </div>
              <div className="metric-box">
                <span className="metric-num">100%</span>
                <span className="metric-lbl">Safe & Joyful Environment</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="hero-buttons">
              <a href="#apply" className="btn-solid-blue">
                ENROLL TODAY
              </a>
              <a href="#pathway" className="btn-link-visit">
                EXPLORE CURRICULUM <span className="arrow-diagonal">↓</span>
              </a>
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="hero-scroll-indicator">
            <div className="scroll-dots"></div>
            <span className="scroll-label-text">SCROLL</span>
          </div>
        </div>
      </section>

      {/* ── 2. THE EDUCATIONAL PATHWAY (Redesigned with Premium Hover Previews) ── */}
      <section className="pathway-section" id="pathway">
        <div className="pathway-inner">
          <div className="pathway-header">
            <span className="section-label">ACADEMIC JOURNEY</span>
            <h2 className="pathway-title">Our Educational Pathway</h2>
            <p className="pathway-subtitle-desc">
              Carefully structured milestones tailored for the physiological, emotional, and cognitive growth of your child.
            </p>
            <div className="title-underline"></div>
            <span className="pathway-tip-interactive">💡 Tap on any stage to open the Interactive Syllabus Dashboard!</span>
          </div>

          <div className="pathway-grid">
            {/* Card 1: Nursery/Play School */}
            <div className="pathway-card card-nursery" onClick={() => openSyllabus(PATHWAY_DETAILS.nursery)}>
              <div className="card-image-wrap">
                <img src={earlyYearsImg} alt="Early Years (Play School & Nursery)" className="pathway-card-img" />
              </div>
              <div className="card-overlay">
                <span className="card-age-pill pill-nursery">Ages 2.5 - 5 Years</span>
                <span className="card-tag">PLAY SCHOOL</span>
                <h3 className="card-heading">Early Years</h3>
                <p className="card-teaser">Play-based exploratory learning focusing on vocabulary, motor skills, and creative finger painting.</p>
                <span className="explore-syllabus-btn">Explore Syllabus →</span>
              </div>
            </div>

            {/* Card 2: Foundation */}
            <div className="pathway-card card-foundation" onClick={() => openSyllabus(PATHWAY_DETAILS.foundation)}>
              <div className="card-image-wrap">
                <img src={foundationYearsImg} alt="Foundation (Grades 1-2)" className="pathway-card-img" />
              </div>
              <div className="card-overlay">
                <span className="card-age-pill pill-foundation">Ages 6 - 7 Years</span>
                <span className="card-tag">DEVELOPMENT</span>
                <h3 className="card-heading">Foundation Years</h3>
                <p className="card-teaser">Transitioning into writing prose, basic arithmetic logic, environmental awareness, and clay modeling.</p>
                <span className="explore-syllabus-btn">Explore Syllabus →</span>
              </div>
            </div>

            {/* Card 3: Preparatory */}
            <div className="pathway-card card-preparatory" onClick={() => openSyllabus(PATHWAY_DETAILS.preparatory)}>
              <div className="card-image-wrap">
                <img src={preparatoryYearsImg} alt="Preparatory (Grades 3-5)" className="pathway-card-img" />
              </div>
              <div className="card-overlay">
                <span className="card-age-pill pill-preparatory">Ages 8 - 10 Years</span>
                <span className="card-tag">PREPARATION</span>
                <h3 className="card-heading">Preparatory Years</h3>
                <p className="card-teaser">Strengthening critical inquiry, laboratory science, computer coding logic, and speech dramatics.</p>
                <span className="explore-syllabus-btn">Explore Syllabus →</span>
              </div>
            </div>

            {/* Card 4: Middle School */}
            <div className="pathway-card card-middle" onClick={() => openSyllabus(PATHWAY_DETAILS.middle)}>
              <div className="card-image-wrap">
                <img src={middleSchoolImg} alt="Middle School (Grades 6-8)" className="pathway-card-img" />
              </div>
              <div className="card-overlay">
                <span className="card-age-pill pill-middle">Ages 11 - 13 Years</span>
                <span className="card-tag">LEADERSHIP FOUNDATION</span>
                <h3 className="card-heading">Middle School</h3>
                <p className="card-teaser">Advanced algebra, integrated physics/chemistry, Python programming, robotics labs, and debates.</p>
                <span className="explore-syllabus-btn">Explore Syllabus →</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. BEYOND THE STANDARD CLASSROOM (Asymmetrical Bento Grid Layout) ── */}
      <section className="beyond-section" id="beyond">
        <div className="beyond-inner">
          <div className="beyond-header">
            <span className="section-label">HOLISTIC METRICS</span>
            <h2 className="beyond-serif-title">
              Beyond The <br />
              <span className="serif-italic">Standard Classroom</span>
            </h2>
          </div>

          <div className="beyond-bento-grid">
            
            {/* Left Block - Core Standards (Large Glassy Bento) */}
            <div className="bento-card bento-standards card-white">
              <div className="card-icon-circle blue-icon">🌐</div>
              <h3 className="beyond-card-title">Core Global Standards</h3>
              <p className="beyond-card-desc">
                Our junior academic curriculum is strictly benchmarked against CBSE foundational guides combined with Cambridge Primary models for global citizenship readiness.
              </p>
              
              {/* Interactive Standards Chart/Bars */}
              <div className="standards-chart-box">
                <div className="chart-bar-item">
                  <div className="bar-label"><span>Academic Depth</span> <span>100%</span></div>
                  <div className="bar-track"><div className="bar-fill fill-blue" style={{width: '100%'}}></div></div>
                </div>
                <div className="chart-bar-item">
                  <div className="bar-label"><span>Child Empathy & Care</span> <span>100%</span></div>
                  <div className="bar-track"><div className="bar-fill fill-mint" style={{width: '100%'}}></div></div>
                </div>
                <div className="chart-bar-item">
                  <div className="bar-label"><span>Creative Autonomy</span> <span>100%</span></div>
                  <div className="bar-track"><div className="bar-fill fill-gold" style={{width: '100%'}}></div></div>
                </div>
              </div>
            </div>

            {/* Right Top Block - STEM & Innovation (Glow Navy Bento) */}
            <div className="bento-card bento-stem card-navy">
              <div className="card-icon-circle gold-icon">⚛️</div>
              <h3 className="beyond-card-title text-white">STEM & Innovation Lab</h3>
              <p className="beyond-card-desc text-light">
                Fostering analytical logic through child-friendly Scratch block coding, junior robotics assembly, and interactive science experiments.
              </p>
              
              {/* Fun Coding Block Simulation Mock */}
              <div className="coding-block-simulation">
                <div className="code-line"><span className="code-blue">when</span> <span className="code-gold">greenFlagClicked</span></div>
                <div className="code-line indent-1"><span className="code-mint">initializeRobot</span>()</div>
                <div className="code-line indent-1"><span className="code-blue">repeat</span> <span className="code-purple">forever</span>:</div>
                <div className="code-line indent-2"><span className="code-pink">spreadJoy</span>(<span className="code-orange">speed: 100</span>)</div>
              </div>
            </div>

            {/* Right Bottom Left Block - Creative Expression (Interactive Tags Bento) */}
            <div className="bento-card bento-creative card-white">
              <div className="card-icon-circle mint-icon">🎨</div>
              <h3 className="beyond-card-title">Creative Expression</h3>
              <p className="beyond-card-desc">
                Promoting personal voice, sensory joy, and artistic curiosity with active co-curricular tracks.
              </p>
              
              {/* Interactive tag highlights */}
              <div className="interactive-badge-cloud">
                <span className={`creative-badge ${creativeTag === 'music' ? 'badge-active' : ''}`} onMouseEnter={() => setCreativeTag('music')}>🎵 Music Circle</span>
                <span className={`creative-badge ${creativeTag === 'theatre' ? 'badge-active' : ''}`} onMouseEnter={() => setCreativeTag('theatre')}>🎭 Puppet Drama</span>
                <span className={`creative-badge ${creativeTag === 'clay' ? 'badge-active' : ''}`} onMouseEnter={() => setCreativeTag('clay')}>🏺 Clay Studio</span>
                <span className={`creative-badge ${creativeTag === 'story' ? 'badge-active' : ''}`} onMouseEnter={() => setCreativeTag('story')}>📖 Story Craft</span>
              </div>
            </div>

            {/* Right Bottom Right Block - Foundational Mentorship (Avatars & Trust Rating Bento) */}
            <div className="bento-card bento-mentorship card-white">
              <div className="card-icon-circle warm-icon">🎓</div>
              <h3 className="beyond-card-title">Foundational Mentorship</h3>
              <p className="beyond-card-desc">
                Every child receives dedicated, empathetic attention from qualified early education practitioners.
              </p>
              
              {/* Avatar Stack and Real Ratings */}
              <div className="mentorship-interactive-footer">
                <div className="mentorship-avatars">
                  <div className="avatar-circle av-1"></div>
                  <div className="avatar-circle av-2"></div>
                  <div className="avatar-circle av-3"></div>
                  <div className="avatar-plus">+12</div>
                </div>
                <div className="mentorship-trust-score">
                  <span className="stars-row">⭐⭐⭐⭐⭐</span>
                  <span className="rating-lbl">4.9/5 Trust Rating</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 4. THE WORLD IS YOUR CAMPUS (Interactive Exchange Explorer) ── */}
      <section className="campus-world-section" id="campus">
        <div className="campus-world-inner">
          
          {/* Left Block: Image frame with capsule text overlay */}
          <div className="campus-image-block">
            <div className="campus-img-frame">
              <img src={campusImg} alt="Students walking in university classical campus" className="campus-cover-img" />
              <div className="campus-capsule-badge">
                "Nurturing a curiosity for the world's diverse cultures from the very start."
              </div>
            </div>
          </div>

          {/* Right Block: Content & Interactive Exchange City Selector */}
          <div className="campus-content-block">
            <span className="campus-label-top">GLOBAL INTELLIGENCE READINESS</span>
            <h2 className="campus-serif-title">
              The World is Your <br />
              <span className="serif-italic">Campus</span>
            </h2>
            <p className="campus-desc">
              Connecting our junior classes with premium partner schools globally. Through shared digital classrooms and joint projects, children expand their horizons.
            </p>

            {/* City Tabs Selector (Highly User-Friendly) */}
            <div className="city-selector-tabs">
              <button className={`city-tab-btn ${activeCity === 'london' ? 'city-active' : ''}`} onClick={() => setActiveCity('london')}>London 🇬🇧</button>
              <button className={`city-tab-btn ${activeCity === 'singapore' ? 'city-active' : ''}`} onClick={() => setActiveCity('singapore')}>Singapore 🇸🇬</button>
              <button className={`city-tab-btn ${activeCity === 'newyork' ? 'city-active' : ''}`} onClick={() => setActiveCity('newyork')}>New York 🇺🇸</button>
            </div>

            {/* Dynamically displaying school exchange details based on state */}
            <div className="city-exchange-card">
              <div className="exchange-badge-row">
                <span className="partner-label">🏫 PARTNER:</span>
                <span className="partner-value">{CITY_PARTNERS[activeCity].school}</span>
              </div>
              <h4 className="project-title">Project: {CITY_PARTNERS[activeCity].project}</h4>
              <p className="project-desc">{CITY_PARTNERS[activeCity].desc}</p>
            </div>
          </div>

        </div>
      </section>

      {/* ── 5 & 6. CTA & FOOTER COMBINED SNAP SECTION ── */}
      <section className="programs-cta-footer-section" id="apply">
        <div className="programs-cta-block">
          <div className="programs-cta-inner">
            <span className="cta-mini-label">ADMISSIONS OPEN FOR 2026-27</span>
            <h2 className="cta-serif-title">Experience Foundational Excellence</h2>
            <p className="cta-subtitle">
              Secure a happy, safe, and academically brilliant foundation for your child. Enroll now in our junior classes (Play School through Grade 8).
            </p>
            <div className="cta-buttons-wrap">
              <a href="#apply" className="btn-cta-white">
                Apply Online Now
              </a>
              <a href="#admissions-help" className="btn-cta-outline">
                Talk to Admissions Representative
              </a>
            </div>
          </div>
        </div>

        <footer className="programs-footer">
          <div className="programs-footer-inner">
            
            <div className="programs-footer-cols">
              
              {/* Brand Column */}
              <div className="p-footer-col brand-col">
                <div className="p-footer-logo-row">
                  <img src={logoImg} alt="RK School Logo" className="p-footer-logo-img" />
                  <span className="p-footer-brand-name">RK School</span>
                </div>
                <p className="p-footer-tagline">
                  Establishing a robust foundation of academic success, innovation, and character from play school through grade 8.
                </p>
              </div>

              {/* Legal Column */}
              <div className="p-footer-col">
                <h5>LEGAL</h5>
                <ul>
                  <li><a href="#privacy">Privacy Policy</a></li>
                  <li><a href="#terms">Terms & Conditions</a></li>
                </ul>
              </div>

              {/* Portals Column */}
              <div className="p-footer-col">
                <h5>PORTALS</h5>
                <ul>
                  <li><a href="#parent-login">Parent Login</a></li>
                  <li><a href="#staff-portal">Staff Portal</a></li>
                </ul>
              </div>

              {/* Help Column */}
              <div className="p-footer-col">
                <h5>HELP</h5>
                <ul>
                  <li><a href="#support">Contact Support</a></li>
                  <li><a href="#admissions-help">Admissions Help</a></li>
                </ul>
              </div>

            </div>

            <div className="programs-footer-bottom">
              <p>© RK School. Nurturing Minds & Characters.</p>
            </div>

          </div>
        </footer>
      </section>

      {/* ── 7. PREMIUM INTERACTIVE GLASS SYLLABUS MODAL (Wow Factor Dashboard!) ── */}
      {selectedSyllabus && (
        <div className="syllabus-modal-overlay" onClick={() => setSelectedSyllabus(null)}>
          <div className="syllabus-modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedSyllabus(null)}>×</button>
            
            <span className="modal-label">📚 RK {selectedSyllabus.tag} PROGRAM</span>
            <div className="modal-title-row">
              <h3 className="modal-title">{selectedSyllabus.heading}</h3>
              <span className="modal-age-pill">{selectedSyllabus.age}</span>
            </div>
            
            <p className="modal-desc">{selectedSyllabus.desc}</p>
            
            {/* Core Curriculum Highlights Tags */}
            <div className="modal-section-mini">
              <div className="modal-highlight-tags">
                {selectedSyllabus.highlights.map((h, idx) => (
                  <span key={idx} className="modal-highlight-tag">{h}</span>
                ))}
              </div>
            </div>

            {/* INTERACTIVE MODAL SUB-TABS (Extremely User-Friendly Dashboard Interface!) */}
            <div className="modal-dashboard-tabs">
              <button 
                className={`modal-dash-tab ${activeModalTab === 'subjects' ? 'dash-tab-active' : ''}`}
                onClick={() => setActiveModalTab('subjects')}
              >
                📚 Key Subjects
              </button>
              <button 
                className={`modal-dash-tab ${activeModalTab === 'activities' ? 'dash-tab-active' : ''}`}
                onClick={() => setActiveModalTab('activities')}
              >
                🎨 Co-Curriculars
              </button>
              <button 
                className={`modal-dash-tab ${activeModalTab === 'goals' ? 'dash-tab-active' : ''}`}
                onClick={() => setActiveModalTab('goals')}
              >
                🌈 Milestones
              </button>
            </div>

            {/* TAB CONTENT WITH ANIMATIONS */}
            <div className="modal-tab-content-box">
              {activeModalTab === 'subjects' && (
                <div className="tab-pane-content fade-in-tab">
                  <h4 className="tab-section-heading">📝 Core Academic Subjects</h4>
                  <ul className="modal-subjects-list">
                    {selectedSyllabus.subjects.map((sub, idx) => (
                      <li key={idx} className="modal-subject-item">
                        <span className="bullet-point check-blue">✓</span> {sub}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeModalTab === 'activities' && (
                <div className="tab-pane-content fade-in-tab">
                  <h4 className="tab-section-heading">🎨 Creative Play & Activities</h4>
                  <ul className="modal-subjects-list">
                    {selectedSyllabus.activities.map((act, idx) => (
                      <li key={idx} className="modal-subject-item">
                        <span className="bullet-point check-mint">🎨</span> {act}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeModalTab === 'goals' && (
                <div className="tab-pane-content fade-in-tab">
                  <h4 className="tab-section-heading">🌈 Student Growth & Emotional Milestones</h4>
                  <ul className="modal-subjects-list">
                    {selectedSyllabus.goals.map((g, idx) => (
                      <li key={idx} className="modal-subject-item">
                        <span className="bullet-point check-gold">✨</span> {g}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            
            <button className="modal-btn-close" onClick={() => setSelectedSyllabus(null)}>
              Done Exploring
            </button>
          </div>
        </div>
      )}

    </>
  )
}

export default Programs

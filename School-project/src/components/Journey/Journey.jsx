import { useState } from 'react'
import './Journey.css'

const STEPS = [
  {
    icon: '🌱',
    label: 'Early Years',
    subLabel: 'Play School & Nursery',
    age: 'Ages 2.5 - 5 Years',
    focus: 'Learning through joyful play, music, and colorful sensory discovery.',
    activities: ['🎨 Finger Painting', '🧩 Block Building', '🧸 Toy Library', '🎶 Rhyme Time', '🌳 Soft Play Zone'],
    color: '#f0ab26', // Sunshine Gold
  },
  {
    icon: '📚',
    label: 'Foundation',
    subLabel: 'Grades 1-2',
    age: 'Ages 6 - 7 Years',
    focus: 'Establishing core reading, handwriting, numbers, and basic empathy.',
    activities: ['✍️ Early Writing', '🧮 Math Magic', '🌱 Nature Walks', '📖 Phonics Library', '🎭 Joyful Puppetry'],
    color: '#2c5bd6', // Royal Blue
  },
  {
    icon: '🔬',
    label: 'Preparatory',
    subLabel: 'Grades 3-5',
    age: 'Ages 8 - 10 Years',
    focus: 'Developing creative logic, critical reasoning, and logical skills.',
    activities: ['💻 Coding Playgrounds', '🔬 Fun Science Labs', '🧠 Puzzle Solving', '🗣️ Junior Debates', '🎨 Creative Crafts'],
    color: '#48b38f', // Mint Green
  },
  {
    icon: '🎓',
    label: 'Middle School',
    subLabel: 'Grades 6-8',
    age: 'Ages 11 - 13 Years',
    focus: 'Building advanced inquiry, scientific projects, and leadership readiness.',
    activities: ['🤖 Robotics Academy', '📣 Public Speaking', '📐 Algebra Basics', '📚 Novel Reading', '🤝 Team Leadership'],
    color: '#8C4A32', // Copper Brown
  },
]

function Journey() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section className="journey-section" id="courses">
      <div className="journey-inner">

        {/* ── LEFT: Dynamic Course Detail Card (Pyaara & Interactive!) ── */}
        <div className="journey-header">
          <span className="section-label">Our Curriculum</span>
          <h2 className="section-title">The Student<br />Journey</h2>
          
          {/* Dynamic Interactive Card */}
          <div 
            className="journey-detail-card"
            style={{ borderTop: `4px solid ${STEPS[activeStep].color}` }}
          >
            <div className="detail-card-header">
              <span className="detail-card-age">{STEPS[activeStep].age}</span>
              <div className="detail-card-icon-wrap" style={{ backgroundColor: `${STEPS[activeStep].color}20`, color: STEPS[activeStep].color }}>
                {STEPS[activeStep].icon}
              </div>
            </div>
            
            <h3 className="detail-card-title">{STEPS[activeStep].label}</h3>
            <span className="detail-card-subtitle">{STEPS[activeStep].subLabel}</span>
            
            <p className="detail-card-focus">
              <strong>Focus:</strong> {STEPS[activeStep].focus}
            </p>

            <div className="detail-card-activities">
              <span className="activities-title">🎈 Key Activities:</span>
              <div className="activities-tags">
                {STEPS[activeStep].activities.map((act, i) => (
                  <span key={i} className="activity-tag">{act}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Dynamic Progress indicator */}
          <div className="journey-progress">
            <span className="journey-progress-label">
              Currently Viewing — {STEPS[activeStep].label}
            </span>
            <div className="journey-progress-bar">
              <div 
                className="journey-progress-fill" 
                style={{ 
                  width: `${(activeStep + 1) * 25}%`,
                  background: `linear-gradient(90deg, ${STEPS[activeStep].color}, #f5d98a)`
                }} 
              />
            </div>
          </div>
        </div>

        {/* ── RIGHT: Interactive Vertical Timeline Track ── */}
        <div className="journey-track">
          <div className="timeline-instructions">💡 Hover over a stage to explore!</div>
          {STEPS.map((step, i) => (
            <div
              key={i}
              id={`journey-step-${i}`}
              className={`journey-step ${activeStep === i ? 'active' : ''}`}
              onMouseEnter={() => setActiveStep(i)}
            >
              {/* Dot on the vertical line */}
              <div 
                className="journey-step-dot" 
                style={{ 
                  borderColor: activeStep === i ? step.color : 'rgba(255,255,255,0.35)',
                  backgroundColor: activeStep === i ? step.color : 'transparent'
                }}
              />

              {/* Icon */}
              <div 
                className="journey-step-icon"
                style={{
                  backgroundColor: activeStep === i ? `${step.color}25` : 'rgba(255,255,255,0.08)',
                  borderColor: activeStep === i ? step.color : 'rgba(255,255,255,0.15)'
                }}
              >
                {step.icon}
              </div>

              {/* Text content */}
              <div className="journey-step-body">
                <h3 style={{ color: activeStep === i ? step.color : 'white' }}>{step.label}</h3>
                <p>{step.subLabel}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Journey

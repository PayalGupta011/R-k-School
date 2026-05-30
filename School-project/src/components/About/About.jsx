import './About.css'
import schoolImg from '../../assets/school_students.png'

function About() {
  return (
    <section className="about-section" id="programs">
      <div className="about-inner">

        {/* ── Left: Text Content ── */}
        <div className="about-content">
          <span className="section-label">🧸 A SECOND HOME FOR YOUR CHILD</span>
          <h2 className="section-title">
            Nurturing Joy, Play, & <br />
            <span className="text-blue">Creative Discovery</span>
          </h2>

          <div className="about-points">
            <div className="about-point">
              <div className="about-point-icon">🎨</div>
              <div className="about-point-body">
                <h4>Play-Based Early Years</h4>
                <p>
                  In Play School, Nursery & KG, our children learn through colorful games, sensory gardens, creative building blocks, and highly immersive storytelling.
                </p>
              </div>
            </div>

            <div className="about-point">
              <div className="about-point-icon">🛡️</div>
              <div className="about-point-body">
                <h4>Safe, Happy & Empathetic Care</h4>
                <p>
                  A 100% secure, nurturing campus staffed with loving, certified foundational educators who prioritize your child's emotional wellness and happiness.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Right: Image ── */}
        <div className="about-img-wrap">
          <div className="about-img-frame">
            <img src={schoolImg} alt="School environment" />
          </div>
          <div className="about-badge">
            <span className="badge-num">25</span>
            <span className="badge-text">Years of Trust</span>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About

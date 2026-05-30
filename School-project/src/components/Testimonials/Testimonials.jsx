import './Testimonials.css'

const REVIEWS = [
  {
    name: 'Neeti Mehta',
    role: 'Parent · Grade 8',
    text: 'The teachers at RK School truly care about every child. My daughter has grown so much — not just academically but as a person. The best decision we made.',
    color: '#1a3c8f',
    initial: 'N',
  },
  {
    name: 'Varun Joshi',
    role: 'Parent · Grade 5',
    text: 'The school programme is incredible. The structure, activities, the way they balance academics and wellness — we feel our son is truly in safe and brilliant hands.',
    color: '#2563eb',
    initial: 'V',
  },
  {
    name: 'Fatima Ahmed',
    role: 'Alumni · Batch 2022',
    text: 'I secured admission to one of the top colleges and the credit goes entirely to my teachers at RK School. They prepared us beyond just the syllabus.',
    color: '#7c3aed',
    initial: 'F',
  },
]

function Testimonials() {
  return (
    <section className="testimonials-section" id="contact">
      <div className="testimonials-inner">

        {/* Header */}
        <div className="testimonials-header">
          <span className="section-label">Testimonials</span>
          <h2 className="section-title">Voices of RK School</h2>
          <p>Hear what our parents and alumni have to say about their experience with us.</p>
        </div>

        {/* Cards */}
        <div className="testimonials-grid">
          {REVIEWS.map((r, i) => (
            <div key={i} className="testimonial-card" id={`testimonial-${i}`}>
              <div className="testimonial-quote">"</div>
              <p className="testimonial-text">{r.text}</p>
              <div className="testimonial-author">
                <div
                  className="testimonial-avatar"
                  style={{ background: r.color }}
                >
                  {r.initial}
                </div>
                <div className="testimonial-author-info">
                  <div className="author-name">{r.name}</div>
                  <div className="author-role">{r.role}</div>
                </div>
              </div>
              <div className="testimonial-stars">★ ★ ★ ★ ★</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Testimonials

import { useState, useEffect, useRef } from 'react'
import './Contact.css'

function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  
  const [focusedField, setFocusedField] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  
  const sectionRef = useRef(null)

  // Trigger entrance animations immediately upon mounting the dedicated contact page
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 50)
    return () => clearTimeout(timer)
  }, [])

  const handleFocus = (field) => setFocusedField(field)
  const handleBlur = (field, val) => {
    setFocusedField(null)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormState(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formState.name || !formState.email || !formState.message) {
      alert('Please fill out all mandatory fields!')
      return
    }
    
    setIsSubmitting(true)
    
    // Simulate premium API call loading state
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      
      // Auto reset success after 5 seconds
      setTimeout(() => {
        setIsSuccess(false)
        setFormState({ name: '', email: '', phone: '', message: '' })
      }, 5000)
    }, 1800)
  }

  return (
    <section 
      className={`contact-section ${isVisible ? 'viewport-active' : ''}`} 
      id="contact" 
      ref={sectionRef}
    >
      {/* Background neon visual glow elements */}
      <div className="contact-neon-bg">
        <div className="neon-circle n-1"></div>
        <div className="neon-circle n-2"></div>
        <div className="neon-circle n-3"></div>
      </div>

      <div className="contact-inner">
        
        {/* Left Column: Visual Panel & Online Helpdesk */}
        <div className="contact-left">
          
          <div className="contact-header-block">
            <span className="section-label">👋 HAVE QUESTIONS? REACH OUT!</span>
            <h2 className="contact-main-title">
              Let's Start a <br />
              <span className="serif-italic-gold">Beautiful Journey</span>
            </h2>
            <p className="contact-subtitle-desc">
              Whether you want to visit our campus, understand our curriculum, or register a kid — our foundational mentors are ready to guide you.
            </p>
          </div>

          {/* Online desk status widget */}
          <div className="online-mentors-badge">
            <span className="pulsing-green-dot"></span>
            <span className="status-label">Admissions Mentors Online — Responds in 10 mins</span>
          </div>

          {/* Stylized interactive details group */}
          <div className="contact-detail-cards">
            
            {/* Phone Card */}
            <a href="tel:+919876543210" className="contact-detail-card card-blue">
              <div className="detail-icon-wrap">
                <svg className="svg-icon" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" />
                </svg>
              </div>
              <div className="detail-card-body">
                <span className="detail-title">CALL DIRECTLY</span>
                <span className="detail-val">+91 98765 43210</span>
              </div>
              <div className="hover-arrow">→</div>
            </a>

            {/* Email Card */}
            <a href="mailto:admissions@rkschool.edu" className="contact-detail-card card-mint">
              <div className="detail-icon-wrap">
                <svg className="svg-icon" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4M20,8L12,13L4,8V6L12,11L20,6V8Z" />
                </svg>
              </div>
              <div className="detail-card-body">
                <span className="detail-title">EMAIL SUPPORT</span>
                <span className="detail-val">admissions@rkschool.edu</span>
              </div>
              <div className="hover-arrow">→</div>
            </a>

            {/* Location Card */}
            <div className="contact-detail-card card-gold">
              <div className="detail-icon-wrap">
                <svg className="svg-icon" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />
                </svg>
              </div>
              <div className="detail-card-body">
                <span className="detail-title">VISIT CAMPUS</span>
                <span className="detail-val">123 Education Blvd, New Delhi</span>
              </div>
            </div>

          </div>
        </div>

        {/* Right Column: Glassmorphic Contact Form */}
        <div className="contact-right">
          <div className="glass-form-card">
            
            {/* Header style */}
            <div className="form-head">
              <span className="badge-form">SECURE CONNECT</span>
              <h3 className="form-head-title">Drop Us a Message</h3>
            </div>

            {/* Main Form element */}
            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="premium-contact-form">
                
                {/* Input Name */}
                <div className={`form-field-group ${focusedField === 'name' || formState.name ? 'field-active' : ''}`}>
                  <label htmlFor="name" className="floating-field-label">Parent / Student Full Name *</label>
                  <div className="input-with-icon">
                    <input 
                      type="text" 
                      id="name"
                      name="name" 
                      value={formState.name}
                      onFocus={() => handleFocus('name')}
                      onBlur={() => handleBlur('name', formState.name)}
                      onChange={handleChange}
                      placeholder={focusedField === 'name' ? 'e.g. John Doe Sr' : ''}
                      required
                      className="contact-text-field"
                    />
                    <div className="input-focus-border"></div>
                  </div>
                </div>

                {/* Input Email */}
                <div className={`form-field-group ${focusedField === 'email' || formState.email ? 'field-active' : ''}`}>
                  <label htmlFor="email" className="floating-field-label">Primary Email Address *</label>
                  <div className="input-with-icon">
                    <input 
                      type="email" 
                      id="email"
                      name="email" 
                      value={formState.email}
                      onFocus={() => handleFocus('email')}
                      onBlur={() => handleBlur('email', formState.email)}
                      onChange={handleChange}
                      placeholder={focusedField === 'email' ? 'e.g. parent@example.com' : ''}
                      required
                      className="contact-text-field"
                    />
                    <div className="input-focus-border"></div>
                  </div>
                </div>

                {/* Input Phone */}
                <div className={`form-field-group ${focusedField === 'phone' || formState.phone ? 'field-active' : ''}`}>
                  <label htmlFor="phone" className="floating-field-label">Contact Phone Number</label>
                  <div className="input-with-icon">
                    <input 
                      type="tel" 
                      id="phone"
                      name="phone" 
                      value={formState.phone}
                      onFocus={() => handleFocus('phone')}
                      onBlur={() => handleBlur('phone', formState.phone)}
                      onChange={handleChange}
                      placeholder={focusedField === 'phone' ? 'e.g. +91 98765 43210' : ''}
                      className="contact-text-field"
                    />
                    <div className="input-focus-border"></div>
                  </div>
                </div>

                {/* Textarea Message */}
                <div className={`form-field-group ${focusedField === 'message' || formState.message ? 'field-active' : ''}`}>
                  <label htmlFor="message" className="floating-field-label">Tell us about your query *</label>
                  <div className="input-with-icon">
                    <textarea 
                      id="message"
                      name="message" 
                      value={formState.message}
                      onFocus={() => handleFocus('message')}
                      onBlur={() => handleBlur('message', formState.message)}
                      onChange={handleChange}
                      placeholder={focusedField === 'message' ? 'What stage are you looking admissions for? Tell us about your child...' : ''}
                      required
                      rows="4"
                      className="contact-textarea-field"
                    ></textarea>
                    <div className="input-focus-border"></div>
                  </div>
                </div>

                {/* Submit button */}
                <button 
                  type="submit" 
                  className={`btn-contact-submit ${isSubmitting ? 'submitting' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="btn-loader-content">
                      <span className="spinner-dot"></span> Sending Secure Message...
                    </span>
                  ) : (
                    <span className="btn-text-content">
                      Send Secure Message 🚀
                    </span>
                  )}
                </button>

              </form>
            ) : (
              // Breathtaking Celebratory Success confirmation!
              <div className="form-sent-success">
                <div className="success-emoji-badge animate-bounce">🎈</div>
                <h4 className="success-heading">Message Sent Safely!</h4>
                <p className="success-desc">
                  Thank you, <strong>{formState.name}</strong>. We have registered your message in our secure admissions pool. 
                </p>
                <div className="mentor-callout">
                  <span className="callout-indicator">⚡ MENTOR SECURED</span>
                  <p>A personal admissions guide is preparing your counseling worksheet and will reach out to you shortly.</p>
                </div>
                <button 
                  className="btn-success-reset" 
                  onClick={() => {
                    setIsSuccess(false)
                    setFormState({ name: '', email: '', phone: '', message: '' })
                  }}
                >
                  Send Another Message →
                </button>
              </div>
            )}

          </div>
        </div>

      </div>
    </section>
  )
}

export default Contact

function About() {
  return (
<section id="about" className="section">
        <div className="container">
          <h2>About Me</h2>
          <div className="about-grid">
            <div className="about-text">
              <p>I'm a passionate frontend developer with 3 years of experience creating engaging digital experiences. I specialize in React, modern CSS, and responsive design patterns that work beautifully across all devices.</p>
              <div className="about-details">
                <div className="detail-item">
                  <span className="detail-icon">📍</span>
                  <span>San Francisco, CA</span>
                </div>
                <div className="detail-item">
                  <span className="detail-icon">✉️</span>
                  <a href="mailto:alex@example.com">alex@example.com</a>
                </div>
                <div className="detail-item">
                  <span className="detail-icon">📱</span>
                  <span>(555) 123-4567</span>
                </div>
              </div>
            </div>
            <div className="about-availability">
              <h3>Currently Available For:</h3>
              <div className="availability-tags">
                <span className="tag tag-available">Freelance</span>
                <span className="tag tag-available">Full-Time</span>
                <span className="tag tag-available">Remote</span>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default About

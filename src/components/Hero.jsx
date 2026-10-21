function Hero() {
  const handleNavClick = (event) => {
    event.preventDefault()
    document.getElementById(event.currentTarget.hash.slice(1))?.scrollIntoView({ behavior: 'smooth' })
  }
  return (
<section id="home" className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Alex Johnson</h1>
          <p className="hero-subtitle">Frontend Developer & UI Designer</p>
          <p className="hero-tagline">Creating beautiful, responsive web experiences with modern technologies</p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary" onClick={handleNavClick}>View Projects</a>
            <a href="#contact" className="btn btn-secondary" onClick={handleNavClick}>Get In Touch</a>
          </div>
        </div>
      </section>
  )
}

export default Hero

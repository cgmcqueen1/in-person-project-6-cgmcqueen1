// Navbar owns whether the mobile menu is open as a boolean.
import { useState } from 'react'

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleNavClick = (event) => {
    event.preventDefault()
    document.getElementById(event.currentTarget.hash.slice(1))?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setIsMobileMenuOpen(false)
  }

  return (
    <nav id="navbar" aria-label="Main navigation">
      <div className="nav-brand"><span>Alex Johnson</span></div>
      <ul id="navigation-menu" className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        {['Home', 'About', 'Skills', 'Projects', 'Contact'].map(label => (
          <li key={label}><a href={`#${label.toLowerCase()}`} className="nav-link" onClick={handleNavClick}>{label}</a></li>
        ))}
      </ul>
      <button type="button" className={`nav-toggle ${isMobileMenuOpen ? 'active' : ''}`}
        aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isMobileMenuOpen} aria-controls="navigation-menu"
        onClick={() => setIsMobileMenuOpen(previous => !previous)}>
        <span></span><span></span><span></span>
      </button>
    </nav>
  )
}

export default Navbar

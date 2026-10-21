// Projects owns the active filter as a string; the visible list is derived.
import { useState } from 'react'

const projects = [
  {
    "id": 1,
    "title": "E-Commerce Platform",
    "description": "A modern e-commerce platform built with React and Node.js, featuring shopping cart, payment integration, and admin dashboard.",
    "category": "fullstack",
    "categoryLabel": "Full-Stack",
    "image": "https://via.placeholder.com/400x250/4f46e5/ffffff?text=E-Commerce+App",
    "alt": "E-Commerce Platform",
    "tags": [
      "React",
      "Node.js",
      "MongoDB",
      "Stripe"
    ],
    "featured": true
  },
  {
    "id": 2,
    "title": "Weather Dashboard",
    "description": "Clean and intuitive weather dashboard with location search, 7-day forecast, and beautiful animations.",
    "category": "frontend",
    "categoryLabel": "Frontend",
    "image": "https://via.placeholder.com/400x250/059669/ffffff?text=Weather+App",
    "alt": "Weather Dashboard",
    "tags": [
      "JavaScript",
      "CSS3",
      "API"
    ],
    "featured": false
  },
  {
    "id": 3,
    "title": "Task Management App",
    "description": "Productivity app with drag-and-drop functionality, project collaboration, and deadline tracking.",
    "category": "webapp",
    "categoryLabel": "Web App",
    "image": "https://via.placeholder.com/400x250/dc2626/ffffff?text=Task+Manager",
    "alt": "Task Management App",
    "tags": [
      "React",
      "TypeScript",
      "Firebase"
    ],
    "featured": false
  },
  {
    "id": 4,
    "title": "Creative Portfolio",
    "description": "Responsive portfolio website for a graphic designer with interactive galleries and smooth animations.",
    "category": "design",
    "categoryLabel": "Design",
    "image": "https://via.placeholder.com/400x250/7c3aed/ffffff?text=Portfolio+Site",
    "alt": "Portfolio Website",
    "tags": [
      "HTML5",
      "CSS3",
      "GSAP"
    ],
    "featured": false
  }
]

const filters = [ ['all', 'All Projects'], ['frontend', 'Frontend'], ['fullstack', 'Full-Stack'], ['design', 'Design'], ['webapp', 'Web App'] ]

function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')
  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2>Featured Projects</h2>
        <div className="filter-buttons">
          {filters.map(([category, label]) => (
            <button key={category} type="button"
              className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
              aria-pressed={activeFilter === category}
              onClick={() => setActiveFilter(category)}>{label}</button>
          ))}
        </div>
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className={`project-card ${project.featured ? 'featured' : ''}`} data-category={project.category}>
              <div className="project-image">
                <img src={project.image} alt={project.alt} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href="#" className="project-link"><span>🔗</span> Live Demo</a>
                    <a href="#" className="project-link"><span>💻</span> Code</a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-category">{project.categoryLabel}</span>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map(tag => <span key={tag} className="project-tag">{tag}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

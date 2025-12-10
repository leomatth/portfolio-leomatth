import { useState } from 'react'
import './Skills.css'

export default function Skills() {
  const [hoveredCard, setHoveredCard] = useState(null)

  const skillsData = {
    languages: {
      title: 'Linguagens & Frameworks',
      icon: '💻',
      items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Vue.js', 'Node.js', 'Express', 'Python']
    },
    tools: {
      title: 'Ferramentas & DevOps',
      icon: '🛠️',
      items: ['Git', 'GitHub', 'Docker', 'Webpack', 'Vite', 'npm', 'Figma', 'Canva', 'OutSystems']
    },
    testing: {
      title: 'Testing & QA',
      icon: '🧪',
      items: ['Playwright', 'Selenium', 'Cypress', 'Robot Framework', 'Jest', 'Testing Library']
    },
    specialties: {
      title: 'Especialidades',
      icon: '⭐',
      items: ['Design Patterns', 'AI Integration', 'Responsive Design', 'UI/UX', 'Performance Optimization', 'SEO', 'Acessibilidade', 'API Integration']
    }
  }

  return (
    <section id="skills" className="skills">
      <h2>Habilidades & Ferramentas</h2>
      <div className="skills-container">
        {Object.entries(skillsData).map(([key, category]) => (
          <div
            key={key}
            className={`skill-card ${hoveredCard === key ? 'active' : ''}`}
            onMouseEnter={() => setHoveredCard(key)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="skill-card-header">
              <span className="skill-icon">{category.icon}</span>
              <h3>{category.title}</h3>
            </div>
            <div className="skill-items">
              {category.items.map((item, index) => (
                <span key={index} className="skill-badge" style={{ animationDelay: `${index * 0.05}s` }}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

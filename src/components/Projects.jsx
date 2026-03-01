import { useState } from 'react'
import './Projects.css'

export default function Projects() {
  const allProjects = [
    {
      id: 1,
      title: 'Sublime-se',
      description: 'Website profissional para clínica de estética com design elegante e responsivo',
      tags: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://github.com/leomatth',
      demo: 'https://sublime-se.com.br/'
    },
    {
      id: 2,
      title: 'Bikecraft',
      description: 'E-commerce de bicicletas com design responsivo e interface intuitiva',
      tags: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://github.com/leomatth/bikecraft.github.io',
      demo: 'https://bikecraft-github-io.vercel.app/'
    },
    {
      id: 3,
      title: 'Ygor Azevedo Nutri',
      description: 'Website profissional para nutricionista com design moderno e responsivo',
      tags: ['HTML', 'JavaScript', 'CSS'],
      link: 'https://github.com/leomatth/YgorAzevedoNutri',
      demo: 'https://ygorazevedo.vercel.app/'
    },
    {
      id: 4,
      title: 'Euro Wine Experience',
      description: 'Website para experiência de vinhos europeus com design sofisticado',
      tags: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://github.com/leomatth',
      demo: 'https://eurowineexperience.vercel.app/'
    },
    {
      id: 5,
      title: 'Glamuor Flor Salão',
      description: 'Landing Page para salão de beleza',
      tags: ['JavaScript', 'HTML', 'CSS'],
      link: 'https://github.com/leomatth',
      demo: 'https://glamuorflor-landing-page.vercel.app/'
    },
    {
      id: 6,
      title: 'Elias Lanches',
      description: 'Cardápio digital para lanchonete com pedidos online',
      tags: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://github.com/leomatth',
      demo: 'https://elias-lanches.ola.click/'
    },
    {
      id: 7,
      title: 'Landing Page Ygor Azevedo',
      description: 'Landing page profissional com design atrativo e conversão otimizada',
      tags: ['React', 'CSS', 'JavaScript'],
      link: 'https://github.com/leomatth/landing-page-ygor-azevedo',
      demo: 'https://landing-page-ygor-azevedo.vercel.app/'
    }
  ]

  const [flipped, setFlipped] = useState({})

  const toggleFlip = (id) => {
    setFlipped(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  return (
    <section id="projects" className="projects">
      <h2>Projetos em Destaque</h2>
      <div className="projects-grid">
        {allProjects.map((project) => (
          <div
            key={project.id}
            className={`project-card ${flipped[project.id] ? 'flipped' : ''}`}
            onClick={() => toggleFlip(project.id)}
          >
            <div className="project-card-inner">
              <div className="project-card-front">
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flip-icon">↻</div>
              </div>
              <div className="project-card-back">
                <div className="project-links">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link github-link">
                    GitHub
                  </a>
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link demo-link">
                      Demo
                    </a>
                  )}
                </div>
                <div className="flip-icon">↻</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

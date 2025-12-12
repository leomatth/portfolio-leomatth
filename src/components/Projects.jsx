import { useState, useEffect } from 'react'
import './Projects.css'

export default function Projects() {
  const allProjects = [
    {
      id: 1,
      title: 'Ygor Azevedo Nutri',
      description: 'Website profissional para nutricionista com design moderno e responsivo',
      tags: ['HTML', 'JavaScript', 'CSS'],
      link: 'https://github.com/leomatth/YgorAzevedoNutri',
      demo: 'https://ygorazevedonutri.com.br'
    },
    {
      id: 2,
      title: 'Landing Page Ygor Azevedo',
      description: 'Landing page profissional com design atrativo e conversão otimizada',
      tags: ['React', 'CSS', 'JavaScript'],
      link: 'https://github.com/leomatth/landing-page-ygor-azevedo',
      demo: 'https://landing-page-ygor-azevedo.vercel.app/'
    },
    {
      id: 3,
      title: 'Bikecraft',
      description: 'E-commerce de bicicletas com design responsivo e interface intuitiva',
      tags: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://github.com/leomatth/bikecraft.github.io',
      demo: 'https://bikecraft-github-io.vercel.app/'
    },
    {
      id: 4,
      title: 'Calculadora IMC',
      description: 'Aplicação web para cálculo de Índice de Massa Corporal com interface limpa',
      tags: ['React', 'JavaScript', 'CSS'],
      link: 'https://github.com/leomatth',
      demo: 'https://calculo-imc-sage.vercel.app/'
    },
    {
      id: 5,
      title: 'Secret Number Game',
      description: 'Jogo interativo de adivinhação de números com feedback em tempo real',
      tags: ['JavaScript', 'HTML', 'CSS'],
      link: 'https://github.com/leomatth',
      demo: 'https://secretnumber-six.vercel.app/'
    },
    {
      id: 6,
      title: 'Mario Game',
      description: 'Jogo estilo Mario com mecânicas clássicas e gráficos pixelados',
      tags: ['JavaScript', 'Canvas', 'Game Dev'],
      link: 'https://github.com/leomatth',
      demo: 'https://mario-gamegithubio.vercel.app/'
    },
    {
      id: 7,
      title: 'Glamuor Flor Salão',
      description: 'Landing Page para salão de beleza',
      tags: ['JavaScript', 'HTML', 'CSS'],
      link: 'https://github.com/leomatth',
      demo: 'https://glamuorflor-landing-page.vercel.app/'
    }
  ]

  const [displayedProjects, setDisplayedProjects] = useState(allProjects.slice(0, 6))
  const [flipped, setFlipped] = useState({})
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setDisplayedProjects(prev => {
        const randomIndices = new Set()
        while (randomIndices.size < 6) {
          randomIndices.add(Math.floor(Math.random() * allProjects.length))
        }
        return Array.from(randomIndices).map(i => allProjects[i])
      })
    }, 5000)

    return () => clearInterval(interval)
  }, [isPaused])

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
        {displayedProjects.map((project) => (
          <div
            key={project.id}
            className={`project-card ${flipped[project.id] ? 'flipped' : ''}`}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
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

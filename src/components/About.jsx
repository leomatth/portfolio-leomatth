import { useState, useEffect } from 'react'
import './About.css'

export default function About() {
  const [displayedText, setDisplayedText] = useState('')
  const fullText = `Desenvolvedor focado em criar interfaces intuitivas e experiências de usuário excepcionais. Com experiência em desenvolvimento web moderno, trabalho com as tecnologias mais atuais para entregar soluções de alta qualidade.

Meu foco é transformar requisitos complexos em aplicações elegantes, performáticas e acessíveis. Acredito que bom design e código limpo caminham juntos para criar produtos que realmente fazem diferença.

Quando não estou codificando, estou aprendendo novas tecnologias, contribuindo para projetos open source ou compartilhando conhecimento com a comunidade de desenvolvimento. Também sou profissional de Quality Assurance no teste de softwares ou qualquer projeto, utilizando metodologias ágeis e ferramentas de automação que, unidas com o desenvolvimento, tornam o projeto mais seguro para entrega.`

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.substring(0, index + 1))
        index++
      } else {
        clearInterval(interval)
      }
    }, 20)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="about" className="about">
      <h2>Sobre mim</h2>
      <div className="about-content">
        <div className="typing-text">
          {displayedText.split('\n\n').map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
          <span className="cursor"></span>
        </div>
        {displayedText.length === fullText.length && (
          <blockquote className="about-quote">
            <p>Leonardo Pereira</p>
            <p>Portugal - Aveiro</p>
          </blockquote>
        )}
      </div>
    </section>
  )
}

import { useState } from 'react'
import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [showEmail, setShowEmail] = useState(false)
  const [copied, setCopied] = useState(false)
  const email = 'leomattheus95@gmail.com'

  const copyEmail = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Leonardo Pereira</h3>
          <p>Desenvolvedor Front-end | Criando experiências web incríveis</p>
        </div>

        <div className="footer-section">
          <h4>Links Rápidos</h4>
          <ul>
            <li><a href="#about">Sobre</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projetos</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Conecte-se</h4>
          <div className="social-buttons">
            <a href="https://www.linkedin.com/in/leomatth95" target="_blank" rel="noopener noreferrer" className="social-btn linkedin-btn" title="LinkedIn">
              in
            </a>
            <a href="https://github.com/leomatth" target="_blank" rel="noopener noreferrer" className="social-btn github-btn" title="GitHub">
              ⚙️
            </a>
            <div className="email-container">
              <button className="social-btn email-btn" onClick={() => setShowEmail(!showEmail)} title="Email">
                ✉️
              </button>
              {showEmail && (
                <div className="email-popup">
                  <p>{email}</p>
                  <button className="copy-btn" onClick={copyEmail}>
                    {copied ? '✓ Copiado!' : 'Copiar'}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Leonardo Pereira. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}

import './Contact.css'

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Vamos Conversar?</h2>
      <p className="contact-subtitle">
        Escolha o canal que preferir para entrar em contato comigo
      </p>

      <div className="contact-methods">
        <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="contact-card whatsapp">
          <div className="contact-icon">💬</div>
          <h3>WhatsApp</h3>
          <p>Conversa rápida e direta</p>
          <span className="contact-link">Enviar Mensagem →</span>
        </a>

        <a href="https://linkedin.com/in/leonardo-matheus" target="_blank" rel="noopener noreferrer" className="contact-card linkedin">
          <div className="contact-icon">💼</div>
          <h3>LinkedIn</h3>
          <p>Conecte-se comigo profissionalmente</p>
          <span className="contact-link">Visitar Perfil →</span>
        </a>

        <a href="mailto:seu@email.com" className="contact-card email">
          <div className="contact-icon">✉️</div>
          <h3>Email</h3>
          <p>Envie uma mensagem detalhada</p>
          <span className="contact-link">Enviar Email →</span>
        </a>
      </div>

      <div className="contact-cta">
        <p>Ou preencha o formulário acima para descrever seu projeto em detalhes</p>
      </div>
    </section>
  )
}

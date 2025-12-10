import { useState } from 'react'
import './ContactForm.css'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    countryCode: '+55',
    phone: '',
    serviceType: '',
    projectDescription: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aqui você pode adicionar a lógica para enviar o formulário
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        countryCode: '+55',
        phone: '',
        serviceType: '',
        projectDescription: ''
      })
      setSubmitted(false)
    }, 3000)
  }

  const serviceTypes = [
    'Website Corporativo',
    'E-commerce',
    'Aplicação Web',
    'Landing Page',
    'Redesign',
    'Outro'
  ]

  return (
    <section id="contact-form" className="contact-form-section">
      <h2>Vamos Começar seu Projeto?</h2>
      <div className="contact-form-container">
        <div className="form-info">
          <h3>Como Funciona</h3>
          <div className="info-steps">
            <div className="info-step">
              <div className="step-number">1</div>
              <h4>Primeiro Contato</h4>
              <p>Você preenche o formulário ao lado com os detalhes do seu projeto, ou entra em contato via WhatsApp, LinkedIn ou Email.</p>
            </div>
            <div className="info-step">
              <div className="step-number">2</div>
              <h4>Conversa Inicial</h4>
              <p>Marcamos uma conversa para entender melhor suas necessidades, objetivos e visão para o projeto.</p>
            </div>
            <div className="info-step">
              <div className="step-number">3</div>
              <h4>Proposta em 24h</h4>
              <p>Após nossa conversa, envio uma proposta detalhada com timeline, escopo e investimento em uma reunião.</p>
            </div>
            <div className="info-step">
              <div className="step-number">4</div>
              <h4>Resposta em 24h</h4>
              <p>Você tem 24 horas para revisar e responder sobre a proposta.</p>
            </div>
            <div className="info-step">
              <div className="step-number">5</div>
              <h4>Contrato em 24h</h4>
              <p>Após aprovação, envio o contrato para assinatura digital e iniciamos o desenvolvimento.</p>
            </div>
          </div>

          <div className="promo-section">
            <h4>🎁 Promoções Especiais</h4>
            <div className="promo-item">
              <p><strong>Indique um Amigo:</strong> Ganhe €100 de desconto no seu próximo projeto</p>
            </div>
            <div className="promo-item">
              <p><strong>Seu Amigo Ganha:</strong> 10% de desconto no primeiro projeto</p>
            </div>
            <div className="promo-item">
              <p><strong>Retorno Futuro:</strong> 10% de desconto em todos os projetos subsequentes</p>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">Nome *</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                placeholder="Seu nome"
              />
            </div>

            <div className="form-group">
              <label htmlFor="lastName">Apelido *</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                placeholder="Seu apelido"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="seu@email.com"
            />
          </div>

          <div className="form-group">
            <label>Telemóvel</label>
            <div className="phone-input-group">
              <select
                name="countryCode"
                value={formData.countryCode}
                onChange={handleChange}
                className="country-code-select"
              >
                <option value="+55">🇧🇷 +55</option>
                <option value="+351">🇵🇹 +351</option>
                <option value="+34">🇪🇸 +34</option>
                <option value="+33">🇫🇷 +33</option>
                <option value="+49">🇩🇪 +49</option>
                <option value="+44">🇬🇧 +44</option>
                <option value="+1">🇺🇸 +1</option>
                <option value="+39">🇮🇹 +39</option>
              </select>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="999999999"
                className="phone-input"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="serviceType">Tipo de Serviço *</label>
            <select
              id="serviceType"
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              required
            >
              <option value="">Selecione um serviço</option>
              {serviceTypes.map((service, index) => (
                <option key={index} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="projectDescription">Descreva seu Projeto *</label>
            <textarea
              id="projectDescription"
              name="projectDescription"
              value={formData.projectDescription}
              onChange={handleChange}
              required
              placeholder="Conte-me sobre seu projeto, objetivos, público-alvo e qualquer detalhe importante..."
            />
          </div>

          <button type="submit" className="submit-button">
            {submitted ? '✓ Mensagem Enviada!' : 'Enviar Proposta'}
          </button>

          <p className="form-note">
            Responderemos em até 24 horas. Obrigado por entrar em contato!
          </p>
        </form>
      </div>
    </section>
  )
}

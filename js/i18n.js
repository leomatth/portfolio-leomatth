// js/i18n.js

const translations = {
  pt: {
    "hero.greeting": "Oi, eu sou o Leonardo 👋",
    "hero.subtitle": "Desenvolvedor front-end focado em criar experiências web modernas com Javascript/Typescript, React e muito código limpo.",
    "hero.button": "Veja meus projetos",
    "sobre.titulo": "Sobre mim",
    "sobre.texto": "Sou Leonardo Mattheus, desenvolvedor front-end com paixão por transformar ideias em experiências digitais eficientes e visualmente marcantes. Atuo na criação de interfaces modernas, acessíveis e responsivas, sempre com foco em usabilidade, performance e código limpo. Tenho experiência prática com HTML, CSS, Javascript, React, Tailwind e ferramentas como Firebase, Git e Vite. Já desenvolvi projetos reais para clientes, como sites institucionais, landing pages, calculadoras interativas e sistemas simples com autenticação e banco de dados. Além da técnica, valorizo boas práticas de desenvolvimento, como arquitetura limpa, reaproveitamento de código e SEO básico. Estou sempre aprendendo, testando novas tecnologias e buscando soluções inteligentes para entregar valor real.",
    "projetos.titulo": "Projetos em destaque",
    "contato.titulo": "Vamos conversar?",
    "contato.email": "Email",
    "contato.linkedin": "LinkedIn",
    "contato.whatsapp": "WhatsApp",
    "footer.direitos": "Todos os direitos reservados.",
    "projeto.ygornutri.desc": "Site institucional responsivo para nutricionista, com foco em performance, informações de serviço, contato direto e IMC interativo.",
    "projeto.bikecraft.desc": "Landing page moderna e responsiva para e-commerce de bicicletas premium. Destaque para o design e usabilidade.",
    "projeto.imc.desc": "Ferramenta simples e funcional para cálculo de IMC, utilizando apenas HTML, CSS e Javascript puro.",
    "projeto.amigosecreto.desc": "Aplicativo web para sorteio automático de amigo secreto com envio de resultados por email. Fácil de usar e ideal para grupos.",
    "vermais.btn": "Ver mais projetos",
    "modal.titulo.frontend": "Projetos Front-End",
    "modal.titulo.backend": "Projetos Back-End",
    "modal.titulo.fullstack": "Projetos Full Stack"
  },
  en: {
    "hero.greeting": "Hi, I'm Leonardo 👋",
    "hero.subtitle": "Frontend developer passionate about building modern, clean and performant interfaces with Javascript/Typescript and React.",
    "hero.button": "View my projects",
    "sobre.titulo": "About me",
    "sobre.texto": "I'm Leonardo Mattheus, a front-end developer passionate about turning ideas into efficient and visually striking digital experiences. I create modern, accessible and responsive interfaces, always focused on usability, performance and clean code. I have hands-on experience with HTML, CSS, Javascript, React, Tailwind and tools like Firebase, Git and Vite. I've built real projects for clients, such as institutional websites, landing pages, interactive calculators and simple systems with authentication and database. Besides technique, I value best development practices, like clean architecture, code reuse and basic SEO. I'm always learning, testing new technologies and seeking smart solutions to deliver real value.",
    "projetos.titulo": "Featured Projects",
    "contato.titulo": "Let's talk?",
    "contato.email": "Email",
    "contato.linkedin": "LinkedIn",
    "contato.whatsapp": "WhatsApp",
    "footer.direitos": "All rights reserved.",
    "projeto.ygornutri.desc": "Responsive institutional website for a nutritionist, focused on performance, service information, direct contact and interactive BMI.",
    "projeto.bikecraft.desc": "Modern and responsive landing page for a premium bicycle e-commerce. Highlights for design and usability.",
    "projeto.imc.desc": "Simple and functional tool for BMI calculation, using only pure HTML, CSS and Javascript.",
    "projeto.amigosecreto.desc": "Web app for automatic secret friend draw with email results. Easy to use and ideal for groups."
    , "vermais.btn": "See more projects",
    "modal.titulo.frontend": "Front-End Projects",
    "modal.titulo.backend": "Back-End Projects",
    "modal.titulo.fullstack": "Full Stack Projects"
  },
  fr: {
    "hero.greeting": "Salut, je suis Leonardo 👋",
    "hero.subtitle": "Développeur front-end passionné par la création d'expériences web modernes avec Javascript/Typescript, React et un code propre.",
    "hero.button": "Voir mes projets",
    "sobre.titulo": "À propos de moi",
    "sobre.texto": "Je suis Leonardo Mattheus, développeur front-end passionné par la transformation d'idées en expériences numériques efficaces et visuellement marquantes. J'ai de l'expérience avec HTML, CSS, Javascript, React, Tailwind, Firebase, Git et Vite. J'ai déjà réalisé des projets réels pour des clients, tels que des sites institutionnels, des landing pages, des calculateurs interactifs et des systèmes simples avec authentification et base de données. J'apprécie les bonnes pratiques de développement, comme l'architecture propre, la réutilisation du code et le SEO de base. Je suis toujours en train d'apprendre, de tester de nouvelles technologies et de chercher des solutions intelligentes pour livrer de la valeur réelle.",
    "projetos.titulo": "Projets en vedette",
    "contato.titulo": "On discute ?",
    "contato.email": "Email",
    "contato.linkedin": "LinkedIn",
    "contato.whatsapp": "WhatsApp",
    "contato.descricao": "Contactez-moi pour collaborer sur des projets ou demander un devis. Je peux vous aider avec le développement, l'édition vidéo, les landing pages, les annonces et l'optimisation SEO. Envoyez un message et demandez un devis.",
    "footer.direitos": "Tous droits réservés.",
    "projeto.ygornutri.desc": "Site institutionnel responsive pour nutritionniste, axé sur la performance, informations de service, contact direct et IMC interactif.",
    "projeto.bikecraft.desc": "Landing page moderne et responsive pour un e-commerce de vélos premium. Design et expérience utilisateur mis en avant.",
    "projeto.imc.desc": "Outil simple et fonctionnel pour le calcul de l'IMC, utilisant uniquement HTML, CSS et Javascript purs.",
    "projeto.amigosecreto.desc": "Application web pour tirage au sort automatique d'ami secret avec envoi des résultats par email. Facile à utiliser et idéale pour les groupes."
    ,
    "vermais.btn": "Voir plus de projets",
    "modal.titulo.frontend": "Projets Front-End",
    "modal.titulo.backend": "Projets Back-End",
    "modal.titulo.fullstack": "Projets Full Stack"
  }
};

function setLanguage(lang) {
  document.documentElement.lang = lang;
  localStorage.setItem("lang", lang);

  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach(el => {
    const key = el.getAttribute("data-i18n");
    const translation = translations[lang][key];
    if (translation) {
      el.textContent = translation;
    }
  });
}

// Auto apply saved language
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "pt";
  const langSelect = document.getElementById("lang-select");
  if (langSelect) {
    langSelect.value = savedLang;
    langSelect.addEventListener("change", e => setLanguage(e.target.value));
  }
  setLanguage(savedLang);
});

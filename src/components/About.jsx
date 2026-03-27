import './About.css';
import profileImg from '../assets/profile/leomatth.png';

export default function About() {

  return (
    <section id="about" className="about">
      <h2>Sobre mim</h2>
      <div className="about-content">
        <img src={profileImg} alt="Leonardo Matheus" className="about-profile-img" />
        <div className="about-text">
          <p>
            Olá! Eu sou Leonardo Matheus, um desenvolvedor apaixonado por tecnologia e inovação. Tenho experiência em desenvolvimento web com foco em React, Node.js e outras tecnologias modernas. Estou sempre em busca de novos desafios e aprendizados para criar soluções que façam a diferença.
          </p>
          <p>
            Meu objetivo é desenvolver aplicações web escaláveis, responsivas e com excelente experiência do usuário. Sou dedicado a entregar código limpo, bem documentado e otimizado para performance.
          </p>
        </div>
      </div>
    </section>
  )
}

import React, { useState, useEffect } from 'react';
import './home.css';

const YELLOW = '{ YELLOW }';

function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`home-container ${isVisible ? 'visible' : ''}`}>
      <div className="background-elements">
        <div className="floating-element el1"></div>
        <div className="floating-element el2"></div>
        <div className="floating-element el3"></div>
        <div className="floating-element el4"></div>
      </div>
      
      <div className='text-content'>
        <h1 className="title-animation">
          <span className="bracket">{'{'}</span>
          <span className="yellow-text"> YELLOW </span>
          <span className="bracket">{'}'}</span>
        </h1>
        
        <div className="content-grid">
          <div className="text-column">
            <p className="fade-in" style={{animationDelay: '0.2s'}}>
              Se inspira en <strong><a href='https://theunsentproject.com/about' className="highlight-link">The Unsent Project</a></strong>, <strong className="yellow-glow">{ YELLOW }</strong> es un archivo que recopila mensajes de texto nunca enviados, permitiéndote expresar de manera anónima las palabras que se quedaron atrapadas en el tiempo.
            </p>

            <div className="interactive-section">
              <h3 className="section-title">💛 ¿A quién puedes escribir?</h3>
              <p className="fade-in" style={{animationDelay: '0.4s'}}>
                No hay límites en el destinatario: amores del pasado o presente, amistades, familia, mascotas, lugares, objetos queridos, o versiones de ti mismx... cualquier ser o concepto significativo es válido para recibir tus palabras.
              </p>
            </div>
          </div>

          <div className="text-column">
            <div className="interactive-section">
              <h3 className="section-title">¿Cómo funciona?</h3>
              <p className="fade-in" style={{animationDelay: '0.6s'}}>
                Cada mensaje se almacena en nuestro archivo en línea y se dedica a un destinatario específico. Si quieres saber si alguien te escribió, puedes buscar tu nombre en la plataforma.
              </p>
            </div>

            <div className="interactive-section">
              <h3 className="section-title">La experiencia { YELLOW }</h3>
              <p className="fade-in" style={{animationDelay: '0.8s'}}>
                Al enviar tu mensaje, recibirás acceso a la canción <code className="code-block">import { YELLOW } from './CVLTVRE'</code>.
              </p>
            </div>
          </div>
        </div>

        <div className="cta-section">
          <p className="fade-in" style={{animationDelay: '1s'}}>
            <strong>Te invitamos a:</strong><br/>
            Liberar el mensaje que cargas contigo. Únete a una comunidad donde escuchamos los mensajes pendientes, lo que pudo ser y no fue.
          </p>
        </div>

        <div className="links fade-in" style={{animationDelay: '1.2s'}}>
          <a href="https://discord.gg/yzXKJq8TDm" className="btn interactive-btn">
            <span className="btn-icon">💛</span>
            <span className="btn-text">Únete a nuestra comunidad en Discord</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
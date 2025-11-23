import React, { useState, useEffect } from 'react';
import './creditsScreen.css';

const YELLOW = 'YELLOW';

function CreditsScreen() {
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const teamMembers = [
    { role: "Portada y diseño conceptual del proyecto", name: "Judá Inacua @heey.yude" },
    { role: "Letra y composición", name: "Julio César Anzures y José Roberto Torres Martínez" },
    { role: "Arreglo de batería", name: "José Roberto Torres Martínez" },
    { role: "Arreglo de cuerdas", name: "Diego Romero" },
    { role: "Batería", name: "@jampii_drummer" },
    { role: "Guitarra", name: "Javier Chávez" },
    { role: "Producción musical, mezcla, master y arreglos", name: "Sebastián Almaraz Coria" },
    { role: "Voz y vocal coaching", name: "Sharon Cuevas" },
    { role: "Interpretación", name: "Romero Arias" }
  ];

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = (e) => {
    console.error('Error loading image:', e);
    // Puedes agregar una imagen de fallback aquí si quieres
  };

  return (
    <div className={`credits-container ${isVisible ? 'visible' : ''}`}>
      <div className="background-elements">
        <div className="floating-element el1"></div>
        <div className="floating-element el2"></div>
        <div className="floating-element el3"></div>
      </div>

      <div className="credits-header">
        <a href="https://onerpm.link/721046957373" target="_blank" rel="noopener noreferrer" className="image-link">
          <img 
            src={`${process.env.PUBLIC_URL}/yellow-player.png`}
            alt="Portada de import { YELLOW }" 
            className={`credits-image ${imageLoaded ? 'loaded' : ''}`}
            onLoad={handleImageLoad}
            onError={handleImageError}
          />
          <div className="image-overlay">
            <span>🎵 Escuchar en streaming</span>
          </div>
        </a>
        
        <div className="title-section">
          <h1 className="code-title">
            <span className="code-keyword">import</span>
            <span className="code-bracket">{' {'}</span>
            <span className="code-yellow"> YELLOW </span>
            <span className="code-bracket">{' }'}</span>
            <span className="code-keyword"> from </span>
            <span className="code-path">'./CVLTVRE'</span>
          </h1>
        </div>
      </div>

      <div className="credits-content">
        <div className="team-section">
          <h2 className="section-title">Equipo Creativo</h2>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="team-card fade-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="team-role">{member.role}</div>
                <div className="team-name">{member.name}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="story-section">
          <h2 className="section-title">La historia de {YELLOW}</h2>
          <div className="story-content">
            <div className="story-paragraph fade-in" style={{animationDelay: '0.2s'}}>
              <p>
                <strong>import { YELLOW } from './CVLTVRE';</strong> es una canción que tiene un gran valor emocional para mí. Todo comenzó cuando mis amigos <strong>Julio</strong> y <strong>Roberto</strong> escribieron la canción para su banda CVLTVRE cuando tenían alrededor de 18 años. Años después, en 2018 o 2019, tuve la suerte de participar en la mezcla de la canción, pero por cosas de la vida, nunca salió. Con el tiempo nos distanciamos, pero hace poco les pedí a mis amigos de la prepa que me dejaran volver a producirla para mi proyecto, esta vez con más experiencia.
              </p>
            </div>

            <div className="story-paragraph fade-in" style={{animationDelay: '0.4s'}}>
              <p>
                Esta canción es muy valiosa para mí, no solo por la letra y el tema que me parecen conmovedores, sino porque es un símbolo de la amistad que tuvimos, que en su momento fue muy fuerte. Con el tiempo, aunque me siento culpable, fui yo quien eligió alejarme poco a poco. Al volver a trabajar en la canción, comencé haciendo un arreglo de cuerdas más completo usando un plugin de LABS, que tiene grabaciones de cuerdas realmente buenas: contrabajos, cellos, violas y violines, lo que le dio una atmósfera orquestal rica.
              </p>
            </div>

            <div className="highlight-box fade-in" style={{animationDelay: '0.6s'}}>
              <div className="highlight-icon"></div>
              <div className="highlight-content">
                <h3>El Proceso de Producción</h3>
                <p>
                  Mientras trabajaba en los arreglos, se unió a la producción mi gran amigo y productor <strong>Tatan</strong>. Durante varias sesiones de arreglos, fuimos añadiendo capas de sonidos que ayudaron a crear la atmósfera que queríamos para la canción.
                </p>
              </div>
            </div>

            <div className="story-paragraph fade-in" style={{animationDelay: '0.8s'}}>
              <p>
                Incluimos sonidos como el golpeo de las teclas del piano eléctrico al inicio, efectos y ruidos de guitarra a lo largo de la canción, el sonido del metrónomo que se coló en una parte de la grabación, el ambiente de un parque que <strong>Tatan</strong> grabó, y hasta el ruido de fondo mientras <strong>Juanpi</strong>, el baterista, se acomodaba durante la sesión.
              </p>
            </div>

            <div className="features-grid fade-in" style={{animationDelay: '1s'}}>
              <div className="feature-card">
                <div className="feature-icon"></div>
                <h4>Guitarras</h4>
                <p>Inspiradas en "Gemini" de Alabama Shakes, ejecutadas por <strong>Javier Chávez</strong></p>
              </div>
              <div className="feature-card">
                <div className="feature-icon"></div>
                <h4>Batería</h4>
                <p>Grabada en espacio cerrado con cobijas y paneles acústicos por <strong>Juanpi</strong></p>
              </div>
              <div className="feature-card">
                <div className="feature-icon"></div>
                <h4>Voz</h4>
                <p>Coaching vocal de <strong>Sharon</strong> para encontrar la técnica adecuada</p>
              </div>
            </div>

            <div className="story-paragraph fade-in" style={{animationDelay: '1.2s'}}>
              <p>
                En cuanto a la portada, <strong>Jude</strong> y yo discutimos que queríamos recrear un entorno íntimo relacionado con la programación y nuestra relación con la computadora, algo importante ya que tanto en la creación de la página web como en la producción de la canción, pasamos muchas horas frente a la computadora.
              </p>
            </div>

            <div className="conclusion-box fade-in" style={{animationDelay: '1.4s'}}>
              <p>
                El título de la canción, <strong>import { YELLOW } from './CVLTVRE';</strong>, es un homenaje al proyecto original de mis amigos. Es una sentencia básica de código para importar, lo cual es lo que hice con la canción para integrarla en mi proyecto <strong>ROM_01</strong>. Para mí, esta es una canción no solo sobre un amor perdido, sino también una celebración de las antiguas amistades y las nuevas colaboraciones.
              </p>
            </div>
          </div>
        </div>

        <div className="action-section fade-in" style={{animationDelay: '1.6s'}}>
          <a href="https://onerpm.link/721046957373" target="_blank" rel="noopener noreferrer" className="stream-btn">
            <span className="btn-icon">🎵</span>
            <span className="btn-text">Escuchar {YELLOW} en tu plataforma favorita</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default CreditsScreen;
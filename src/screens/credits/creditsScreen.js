import React from 'react';
import './creditsScreen.css';
import yellowPlayerImage from '../credits/yellow-player.png';

const YELLOW = 'YELLOW';

function CreditsScreen() {
  return (
    <div className="credits-container">
      <a href="https://open.spotify.com/artist/3Vph1OYNirHJ7EOnRpGrNo?si=N5ux69HXRpCRnnGbAfXJ8A" target="_blank" rel="noopener noreferrer">
        <img 
          src={yellowPlayerImage}
          alt="Portada de import { YELLOW }" 
          className="credits-image"
        />
      </a>
      <div className="credits">
        <h2>import { YELLOW } from './CVLTVRE'</h2>
        <p><strong>Artista de la portada y diseñador conceptual del proyecto:</strong> Judá Inacua @heey.yude</p>
        <p><strong>Compositor y letrista:</strong> Julio César Anzures</p>
        <p><strong>Arreglista de batería:</strong> José Roberto Torres Martínez</p>
        <p><strong>Arreglista de cuerdas:</strong> Diego Romero</p>
        <p><strong>Baterista:</strong> @jampii_drummer</p>
        <p><strong>Guitarrista:</strong> Javier Chávez</p>
        <p><strong>Productor musical, ingeniero de mezcla y master, arreglista:</strong> Sebastián Almaraz Coria</p>
        <p><strong>Voz secundaria y vocal coach de grabación:</strong> Sharon Cuevas</p>
        <p><strong>Intérprete y artista:</strong> Romero Arias</p>
      </div>
    </div>
  )
}

export default CreditsScreen;


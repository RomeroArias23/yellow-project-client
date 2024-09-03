import React from 'react';
import './creditsScreen.css';
import yellowPlayerImage from '../credits/yellow-player.png';

const YELLOW = 'YELLOW';

function CreditsScreen() {
  return (
    <div className="credits-container">
      <a href="https://onerpm.link/721046957373" target="_blank" rel="noopener noreferrer">
        <img 
          src={yellowPlayerImage}
          alt="Portada de import { YELLOW }" 
          className="credits-image"
        />
      </a>
      <div className="credits">
        <h2>import { YELLOW } from './CVLTVRE'</h2>
        <p><strong>Portada y diseño conceptual del proyecto:</strong> Judá Inacua @heey.yude</p>
        <p><strong>Letra y composición:</strong> Julio César Anzures y José Roberto Torres Martínez</p>
        <p><strong>Arreglo de batería:</strong> José Roberto Torres Martínez</p>
        <p><strong>Arreglo de cuerdas:</strong> Diego Romero</p>
        <p><strong>Batería:</strong> @jampii_drummer</p>
        <p><strong>Guitarra:</strong> Javier Chávez</p>
        <p><strong>Producción musical, mezcla, master y arreglos:</strong> Sebastián Almaraz Coria</p>
        <p><strong>Voz y vocal coaching:</strong> Sharon Cuevas</p>
        <p><strong>Interpretación:</strong> Romero Arias</p>
      </div>
    </div>
  )
}

export default CreditsScreen;

